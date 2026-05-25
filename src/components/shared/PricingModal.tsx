"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl bg-white overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="card-pricing">
          <div className="mb-4 pr-8 bg-[#8B6B52] p-6 text-center">
            <h3 className="text-white font-poppins text-[27px] font-bold">Durasi & Harga</h3>
            <p className="text-white font-poppins text-[14px]">Pilih Durasi Layanan Sesuai Kebutuhan Anda</p>
          </div>


          <div className="flex flex-col gap-2.5 m-5 rounded-[15px] px-2 py-5 border border-[#8B6B52]">
            {durations.map((d) => (
              <button
                key={d}
                onClick={() => setSelected(d)}
                className={`flex items-center justify-between px-4 py-3.5 border-b transition-all ${selected === d
                  ? "border-b-[#BD8622] bg-[#fdf6e9]"
                  : "border-b-stone-200 bg-white hover:border-b-[#BD8622]"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div className="icon-jam bg-second p-1 rounded-full">
                    <Clock size={20} className=" text-[#BD8622]" />
                  </div>
                  <div className="text-left">
                    <p className="font-poppins text-sm font-semibold text-stone-800">{d} menit</p>
                    <p className="font-poppins text-[11px] text-stone-400">Durasi Treatment</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-poppins text-sm font-bold text-[#BD8622]">
                    Rp {treatment.harga[d].toLocaleString("id-ID")}
                  </span>

                </div>
              </button>
            ))}
          </div>


          <div className="btn-card m-5 mt-0 flex flex-col gap-2.5">
            <button
              onClick={handleBook}
              className="booking font-poppins font-semibold bg-[#8B6B52] text-[#FDF5E6] text-center p-4 rounded-xl  shadow-[2px_3px_0px_0px_#FDF5E6]  hover:shadow-[1px_2px_0px_0px_#FDF5E6] hover:translate-x-px hover:translate-y-px active:shadow-none active:translate-x-0.5 active:translate-y-0.75 transition-all duration-100"
            >
              Booking Sekarang
            </button>

            <button
              onClick={() => onClose()}
              className="batal font-poppins font-semibold bg-[#FDF5E6] text-[#8B6B52] text-center p-4 rounded-xl  shadow-[2px_3px_0px_0px_#761A1C] hover:shadow-[1px_2px_0px_0px_#761A1C] hover:translate-x-px hover:translate-y-px active:shadow-none active:translate-x-0.5 active:translate-y-0.75 transition-all duration-100"
            >
              Batal
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}