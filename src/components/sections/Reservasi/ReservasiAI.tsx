import ButtonReservasi from "@/components/shared/ButtonReservasi";
import FernButton from "@/components/sections/Reservasi/FernButton";
import reservasiImage from "@/public/images/reservasiImg.png";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function ReservasiAI() {
  return (
    <section id="reservasi-ai" className="w-full py-10">
      <div className="reservasi-ai flex flex-col items-center justify-between gap-10 rounded-[15px] border border-fern-frost4 bg-fern-panel px-8 py-10 shadow-md md:px-12 md:py-14 lg:flex-row">
        <div className="kiri w-full lg:w-[55%]">
          <div className="mb-8 inline-flex items-center gap-3 rounded-[15px] border-2 border-fern-gold bg-fern-frost px-5 py-3">
            <Sparkles className="h-7 w-7 fill-fern-gold text-fern-gold" />
            <span className="font-poppins text-[18px] font-semibold text-fern-deep md:text-[20px]">
              Rekomendasi Fern
            </span>
          </div>

          <h2 className="mb-4 font-poppins text-[24px] font-bold uppercase leading-tight text-fern-deep md:text-[40px]">
            Bingung Pilih Produk?
          </h2>

          <p className="mb-8 max-w-175 font-poppins text-[20px] leading-relaxed text-fern-deep md:text-[28px]">
            Pilih cara yang paling nyaman: jawab cepat lewat panduan singkat,
            atau ngobrol langsung dengan Fern AI.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <FernButton />

            <ButtonReservasi>
              Rekomendasi Cepat
            </ButtonReservasi>


          </div>
        </div>

        <div className="kanan flex w-full justify-center lg:w-[45%]">
          <Image
            src={reservasiImage}
            width={430}
            height={400}
            alt="gambar reservasi ai"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}