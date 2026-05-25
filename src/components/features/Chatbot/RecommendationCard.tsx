"use client";

import { useState } from "react";

import { TREATMENTS } from "@/data/treatment";
import PricingModal from "@/components/shared/PricingModal";
import { motion } from "framer-motion"

import type { RecommendedTreatment } from "@/types/chat";

interface Props {
  treatment: RecommendedTreatment;
}

export default function RecommendationCard({
  treatment,
}: Props) {

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const selectedTreatment =
    TREATMENTS.find(
      (item) => item.kode === treatment.kode
    );

  if (!selectedTreatment) return null;

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className=" mt-3 w-full rounded-[28px] border border-[#E8D0A4] bg-[#FFF9EF] p-4 shadow-sm
  "
      >

        <p className="mb-3 font-poppins text-xs font-medium text-[#BD8622]">
          Direkomendasikan oleh Thera ✨
        </p>

        <div className="mb-4 flex items-center gap-2">

          <span className="rounded-full bg-[#8B6B52] px-3 py-1 text-xs font-semibold text-[#FDF5E6]">
            {selectedTreatment.level}
          </span>

          <span className="rounded-full bg-[#FDF5E6] px-3 py-1 text-xs font-medium text-[#8B6B52] border border-[#E8D0A4]">
            {selectedTreatment.area}
          </span>

        </div>

        <h3 className="font-poppins text-[20px] font-bold leading-snug text-main">
          {selectedTreatment.nama}
        </h3>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-5 w-full rounded-xl bg-ternary p-3 font-poppins text-sm font-semibold text-[#FDF5E6] shadow-[2px_3px_0px_0px_#E8D0A4] transition-all duration-100 hover:translate-x-px hover:translate-y-px hover:shadow-[1px_2px_0px_0px_#E8D0A4] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
        >
          Booking Sekarang
        </button>

      </motion.div>

      {isModalOpen && (
        <PricingModal
          treatment={selectedTreatment}
          onClose={() =>
            setIsModalOpen(false)
          }
        />
      )}
    </>
  );
}