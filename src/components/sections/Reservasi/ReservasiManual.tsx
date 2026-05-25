"use client";

import { useState } from "react";
import { TREATMENTS } from "@/data/treatment";
import type { Treatment } from "@/types/treatment";
import TreatmentCard from "./TreatmentCard";
import PricingModal from "../../shared/PricingModal";
import { motion } from "framer-motion"



type Area = "Treatment Favorit" | "Kepala" | "Lengan" | "Upper Body" | "Kaki" | "Seluruh Badan";

const AREAS: Area[] = ["Treatment Favorit", "Kepala", "Lengan", "Upper Body", "Kaki", "Seluruh Badan"];

const FAVORIT_KODE = ["J1", "C1", "D1", "F1", "G1", "R1"];

const AREA_MAP: Record<string, string> = {
  Kepala: "Kepala",
  Lengan: "Tangan",
  "Upper Body": "Upper",
  Kaki: "Kaki",
  "Seluruh Badan": "Full Badan",
};

const TAB_LABEL: Record<Area, string> = {
  "Treatment Favorit": "Treatment Favorit",
  Kepala: "Kepala",
  Lengan: "Lengan",
  "Upper Body": "Upper Body",
  Kaki: "Kaki",
  "Seluruh Badan": "Seluruh Badan",
};

export default function ReservasiManual() {
  const [activeArea, setActiveArea] = useState<Area>("Treatment Favorit")
  const [modalTreatment, setModalTreatment] = useState<Treatment | null>(null)

  const filtered =
    activeArea === "Treatment Favorit"
      ? TREATMENTS.filter((t) => FAVORIT_KODE.includes(t.kode))
      : TREATMENTS.filter((t) => t.area === AREA_MAP[activeArea]);

  return (
    <div id="daftar-layanan" className="reservasi-manual mt-10 w-full">

      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-2.5 rounded-full bg-[#BD8622]" />
        <h3 className="font-poppins text-[22px] sm:text-[28px] font-extrabold text-main whitespace-nowrap">
          Eksplorasi Layanan Kami
        </h3>
        <div className="flex-1 h-2.5 rounded-full bg-[#BD8622]" />
      </div>

      <div className="bg-transparent rounded-[15px] px-3 sm:px-6 pt-4 sm:pt-6 pb-6 sm:pb-8">

        <div className="mb-6">
          {/* responsif  */}
          <div className="grid grid-cols-2 sm:hidden gap-2 bg-[#FDF5E6] p-2 rounded-[15px] border border-[#8B6B52]/25">
            {AREAS.map((area) => {
              const isActive = activeArea === area;

              return (
                <button
                  key={area}
                  onClick={() => setActiveArea(area)}
                  className={` rounded-[12px] px-3 py-3 font-poppins text-[12px] font-bold text-center leading-snug transition-all duration-200
                  ${isActive
                      ? "bg-ternary text-white shadow-sm"
                      : "bg-transparent text-second hover:bg-[#8B6B52]/10"
                    }
                  `}
                >
                  {TAB_LABEL[area]}
                </button>
              );
            })}
          </div>

          {/* deskto */}
          <div className="hidden sm:flex overflow-hidden rounded-t-[15px] bg-[#FDF5E6] border border-[#8B6B52]/30 border-b-2 border-b-[#603e00]  relative">
            {AREAS.map((area) => {
              const isActive = activeArea === area;

              return (
                <button
                  key={area}
                  onClick={() => setActiveArea(area)}
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
                    className={`relative z-10 ${isActive ? "text-ternary" : "text-[#8B6B52]"
                      }`}
                  >
                    {TAB_LABEL[area]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          {filtered.map((treatment, index) => (
            <TreatmentCard
              key={`${activeArea}-${treatment.kode}`}
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