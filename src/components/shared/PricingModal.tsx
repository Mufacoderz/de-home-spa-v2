"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import type { Treatment } from "@/types/treatment";
import { Ruler } from "lucide-react";

type Ukuran = 10 | 30 | 60 | 100;

export default function PricingModal({
  treatment,
  onClose,
}: {
  treatment: Treatment;
  onClose: () => void;
}) {
  const router = useRouter();

  const ukuranList: Ukuran[] = [10, 30, 60, 100];
  const [selected, setSelected] = useState<Ukuran>(30);

  const harga = treatment.harga[selected];

  function handleBook() {
    const params = new URLSearchParams({
      treatment: treatment.nama,
      level: treatment.level,
      durasi: String(selected),
      harga: String(harga),
      keluhan: "",
    });

    router.push(`/form?${params.toString()}`);
  }

  const modal = (
    <div
      className="fixed inset-0 z-999 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:max-w-md sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="card-pricing">
          <div className="mb-4 bg-fern-deep p-6 pr-8 text-center">
            <h3 className="font-poppins text-[27px] font-bold text-white">
              Ukuran & Harga
            </h3>

            <p className="font-poppins text-[14px] text-white">
              Pilih Ukuran Sesuai Kebutuhan Anda
            </p>
          </div>

          <div className="m-5 flex flex-col gap-2.5 rounded-[15px] border border-fern-deep px-2 py-5">
            {ukuranList.map((u) => (
              <button
                key={u}
                onClick={() => setSelected(u)}
                className={`flex items-center justify-between border-b px-4 py-3.5 transition-all ${
                  selected === u
                    ? "border-b-fern-ternary bg-fern-panel"
                    : "border-b-stone-200 bg-white hover:border-b-fern-ternary"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="icon-jam rounded-full bg-second p-1">
                    <Ruler size={20} className="text-fern-ternary" />
                  </div>

                  <div className="text-left">
                    <p className="font-poppins text-sm font-semibold text-stone-800">
                      {u} ml
                    </p>

                    <p className="font-poppins text-[11px] text-stone-400">
                      Ukuran Produk
                    </p>
                  </div>
                </div>

                <span className="font-poppins text-sm font-bold text-fern-ternary">
                  Rp {treatment.harga[u].toLocaleString("id-ID")}
                </span>
              </button>
            ))}
          </div>

          <div className="btn-card m-5 mt-0 flex flex-col gap-2.5">
            <button
              onClick={handleBook}
              className="booking rounded-xl bg-fern-deep p-4 text-center font-poppins font-semibold text-fern-panel shadow-[2px_3px_0px_0px_var(--fern-panel)] transition-all duration-100 hover:translate-x-px hover:translate-y-px hover:shadow-[1px_2px_0px_0px_var(--fern-panel)] active:translate-x-0.5 active:translate-y-0.75 active:shadow-none"
            >
              Pesan Sekarang
            </button>

            <button
              onClick={onClose}
              className="batal rounded-xl bg-fern-panel p-4 text-center font-poppins font-semibold text-fern-deep shadow-[2px_3px_0px_0px_var(--ternary-bg)] transition-all duration-100 hover:translate-x-px hover:translate-y-px hover:shadow-[1px_2px_0px_0px_var(--ternary-bg)] active:translate-x-0.5 active:translate-y-0.75 active:shadow-none"
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (typeof window === "undefined") {
    return null;
  }

  return createPortal(modal, document.body);
}
