"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, SendHorizontal, Loader2 } from "lucide-react";
import ChatBubble from "./ChatBubble";
import RecommendationCard from "./RecommendationCard";
import TheraLoadingScreen from "./TheraLoadingScreen";
import TypingIndicator from "./TypingIndicator";
import Image from "next/image";
import iconCoklat from "@/public/images/logo-coklat.png";

import type { ChatMessage, ChatAIResponse } from "@/types/chat";

export default function ChatShell() {
    const router = useRouter();

    const bottomRef =
        useRef<HTMLDivElement | null>(null);

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);




    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: "welcome",
            role: "assistant",
            type: "chat",
            content:
                "Halo, aku Thera. Ceritakan keluhan tubuhmu, nanti aku bantu arahkan treatment yang paling cocok.",
        },
    ]);

    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [leaving, setLeaving] = useState(false);

    function handleBack() {
        setLeaving(true);

        setTimeout(() => {
            router.push("/");
        }, 1200);
    }

    function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setInput(e.target.value);

        const textarea = e.target;
        textarea.style.height = "auto";
        textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    }

    async function handleSend() {
        if (!input.trim() || loading) return;

        const userMessage: ChatMessage = {
            id: crypto.randomUUID(),
            role: "user",
            type: "chat",
            content: input,
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        requestAnimationFrame(() => {
            if (textareaRef.current) {
                textareaRef.current.style.height = "auto";
            }
        });
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userMessage: userMessage.content,
                    chatHistory: messages,
                }),
            });

            const result = await res.json();

            if (!result.success) {
                throw new Error(result.message);
            }

            const aiData = result.data as ChatAIResponse;

            const assistantMessage: ChatMessage = {
                id: crypto.randomUUID(),
                role: "assistant",
                type: aiData.type,
                content: aiData.message,
                treatments: aiData.treatments,
            };

            setMessages((prev) => [...prev, assistantMessage]);
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    id: crypto.randomUUID(),
                    role: "assistant",
                    type: "chat",
                    content:
                        "Maaf, Thera lagi gagal memproses pesanmu. Coba kirim ulang sebentar lagi.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {

        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });

    }, [messages, loading]);


    const quickSuggestions = [
        "Punggungku pegal habis duduk lama",
        "Kepalaku pusing dan tegang",
        "Kakiku capek setelah banyak jalan",
        "Aku mau treatment yang lembut dan relaks",
    ];

    function handleQuickSuggestion(text: string) {
        if (loading) return;
        setInput(text);
    }

    return (
        <main className="min-h-screen bg-[#FDF5E6] px-4 py-5">
            {leaving && (
                <TheraLoadingScreen
                    title="Thera AI"
                    texts={[
                        "Mengakhiri sesi konsultasi...",
                        "Menyimpan pengalaman konsultasimu...",
                        "Kembali ke halaman utama...",
                    ]}
                />
            )}

            <div className="mx-auto flex h-[calc(100vh-40px)] max-w-3xl flex-col overflow-hidden rounded-[28px] border border-[#E8D0A4] bg-white/70 shadow-lg backdrop-blur">
                <header className="flex items-center gap-3 border-b border-[#E8D0A4] bg-[#FFF9EF]/90 px-4 py-4">
                    <button
                        onClick={handleBack}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8D0A4] bg-white text-main transition hover:bg-[#8B6B52] hover:text-white"
                        aria-label="Kembali"
                    >
                        <ArrowLeft size={20} />
                    </button>

                    <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E8D0A4] bg-white shadow-sm">
                        <Image
                            src={iconCoklat}
                            alt="Thera AI"
                            width={28}
                            height={28}
                            className="object-contain"
                            priority
                        />

                        <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-[#FFF9EF] bg-[#7DBE72]" />
                    </div>

                    <div className="flex-1">
                        <h1 className="font-playfair text-2xl font-bold leading-none text-[#603E00]">
                            Thera AI
                        </h1>
                        <p className="mt-1 font-poppins text-xs text-[#8B6B52]">
                            Online • Konsultasi treatment de HOME SPA
                        </p>
                    </div>
                </header>

                <div className="flex-1 space-y-3 overflow-y-auto px-4 py-5">
                    {messages.map((msg) => (
                        <div key={msg.id}>
                            {msg.type === "chat" && (
                                <ChatBubble role={msg.role} message={msg.content} />
                            )}

                            {msg.type === "recommendation" && (
                                <div className="space-y-3">
                                    <ChatBubble role="assistant" message={msg.content} />

                                    {msg.treatments?.map((item) => (
                                        <RecommendationCard key={item.kode} treatment={item} />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {messages.length === 1 && (
                        <div className="flex flex-wrap gap-2 pl-10">
                            {quickSuggestions.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => handleQuickSuggestion(item)}
                                    className="rounded-full border border-[#E8D0A4] bg-[#FFF9EF] px-3 py-2 font-poppins text-xs text-[#8B6B52] transition hover:bg-[#8B6B52] hover:text-white"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    )}

                    {loading && <TypingIndicator />}

                    <div ref={bottomRef} />
                </div>

                <div className="border-t border-[#E8D0A4] bg-[#FFF9EF]/90 p-4">
                    <div className="flex items-end gap-2 rounded-2xl border border-[#E8D0A4] bg-white p-2">
                        <textarea
                            ref={textareaRef}
                            value={input}
                            onChange={handleInputChange}
                            rows={1}
                            placeholder="Ceritakan keluhanmu..."
                            className="max-h-28 min-h-10 flex-1 resize-none bg-transparent px-3 py-2 font-poppins text-sm text-[#603E00] outline-none placeholder:text-[#8B6B52]/60"
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSend();
                                }
                            }}
                        />

                        <button
                            onClick={handleSend}
                            disabled={loading || !input.trim()}
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8B6B52] text-[#FFF9EF] transition hover:scale-[1.04] disabled:cursor-not-allowed disabled:opacity-50"
                            aria-label="Kirim pesan"
                        >
                            {loading ? (
                                <Loader2
                                    size={18}
                                    className="animate-spin"
                                />
                            ) : (
                                <SendHorizontal size={19} />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}