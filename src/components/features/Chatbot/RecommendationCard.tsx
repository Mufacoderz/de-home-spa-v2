"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { TREATMENTS } from "@/data/treatment";
import PricingModal from "@/components/shared/PricingModal";

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
      (item) =>
        item.kode === treatment.kode
    );

  if (!selectedTreatment) return null;

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 16,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="
          ml-10
          mt-3
          w-fit
          max-w-full
          overflow-hidden
          rounded-[26px]
          border
          border-fern-frost2
          bg-linear-to-br
          from-fern-petal3
          to-fern-petal
          shadow-[0_8px_24px_rgba(36,22,50,0.12)]
          md:max-w-[68%]
        "
      >

        {/* top accent */}
        <div
          className="
            h-1
            w-full
            bg-linear-to-r
            from-fern-glow2
            via-fern-glow
            to-fern-mid2
          "
        />

        <div className="p-5">

          <div className=" flex items-start justify-between gap-3">

            {/* kiri */}
            <div
              className="
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-fern-mist
      bg-fern-petal
      px-3
      py-1.5
    "
            >

              <span className="text-sm">
                ✨
              </span>

              <p
                className="
        font-poppins
        text-[11px]
        font-semibold
        tracking-wide
        text-fern-glow2
      "
              >
                FERN RECOMMENDATION
              </p>

            </div>

            {/* kanan */}
            <div
              className="
      flex
      flex-wrap
      items-center
      justify-end
      gap-2
    "
            >

              <span
                className="
        rounded-full
        bg-fern-mid2
        px-3
        py-1
        font-poppins
        text-[11px]
        font-semibold
        text-fern-petal2
      "
              >
                {selectedTreatment.level}
              </span>

              <span
                className="
        rounded-full
        border
        border-fern-frost2
        bg-fern-petal3
        px-3
        py-1
        font-poppins
        text-[11px]
        font-medium
        text-fern-mid2
      "
              >
                {selectedTreatment.area}
              </span>

            </div>

          </div>

          {/* badge */}
          <div
            className="
              mb-4
              flex
              flex-wrap
              items-center
              gap-2
            "
          >



          </div>

          {/* title */}
          <h3
            className="
              max-w-[95%]
              font-poppins
              text-[20px]
              font-bold
              leading-snug
              text-main
            "
          >
            {selectedTreatment.nama}
          </h3>

          {/* desc mini */}
          <p
            className="
              mt-2
              max-w-[95%]
              font-poppins
              text-[13px]
              leading-relaxed
              text-fern-mid2
            "
          >
            Produk ini dipilih berdasarkan
            percakapan dan suasana yang kamu inginkan bersama Fern.
          </p>

          {/* button */}
          <button
            onClick={() =>
              setIsModalOpen(true)
            }
            className="
              group
              mt-5
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-ternary
              px-5
              py-3
              font-poppins
              text-sm
              font-semibold
              text-fern-petal2
              shadow-[2px_3px_0px_0px_var(--fern-frost2)]
              transition-all
              duration-150
              hover:translate-x-px
              hover:translate-y-px
              hover:shadow-[1px_2px_0px_0px_var(--fern-frost2)]
              active:translate-x-0.5
              active:translate-y-0.5
              active:shadow-none
            "
          >

            Lanjut Reservasi

            <ArrowRight
              size={17}
              className="
                transition-transform
                duration-200
                group-hover:translate-x-0.5
              "
            />

          </button>

        </div>

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