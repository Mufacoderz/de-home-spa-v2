import { NextResponse } from "next/server";
import { askGroq } from "@/lib/ai/groq";
import { retrieveTreatments } from "@/lib/ai/retrieval";
import { parseJSONObject } from "@/lib/ai/parser";
import { CHAT_SYSTEM_PROMPT, buildChatPrompt } from "@/lib/ai/prompt";
import type { ChatAIResponse, ChatMessage } from "@/types/chat";
import type { GroqResponse } from "@/types/groq";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const userMessage = body.userMessage as string;
        const chatHistory = (body.chatHistory ?? []) as ChatMessage[];

        if (!userMessage?.trim()) {
            return NextResponse.json(
                { success: false, message: "Pesan tidak boleh kosong" },
                { status: 400 }
            );
        }

        const contextQuery = [
            ...chatHistory.map((msg) => msg.content),
            userMessage,
        ].join(" ");

        const relevantTreatments = retrieveTreatments(contextQuery, 6);

        const prompt = buildChatPrompt({
            userMessage,
            chatHistory,
            treatments: relevantTreatments,
        });

        const res: GroqResponse = await askGroq(
            [{ role: "user", content: prompt }],
            CHAT_SYSTEM_PROMPT
        );

        const content = res?.choices?.[0]?.message?.content || "";
        const parsed = parseJSONObject<ChatAIResponse>(content);

        if (!parsed) {
            return NextResponse.json({
                success: false,
                message: "AI gagal menghasilkan response valid",
                raw: content,
            });
        }

        return NextResponse.json({
            success: true,
            data: parsed,
            meta: {
                retrieved: relevantTreatments.map((t) => t.kode),
            },
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: "Terjadi error pada chat AI",
            },
            { status: 500 }
        );
    }
}