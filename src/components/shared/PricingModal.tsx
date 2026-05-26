"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import type { Treatment } from "@/types/treatment";
import { Clock } from "lucide-react";

type Durasi = 30 | 60 | 90 | 120;

export default function PricingModal({
  treatment,
  onClose,
}: {
  treatment: Treatment;
  onClose: () => void;
}) {
  const router = useRouter();

  const durations: Durasi[] = [30, 60, 90, 120];
  const [selected, setSelected] = useState<Durasi>(60);

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
          <div className="mb-4 bg-[#8B6B52] p-6 pr-8 text-center">
            <h3 className="font-poppins text-[27px] font-bold text-white">
              Durasi & Harga
            </h3>

            <p className="font-poppins text-[14px] text-white">
              Pilih Durasi Layanan Sesuai Kebutuhan Anda
            </p>
          </div>

          <div className="m-5 flex flex-col gap-2.5 rounded-[15px] border border-[#8B6B52] px-2 py-5">
            {durations.map((d) => (
              <button
                key={d}
                onClick={() => setSelected(d)}
                className={`flex items-center justify-between border-b px-4 py-3.5 transition-all ${
                  selected === d
                    ? "border-b-[#BD8622] bg-[#fdf6e9]"
                    : "border-b-stone-200 bg-white hover:border-b-[#BD8622]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="icon-jam rounded-full bg-second p-1">
                    <Clock size={20} className="text-[#BD8622]" />
                  </div>

                  <div className="text-left">
                    <p className="font-poppins text-sm font-semibold text-stone-800">
                      {d} menit
                    </p>

                    <p className="font-poppins text-[11px] text-stone-400">
                      Durasi Treatment
                    </p>
                  </div>
                </div>

                <span className="font-poppins text-sm font-bold text-[#BD8622]">
                  Rp {treatment.harga[d].toLocaleString("id-ID")}
                </span>
              </button>
            ))}
          </div>

          <div className="btn-card m-5 mt-0 flex flex-col gap-2.5">
            <button
              onClick={handleBook}
              className="booking rounded-xl bg-[#8B6B52] p-4 text-center font-poppins font-semibold text-[#FDF5E6] shadow-[2px_3px_0px_0px_#FDF5E6] transition-all duration-100 hover:translate-x-px hover:translate-y-px hover:shadow-[1px_2px_0px_0px_#FDF5E6] active:translate-x-0.5 active:translate-y-0.75 active:shadow-none"
            >
              Booking Sekarang
            </button>

            <button
              onClick={onClose}
              className="batal rounded-xl bg-[#FDF5E6] p-4 text-center font-poppins font-semibold text-[#8B6B52] shadow-[2px_3px_0px_0px_#761A1C] transition-all duration-100 hover:translate-x-px hover:translate-y-px hover:shadow-[1px_2px_0px_0px_#761A1C] active:translate-x-0.5 active:translate-y-0.75 active:shadow-none"
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