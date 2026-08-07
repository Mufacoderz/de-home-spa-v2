"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";
import FernLoadingScreen from "../../shared/FernLoadingScreen";

import type { ChatAIResponse, ChatMessage as ChatMessageType } from "@/types/chat";

const STORAGE_KEY = "fern-chat-messages";

const defaultMessages: ChatMessageType[] = [
    {
        id: "welcome",
        role: "assistant",
        type: "chat",
        content:
            "Halo, aku Fern. Ceritakan mood atau suasana yang kamu mau, nanti aku bantu temukan produk yang paling cocok.",
    },
];

const quickSuggestions = [
    "Pengen suasana kamar yang bikin tidur lebih nyenyak",
    "Butuh aroma biar ruang kerja terasa fokus dan tenang",
    "Mau aroma segar buat kamar mandi atau ruang kecil",
    "Lagi pengen suasana rumah yang hangat dan homey",
];

export default function ChatShell() {
    const router = useRouter();

    const bottomRef = useRef<HTMLDivElement | null>(null);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const [messages, setMessages] = useState<ChatMessageType[]>(() => {
        if (typeof window === "undefined") return defaultMessages;

        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (!saved) return defaultMessages;

            const parsed = JSON.parse(saved);

            if (Array.isArray(parsed) && parsed.length > 0) {
                return parsed;
            }

            return defaultMessages;
        } catch {
            localStorage.removeItem(STORAGE_KEY);
            return defaultMessages;
        }
    });

    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [leaving, setLeaving] = useState(false);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }, [messages]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, loading]);

    function handleBack() {
        setLeaving(true);

        setTimeout(() => {
            router.push("/");
        }, 1200);
    }

    function handleNewChat() {
        const confirmed = window.confirm("Mulai chat baru dengan Fern?");

        if (!confirmed) return;

        localStorage.removeItem(STORAGE_KEY);
        setMessages(defaultMessages);
        setInput("");

        requestAnimationFrame(() => {
            if (textareaRef.current) {
                textareaRef.current.style.height = "auto";
            }
        });
    }

    function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setInput(e.target.value);

        const textarea = e.target;
        textarea.style.height = "auto";
        textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    }

    function handleQuickSuggestion(text: string) {
        if (loading) return;

        setInput(text);

        requestAnimationFrame(() => {
            if (textareaRef.current) {
                textareaRef.current.style.height = "auto";
                textareaRef.current.style.height = `${Math.min(
                    textareaRef.current.scrollHeight,
                    120
                )}px`;
            }
        });
    }

    async function handleSend() {
        if (!input.trim() || loading) return;

        const userMessage: ChatMessageType = {
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
                    chatHistory: messages.filter((msg) => msg.id !== "welcome"),
                }),
            });

            const result = await res.json();

            if (!res.ok || !result.success) {
                throw new Error(result.message || "Chat API gagal");
            }

            const aiData = result.data as ChatAIResponse;

            const assistantMessage: ChatMessageType = {
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
                        "Maaf, Fern lagi gagal memproses pesanmu. Coba kirim ulang sebentar lagi.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen bg-thera px-0  sm:px-4 ">
            {leaving && (
                <FernLoadingScreen
                    title="Fern AI"
                    texts={[
                        "Mengakhiri sesi konsultasi...",
                        "Menyimpan pengalaman konsultasimu...",
                        "Kembali ke halaman utama...",
                    ]}
                />
            )}

            <div
                className=" flex h-screen flex-col overflow-hidden  bg-white
 sm:mx-auto sm:mt-5 sm:h-[calc(100vh-40px)] sm:max-w-3xl sm:rounded-[28px] sm:border sm:border-thera  sm:bg-white/70 sm:shadow-lg sm:backdrop-blur
  "
            >
                <ChatHeader onBack={handleBack} onNewChat={handleNewChat} />

                <div className="flex-1 space-y-3 overflow-y-auto px-3 py-4 sm:px-4 sm:py-5">
                    {messages.map((msg) => (
                        <ChatMessage key={msg.id} message={msg} />
                    ))}

                    {messages.length === 1 && (
                        <div className="flex flex-wrap gap-2 pl-10">
                            {quickSuggestions.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => handleQuickSuggestion(item)}
                                    className="rounded-full border border-thera bg-thera-surface px-3 py-2 font-poppins text-xs text-thera transition hover:bg-ternary hover:text-white"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    )}

                    {loading && <TypingIndicator />}

                    <div ref={bottomRef} />
                </div>

                <ChatInput
                    input={input}
                    loading={loading}
                    textareaRef={textareaRef}
                    onChange={handleInputChange}
                    onSend={handleSend}
                />
            </div>
        </main>
    );
}