"use client";

import type { Result, Treatment } from "@/types/flow";
import { formatPrice } from "@/utils/formatRupiah";
import { FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { LuSparkles, LuCalendarDays, LuShieldCheck } from "react-icons/lu";
import Image from "next/image";
import logoCoklat from '@/public/images/logo-coklat.png'
import Link from "next/link";

interface Props {
  result: Result;
  keluhan: string;
}

const handleBooking = (treatment: Treatment, durasi: number, keluhan: string) => {
  const params = new URLSearchParams({
    treatment: treatment.nama,
    level: treatment.level,
    durasi: String(durasi),
    harga: String(treatment.harga_durasi),
    keluhan,
  });

  window.location.href = `/form?${params.toString()}`;
};

export default function StepResult({ result, keluhan }: Props) {
  return (
    <section className="w-full pb-12 font-poppins text-[#8B6B52]">
      {/* <div className="mb-8 text-center">
        <h1 className="font-playfair text-xl font-semibold text-[#8B6B52]">
          de Home Spa
        </h1>
      </div>

      <div className="mb-6 flex items-center justify-center gap-2">
        <div className="h-px w-24 bg-[#8B6B52]" />
        <h2 className="font-playfair text-xl font-bold tracking-wide text-[#8B6B52]">
          PILIHAN TERBAIK
        </h2>
        <div className="h-px w-24 bg-[#8B6B52]" />
      </div> */}
      <div className="favorite-header">
        <h2 className="font-playfair  text-[36px] text-main text-center">Rekomendasi Ai</h2>
        <div className="divider-area flex items-center justify-center gap-4">
          <div className="divider w-40 h-1 bg-ternary rounded-full" />
          <div className="logo">
            <Image src={logoCoklat} width={80} height={80} alt="logo" />
          </div>
          <div className="divider w-40 h-1 bg-ternary rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.35fr_0.85fr]">
        <div className="space-y-4">
          <div className="rounded-2xl border border-[#C8A96E] bg-[#FFF8E8] p-5 shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <div className="-ml-2 flex w-fit items-center gap-2 rounded-r-full bg-ternary px-4 py-2 text-xs font-bold text-white">
                <LuSparkles />
                <span>Rekomendasi AI</span>
              </div>

            </div>

            <div className="relative rounded-xl bg-[#FFF0C7] px-6 py-5">
              <FaQuoteLeft className="absolute left-3 top-4 text-xl text-[#8B6B52]/60" />

              <p className="pl-6 text-sm leading-7 text-main">
                {result.reason}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full bg-ternary px-4 py-1 text-[10px] font-semibold text-white">
                #{result.treatment.area}
              </span>

              <span className="rounded-full bg-ternary px-4 py-1 text-[10px] font-semibold text-white">
                #{result.treatment.level}
              </span>

            </div>
          </div>

          <div className="rounded-2xl border border-[#C8A96E] bg-[#FFF8E8] p-5 shadow-md">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_1px_1.7fr] md:items-center">
              <div>
                <h3 className="text-2xl font-bold leading-6 text-main">
                  Paket
                  <br />
                  {result.treatment.nama}
                </h3>

                <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-[#FFF0C7] px-3 py-1 text-[10px] text-[#8B6B52]">
                  <LuShieldCheck />
                  <span>Terapi Aman & Nyaman</span>
                </div>
              </div>

              <div className="hidden h-28 w-px bg-[#8B6B52]/50 md:block" />

              <div>
                <div className="mb-4 grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-[#F0C98D] bg-[#FFF3D5] px-4 py-3">
                    <p className="text-[10px] text-[#C8A96E]">Durasi</p>
                    <p className="mt-1 text-lg text-[#8B6B52]">
                      {result.durasi} Menit
                    </p>
                  </div>

                  <div className="rounded-lg border border-[#F0C98D] bg-[#FFF3D5] px-4 py-3">
                    <p className="text-[10px] text-[#C8A96E]">Harga</p>
                    <p className="mt-1 text-2xl font-semibold text-[#8B6B52]">
                      {formatPrice(result.treatment.harga_durasi)}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    handleBooking(result.treatment, result.durasi, keluhan)
                  }
                  className="flex w-full items-center justify-between rounded-lg bg-ternary px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#735640]"
                >
                  <span className="flex items-center gap-2">
                    <LuCalendarDays />
                    Booking Sekarang
                  </span>
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        <aside className="pt-2">
          <h3 className="mb-5 text-center font-playfair text-xl font-bold text-[#8B6B52]">
            Treatment Terkait
          </h3>

          <div className="space-y-4">
            {result.related?.map((t) => (
              <div
                key={t.kode}
                className="rounded-lg border border-[#B98F6B] bg-[#FFF8E8] p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-main">
                        {t.nama}
                      </h4>

                      <span className="rounded-full bg-[#F8D7B0] px-2 py-0.5 text-[8px] text-[#8B6B52]">
                        {t.level}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center gap-4 text-xs text-[#8B6B52]">
                      <span>
                        {result.durasi} Menit
                      </span>

                      <span>
                        {formatPrice(t.harga_durasi)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleBooking(t, result.durasi, keluhan)}
                    className="shrink-0 rounded-lg bg-ternary px-4 py-2 text-[10px] font-semibold text-white transition hover:bg-[#735640]"
                  >
                    Booking Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <div className="mb-2 flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-[#8B6B52]" />
              <span className="border border-[#C8A96E] px-2 text-[10px] text-[#C76B4A]">
                atau
              </span>
              <div className="h-px w-12 bg-[#8B6B52]" />
            </div>

            <Link href='/#daftar-layanan' className="inline-flex items-center gap-2 text-xs font-semibold text-[#8B6B52]">
              Jelajahi Layanan Kami
              <FaChevronRight className="text-[10px]" />
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}