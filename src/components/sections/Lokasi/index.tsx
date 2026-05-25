"use client";

import Image from "next/image";

import daunkiri from "@/public/images/daun-kiri.webp";
import map from "@/public/images/map.webp";

import TitikLokasiMerah from "@/public/images/titik-lokasi-merah.webp";
import TitikLokasiKuning from "@/public/images/titik-lokasi-kuning.webp";
import TitikLokasiHijau from "@/public/images/titik-lokasi-hijau.webp";
import TitikLokasiBiru from "@/public/images/titik-lokasi-biru.webp";
import TitikLokasiUngu from "@/public/images/titik-lokasi-ungu.webp";

import { FaMapMarkerAlt } from "react-icons/fa";

export default function Lokasi() {
  return (
    <section className="relative bg-main py-14 md:py-20 overflow-hidden font-poppins">

      {/* DAUN */}
      <div className="absolute left-0 top-0 opacity-15 hidden md:block">
        <Image
          src={daunkiri}
          alt="daun"
          width={140}
          height={300}
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.6fr_0.8fr] gap-6">

          {/* CARD BESAR */}
          <div className="bg-[#F2EBDD] border border-[#C9B59B] rounded-[28px] overflow-hidden shadow-sm">

            <div className="grid md:grid-cols-2">

              {/* KIRI */}
              <div className="p-6 md:p-8">

                {/* TITLE */}
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-[#8B6A4D] text-3xl md:text-4xl shrink-0" />

                  <h2 className="text-[28px] md:text-[42px] font-bold text-[#8B6A4D] leading-none">
                    Wilayah Jangkauan
                  </h2>
                </div>

                {/* LIST */}
                <div className="mt-8 space-y-7 relative">

                  {/* LINE */}
                  <div className="absolute left-1.25 top-3 bottom-3 w-0.5 bg-[#B89A79]" />

                  {[
                    {
                      title: "Samarinda Kota",
                      desc: "Pusat kota & sekitarnya",
                    },
                    {
                      title: "Samarinda Ulu",
                      desc: "Daerah Samarinda Ulu & sekitarnya",
                    },
                    {
                      title: "Sungai Kunjang & Sambutan",
                      desc: "Daerah Sungai Kunjang & sekitarnya",
                    },
                    {
                      title: "Samarinda Ilir & Seberang",
                      desc: "Daerah Samarinda Ilir & sekitarnya",
                    },
                    {
                      title: "Palaran",
                      desc: "Daerah Palaran & sekitarnya",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 relative z-10"
                    >
                      {/* BULAT */}
                      <div className="w-3 h-3 rounded-full bg-[#8B6A4D] mt-3 shrink-0" />

                      {/* TEXT */}
                      <div>
                        <h3 className="text-[18px] md:text-[20px] font-semibold text-[#8B6A4D] leading-none">
                          {item.title}
                        </h3>

                        <p className="text-[#D0A96C] text-[14px] md:text-[16px] mt-2 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* BOX */}
                <div className="mt-8 bg-[#E8D2A7] rounded-2xl px-5 py-4 max-w-90">

                  <h4 className="text-[#8B6A4D] font-semibold text-[15px] md:text-[16px]">
                    Belum menemukan wilayahmu?
                  </h4>

                  <p className="text-[#8B6A4D] text-xs md:text-sm mt-1 leading-relaxed">
                    Tim kami terus melakukan ekspansi untuk menjangkau
                    lebih banyak area segera.
                  </p>
                </div>
              </div>

              {/* MAP */}
              <div className="relative bg-[#EAE1D1] min-h-105 md:min-h-130">

                <Image
                  src={map}
                  alt="map"
                  fill
                  className="object-contain p-4 md:p-6"
                />

                {/* MERAH */}
                <div className="absolute top-[32%] left-[41%]">
                  <Image
                    src={TitikLokasiMerah}
                    alt=""
                    width={42}
                    height={42}
                    className="w-3 md:w-5 h-auto"
                  />
                </div>

                {/* UNGU */}
                <div className="absolute top-[37%] left-[49%]">
                  <Image
                    src={TitikLokasiUngu}
                    alt=""
                    width={42}
                    height={42}
                    className="w-3 md:w-5 h-auto"
                  />
                </div>

                {/* BIRU */}
                <div className="absolute top-[52%] left-[28%]">
                  <Image
                    src={TitikLokasiBiru}
                    alt=""
                    width={42}
                    height={42}
                    className="w-3 md:w-5 h-auto"
                  />
                </div>

                {/* KUNING */}
                <div className="absolute top-[50%] left-[61%]">
                  <Image
                    src={TitikLokasiKuning}
                    alt=""
                    width={42}
                    height={42}
                    className="w-3 md:w-5 h-auto"
                  />
                </div>

                {/* HIJAU */}
                <div className="absolute bottom-[32%] left-[48%]">
                  <Image
                    src={TitikLokasiHijau}
                    alt=""
                    width={42}
                    height={42}
                    className="w-3 md:w-5 h-auto"
                  />

                </div>
              </div>
            </div>
          </div>

          {/* CARD KANAN */}
          <div className="hidden xl:flex bg-[#F2EBDD] border border-[#C9B59B] rounded-[28px] shadow-sm p-10 items-center">

            <div>
              <h2 className="text-[52px] font-bold leading-[1.08] text-[#7A562B]">
                Menghadirkan
                Kenyamanan
                di Seluruh
                Sudut Kota.
              </h2>

              <p className="mt-10 text-[#8B6A4D] text-[18px] leading-relaxed">
                de HOME SPA saat ini fokus melayani seluruh wilayah
                Kota Samarinda dengan terapis profesional langsung
                ke rumah.
              </p>
            </div>

          </div>
        </div>

        {/* FLAT RATE */}
        <div className="mt-6">
          <div className="bg-[#E8D2A7] border border-[#D6BE93] rounded-[22px] shadow-sm px-4 md:px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">

            {/* ICON */}
            <div className="w-16 h-16 rounded-2xl bg-[#8B6A4D] flex items-center justify-center shrink-0">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-8 h-8"
              >
                <path d="M21.41 11.58L12.41 2.58C12.05 2.22 11.55 2 11.04 2H4C2.9 2 2 2.9 2 4V11.04C2 11.55 2.2 12.04 2.57 12.4L11.57 21.4C12.35 22.18 13.62 22.18 14.4 21.4L21.4 14.4C22.2 13.63 22.2 12.36 21.41 11.58ZM5.5 7C4.67 7 4 6.33 4 5.5C4 4.67 4.67 4 5.5 4C6.33 4 7 4.67 7 5.5C7 6.33 6.33 7 5.5 7Z" />
              </svg>
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-[#8B6A4D] text-[18px] md:text-[28px] font-bold leading-tight">
                Kami menerapkan kebijakan Flat Rate
              </h3>

              <p className="mt-2 text-[#8B6A4D] text-sm md:text-[16px] leading-relaxed max-w-5xl">
                Harga yang Anda lihat adalah harga yang Anda bayar.
                Sudah termasuk biaya transportasi terapis ke lokasi Anda
                (Rumah, Hotel, atau Apartemen).
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}