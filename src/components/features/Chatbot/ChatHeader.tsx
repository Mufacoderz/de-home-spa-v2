"use client";

import Image from "next/image";
import { ArrowLeft, Plus } from "lucide-react";

import iconCoklat from "@/public/images/logo-coklat.png";

interface Props {
    onBack: () => void;
    onNewChat: () => void;
}

export default function ChatHeader({ onBack, onNewChat }: Props) {
    return (
        <header className="flex items-center gap-3 border-b border-[#E8D0A4] bg-[#FFF9EF]/90 px-4 py-4">
            <button
                onClick={onBack}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8D0A4] bg-white text-main transition hover:bg-[#603e00] hover:text-white"
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

                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#FFF9EF] bg-[#7DBE72]" />
            </div>

            <div className="min-w-0 flex-1">
                <h1 className="font-playfair text-2xl font-bold leading-none text-main">
                    Thera AI
                </h1>
                <p className="mt-1 truncate font-poppins text-xs text-second">
                    Online • Konsultasi treatment de HOME SPA
                </p>
            </div>

            <button
                onClick={onNewChat}
                className="
    group
    inline-flex
    h-10
    items-center
    justify-center
    gap-2
    rounded-full
    border
    border-thera
    bg-thera-surface
    px-3
    font-poppins
    text-xs
    font-semibold
    text-main
    shadow-sm
    transition-all
    hover:bg-ternary
    hover:text-ternary
    active:scale-95
  "
            >
                <Plus
                    size={15}
                    className="transition-transform group-hover:rotate-90"
                />

                <span className="hidden sm:inline">
                    Chat Baru
                </span>
            </button>
        </header>
    );
}