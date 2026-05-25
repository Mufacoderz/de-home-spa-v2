import Image from "next/image";
import type { StaticImageData } from "next/image";
import logoCoklat from "@/public/images/logo-coklat.png";
import { TREATMENTS } from "@/data/treatment";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import refleksiKaki from "@/public/images/favorite-treatment/refleksi-kaki.png";
import migrain from "@/public/images/favorite-treatment/terpi-reda-migrain.png";
import punggung from "@/public/images/favorite-treatment/refleksi-punggung.png";

const FAVORITE_IMAGES: Record<string, StaticImageData> = {
  D1: refleksiKaki,
  J1: punggung,
  C1: migrain,
};

const FAVORIT_KODE = ["D1", "J1", "C1"];


export default function Favorit() {
  const favoriteTreatments = TREATMENTS.filter((t) =>
    FAVORIT_KODE.includes(t.kode)
  );
  return (
    <section className="bg-main p-10 ">
      <div className="favorite-header">
        <h3 className="font-poppins text-[20px] text-second text-center">Explorasi Layanan Kami</h3>
        <h2 className="font-playfair  text-[48px] text-main text-center">Treatment Favorite Pelanggan Kami</h2>
        <div className="divider-area flex items-center justify-center gap-4">
          <div className="divider w-40 h-1 bg-ternary rounded-full" />
          <div className="logo">
            <Image src={logoCoklat} width={80} height={80} alt="logo" />
          </div>
          <div className="divider w-40 h-1 bg-ternary rounded-full" />
        </div>
      </div>

      <div className="favorite-content mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
        {favoriteTreatments.map((treatment) => {
          const hargaMulai = Math.min(...Object.values(treatment.harga));

          return (
            <div
              key={treatment.kode}
              className="overflow-hidden rounded-2xl bg-[#F8F0E3] shadow-xl"
            >
              <div className="relative h-65 w-full">
                <Image
                  src={FAVORITE_IMAGES[treatment.kode]}
                  alt={treatment.nama}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="font-poppins text-2xl font-bold">
                    {treatment.nama}
                  </h3>
                  <p className="mt-2 font-poppins text-sm leading-relaxed">
                    {treatment.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between px-6 py-4">
                <div className="rounded-lg bg-[#F0DCB4] px-10 py-2 font-poppins text-xl font-bold text-second">
                  {treatment.level}
                </div>

                <div className="text-right font-poppins text-second">
                  <p className="text-sm font-bold">Mulai dari</p>
                  <p className="text-xl font-extrabold">
                    Rp. {hargaMulai.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-10">
        <Link
          href="#daftar-layanan"
          className="inline-flex items-center gap-3 rounded-full bg-ternary px-6 py-3 font-poppins text-md font-bold text-ternary transition hover:scale-105"
        >
          Lihat semua layanan

          <div className="flex h-8 w-8 items-center justify-center rounded-full border-3 border-[#fdf5e6]">
            <ArrowDown size={24} />
          </div>
        </Link>
      </div>


    </section>
  )
}
