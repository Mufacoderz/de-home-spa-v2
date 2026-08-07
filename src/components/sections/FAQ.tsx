"use client";

import Image from "next/image";
import faq from "@/public/images/faq.webp";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="bg-fern-second py-16 px-4 font-poppins">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* IMAGE */}
          <div className="relative w-full h-125 rounded-3xl overflow-hidden">
            <Image
              src={faq}
              alt="FAQ Aromatics"
              fill
              className="object-cover"
              quality={100}
            />
          </div>

          {/* FAQ CONTENT */}
          <div>

            <p className="text-fern-deep text-lg">
              FAQ
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-fern-main leading-tight mt-2">
              Pertanyaan yang Sering Diajukan
            </h2>

            <Accordion
              type="single"
              collapsible
              className="mt-8 space-y-4"
            >

              <AccordionItem
                value="item-1"
                className="border border-fern-mid rounded-2xl px-5 bg-transparent"
              >
                <AccordionTrigger className="text-left text-fern-main hover:no-underline text-lg font-medium">
                  Bagaimana cara Fern memilihkan produk yang cocok untuk saya?
                </AccordionTrigger>

                <AccordionContent className="text-fern-deep leading-relaxed pt-2">
                  Fern akan menganalisis mood, suasana yang kamu inginkan,
                  kategori produk, dan preferensi intensitas aroma untuk
                  memberikan rekomendasi produk yang paling sesuai.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border border-fern-mid rounded-2xl px-5"
              >
                <AccordionTrigger className="text-left text-fern-main hover:no-underline text-lg font-medium">
                  Metode pembayaran apa saja yang bisa digunakan?
                </AccordionTrigger>

                <AccordionContent className="text-fern-deep leading-relaxed pt-2">
                  Kami menerima pembayaran transfer bank, QRIS, dan
                  e-wallet untuk setiap pesanan produk.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border border-fern-mid rounded-2xl px-5"
              >
                <AccordionTrigger className="text-left text-fern-main hover:no-underline text-lg font-medium">
                  Berapa lama pesanan saya dikirim?
                </AccordionTrigger>

                <AccordionContent className="text-fern-deep leading-relaxed pt-2">
                  Pesanan umumnya diproses dan dikirim dalam
                  1-2 hari kerja setelah pembayaran terkonfirmasi.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border border-fern-mid rounded-2xl px-5"
              >
                <AccordionTrigger className="text-left text-fern-main hover:no-underline text-lg font-medium">
                  Ke mana saja Fern Aromatics bisa mengirim?
                </AccordionTrigger>

                <AccordionContent className="text-fern-deep leading-relaxed pt-2">
                  Saat ini pengiriman tersedia untuk seluruh wilayah
                  Indonesia tanpa batasan daerah.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border border-fern-mid rounded-2xl px-5"
              >
                <AccordionTrigger className="text-left text-fern-main hover:no-underline text-lg font-medium">
                  Bagaimana cara merawat dan memakai produknya?
                </AccordionTrigger>

                <AccordionContent className="text-fern-deep leading-relaxed pt-2">
                  Candle: biarkan burn hingga lapisan atas meleleh rata.
                  Diffuser & spray: tempatkan di area yang sering dilalui.
                  Roll-on: oleskan ringan pada titik nadi sesuai kebutuhan.
                  Simpan jauh dari sinar matahari langsung.
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}