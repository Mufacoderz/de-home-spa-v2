"use client";

import { useState } from "react";
import { TREATMENTS } from "@/data/treatment";
import type { Treatment } from "@/types/treatment";
import TreatmentCard from "./TreatmentCard";
import PricingModal from "../../shared/PricingModal";
import { motion } from "framer-motion"



type Kategori = "Produk Favorit" | "Candle" | "Reed Diffuser" | "Room Spray" | "Roll-On";

const KATEGORI_LIST: Kategori[] = ["Produk Favorit", "Candle", "Reed Diffuser", "Room Spray", "Roll-On"];

const FAVORIT_KODE = ["FA-CDL-001", "FA-DFS-001", "FA-RSP-001", "FA-RLO-001", "FA-CDL-004", "FA-RLO-005"];

const TAB_LABEL: Record<Kategori, string> = {
  "Produk Favorit": "Produk Favorit",
  Candle: "Candle",
  "Reed Diffuser": "Reed Diffuser",
  "Room Spray": "Room Spray",
  "Roll-On": "Roll-On",
};

export default function ReservasiManual() {
  const [activeKategori, setActiveKategori] = useState<Kategori>("Produk Favorit")
  const [modalTreatment, setModalTreatment] = useState<Treatment | null>(null)

  const filtered =
    activeKategori === "Produk Favorit"
      ? TREATMENTS.filter((t) => FAVORIT_KODE.includes(t.kode))
      : TREATMENTS.filter((t) => t.area === activeKategori);

  return (
    <div id="daftar-koleksi" className="reservasi-manual mt-10 w-full">

      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-2.5 rounded-full bg-fern-ternary" />
        <h3 className="font-poppins text-[22px] sm:text-[28px] font-extrabold text-main whitespace-nowrap">
          Eksplorasi Koleksi Kami
        </h3>
        <div className="flex-1 h-2.5 rounded-full bg-fern-ternary" />
      </div>

      <div className="bg-transparent rounded-[15px] px-3 sm:px-6 pt-4 sm:pt-6 pb-6 sm:pb-8">

        <div className="mb-6">
          {/* responsif  */}
          <div className="grid grid-cols-2 sm:hidden gap-2 bg-fern-panel p-2 rounded-[15px] border border-fern-deep/25">
            {KATEGORI_LIST.map((kat) => {
              const isActive = activeKategori === kat;

              return (
                <button
                  key={kat}
                  onClick={() => setActiveKategori(kat)}
                  className={` rounded-[12px] px-3 py-3 font-poppins text-[12px] font-bold text-center leading-snug transition-all duration-200
                  ${isActive
                      ? "bg-ternary text-white shadow-sm"
                      : "bg-transparent text-second hover:bg-fern-deep/10"
                    }
                  `}
                >
                  {TAB_LABEL[kat]}
                </button>
              );
            })}
          </div>

          {/* deskto */}
          <div className="hidden sm:flex overflow-hidden rounded-t-[15px] bg-fern-panel border border-fern-deep/30 border-b-2 border-b-fern-main  relative">
            {KATEGORI_LIST.map((kat) => {
              const isActive = activeKategori === kat;

              return (
                <button
                  key={kat}
                  onClick={() => setActiveKategori(kat)}
                  className=" relative flex-1 px-4 py-4 font-poppins text-[14px] md:text-[16px] font-bold text-center leading-snug transition-colors duration-200 text-second"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0  bg-ternary"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <span
                    className={`relative z-10 ${isActive ? "text-ternary" : "text-fern-deep"
                      }`}
                  >
                    {TAB_LABEL[kat]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          {filtered.map((treatment, index) => (
            <TreatmentCard
              key={`${activeKategori}-${treatment.kode}`}
              treatment={treatment}
              index={index}
              onOpen={setModalTreatment}
            />
          ))}
        </div>

      </div>

      {modalTreatment && (
        <PricingModal
          treatment={modalTreatment}
          onClose={() => setModalTreatment(null)}
        />
      )}
    </div>
  );
}
