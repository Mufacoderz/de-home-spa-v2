"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TheraLoadingScreen from "../../features/Chatbot/TheraLoadingScreen";

export default function TheraButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function handleStartThera() {
    setLoading(true);
    setTimeout(() => {
      router.push("/chatthera");
    }, 2400);
  }

  return (
    <>
      <button
        onClick={handleStartThera}
        className="relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-xl bg-[#603e00] px-10 py-4 font-poppins text-[16px] font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03]"
      >
        {/* efek kilap auto-play looping */}
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
          <span className="absolute top-0 h-full w-[40%] rotate-12 bg-white/30 blur-md shine-auto animate-shine" />
        </span>
        <span className="relative z-10">Konsultasi Dengan Thera</span>
      </button>
      {loading && <TheraLoadingScreen />}
    </>
  );
}