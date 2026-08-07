"use client";

import Image from "next/image";
import iconCoklat from "@/public/images/logo-coklat.png";

interface Props {
  role: "user" | "assistant";
  message: string;
}

export default function ChatBubble({ role, message }: Props) {
  const isUser = role === "user";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="mr-2 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-fern-frost2 bg-fern-petal3 shadow-sm">
          <Image
            src={iconCoklat}
            alt="Fern"
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
      )}

      <div
        className={`
          max-w-[85%] rounded-[24px] px-4 py-3 font-poppins text-sm
          leading-relaxed shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-300
          ${
            isUser
              ? "rounded-br-md bg-ternary text-white"
              : "rounded-bl-md border border-fern-frost2 bg-main text-main"
          }
        `}
      >
        {!isUser && (
          <p className="mb-1 text-[11px] font-medium text-fern-glow2">
            Fern
          </p>
        )}

        <p>{message}</p>
      </div>
    </div>
  );
}