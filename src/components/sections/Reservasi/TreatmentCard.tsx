"use client";

import type { Treatment } from "@/types/treatment";
import { motion } from "framer-motion"

export default function TreatmentCard({
  treatment,
  onOpen,
  index = 0,
}: {
  treatment: Treatment;
  onOpen: (t: Treatment) => void;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      className="flex items-center justify-between gap-3 sm:gap-6 bg-[#FDF5E6] border border-[#8B6B52]/50 rounded-[15px] px-4 sm:px-6 py-4 sm:py-5 shadow-sm"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap mb-1.5 sm:mb-2">
          <span className="font-poppins font-bold text-stone-900 text-[15px] sm:text-[17px]">
            {treatment.nama}
          </span>

          <span className="rounded-full px-2.5 sm:px-3 py-0.5 font-poppins text-[10px] sm:text-[11px] font-semibold bg-[#F5E6C8] text-[#B9892A]">
            {treatment.level}
          </span>
        </div>

        <p className="font-poppins text-[13px] sm:text-[14px] text-stone-500 leading-relaxed line-clamp-2 sm:line-clamp-none">
          {treatment.desc}
        </p>
      </div>

      <button
        onClick={() => onOpen(treatment)}
        className="shrink-0 rounded-full bg-ternary px-3 sm:px-5 py-2 sm:py-2.5 font-poppins text-[11px] sm:text-[13px] font-semibold text-white whitespace-nowrap transition hover:bg-[#a57320] active:scale-[0.97]"
      >
        Harga &amp; Durasi
      </button>
    </motion.div>
  );
}