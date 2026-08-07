"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import iconCoklat from "@/public/images/logo-coklat.png";

type Props = {
  title?: string;
  texts?: string[];
};

export default function FernLoadingScreen({
  title = "Fern AI",
  texts = [
    "Menyiapkan sesi konsultasi bersama Fern...",
    "Meracik rekomendasi aroma terbaik...",
    "Menyusun suasana ruangan impianmu...",
  ],
}: Props) {

  const loadingTexts = texts;

  const [textIndex, setTextIndex] =
    useState(0);

  const [visible, setVisible] =
    useState(true);

  useEffect(() => {

    const interval = setInterval(() => {

      setVisible(false);

      setTimeout(() => {

        setTextIndex((prev) =>
          prev === loadingTexts.length - 1
            ? 0
            : prev + 1
        );

        setVisible(true);

      }, 300);

    }, 1500);

    return () =>
      clearInterval(interval);

  }, [loadingTexts.length]);

  return (
    <div
      className="
        fixed
        inset-0
        z-999
        flex
        items-center
        justify-center
        bg-fern-panel
        px-6
      "
    >

      {/* Decorative blobs */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >

        <div
          className="
            absolute
            -top-20
            -left-20
            h-72
            w-72
            rounded-full
            bg-fern-gold/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -right-20
            -bottom-20
            h-72
            w-72
            rounded-full
            bg-fern-main/10
            blur-3xl
          "
        />

      </div>

      {/* Card */}
      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-sm
          flex-col
          items-center
          rounded-3xl
          border
          border-fern-frost
          bg-white/70
          px-8
          py-10
          shadow-[0_8px_48px_0_rgba(36,22,50,0.12)]
          backdrop-blur-md
        "
      >

        {/* Ornament */}
        <div
          className="
            absolute
            top-0
            left-1/2
            h-0.75
            w-16
            -translate-x-1/2
            rounded-full
            bg-linear-to-r
            from-fern-gold
            to-fern-main
          "
        />

        {/* Logo */}
        <div
          className="
            relative
            mb-5
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-2xl
            border
            border-fern-frost
            bg-fern-panel
            shadow-inner
          "
        >

          <div
            className="
              absolute
              inset-0
              animate-pulse
              rounded-2xl
              bg-fern-gold/10
            "
          />

          <Image
            src={iconCoklat}
            alt="Fern"
            width={52}
            height={52}
            className="relative z-10 object-contain"
            priority
          />

        </div>

        {/* Title */}
        <h2
          className="
            font-playfair
            text-2xl
            font-bold
            tracking-wide
            text-fern-deep
          "
        >
          {title}
        </h2>

        {/* Divider */}
        <div
          className="
            my-4
            flex
            w-full
            items-center
            gap-2
          "
        >

          <div className="h-px flex-1 bg-fern-frost" />

          <span
            className="
              font-poppins
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-fern-mid
            "
          >
            Sedang Memuat
          </span>

          <div className="h-px flex-1 bg-fern-frost" />

        </div>

        {/* Loading text */}
        <p
          className="
            min-h-11
            text-center
            font-poppins
            text-sm
            leading-relaxed
            text-fern-mid
            transition-opacity
            duration-300
          "
          style={{
            opacity: visible ? 1 : 0,
          }}
        >
          {loadingTexts[textIndex]}
        </p>

        {/* Dots */}
        <div
          className="
            mt-6
            flex
            items-center
            gap-2
          "
        >

          <span
            className="
              h-2.5
              w-2.5
              animate-bounce
              rounded-full
              bg-fern-gold
            "
          />

          <span
            className="
              h-2.5
              w-2.5
              animate-bounce
              rounded-full
              bg-fern-gold
              [animation-delay:0.15s]
            "
          />

          <span
            className="
              h-2.5
              w-2.5
              animate-bounce
              rounded-full
              bg-fern-gold
              [animation-delay:0.3s]
            "
          />

        </div>

      </div>

    </div>
  );
}