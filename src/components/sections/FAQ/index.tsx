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
    <section className="bg-[#EEE7DB] py-16 px-4 font-poppins">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* IMAGE */}
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
            <Image
              src={faq}
              alt="FAQ Spa"
              fill
              className="object-cover"
              quality={100}
            />
          </div>

          {/* FAQ CONTENT */}
          <div>

            <p className="text-[#7D6A58] text-lg">
              FAQ
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#6D5744] leading-tight mt-2">
              Pertanyaan yang Sering Diajukan
            </h2>

            <Accordion
              type="single"
              collapsible
              className="mt-8 space-y-4"
            >

              <AccordionItem
                value="item-1"
                className="border border-[#A48367] rounded-2xl px-5 bg-transparent"
              >
                <AccordionTrigger className="text-left text-[#6D5744] hover:no-underline text-lg font-medium">
                  Bagaimana cara AI memilihkan menu spa yang cocok untuk saya?
                </AccordionTrigger>

                <AccordionContent className="text-[#7D6A58] leading-relaxed pt-2">
                  AI kami akan menganalisis keluhan tubuh, tingkat pegal,
                  area yang sakit, dan preferensi Anda untuk memberikan
                  rekomendasi treatment yang paling sesuai.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border border-[#A48367] rounded-2xl px-5"
              >
                <AccordionTrigger className="text-left text-[#6D5744] hover:no-underline text-lg font-medium">
                  Metode pembayaran apa saja yang bisa digunakan?
                </AccordionTrigger>

                <AccordionContent className="text-[#7D6A58] leading-relaxed pt-2">
                  Kami menerima pembayaran transfer bank, QRIS,
                  e-wallet, dan pembayaran tunai setelah treatment selesai.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border border-[#A48367] rounded-2xl px-5"
              >
                <AccordionTrigger className="text-left text-[#6D5744] hover:no-underline text-lg font-medium">
                  Apakah harga sudah termasuk biaya transportasi terapis?
                </AccordionTrigger>

                <AccordionContent className="text-[#7D6A58] leading-relaxed pt-2">
                  Ya, untuk area Samarinda tertentu biaya transportasi
                  sudah termasuk dalam harga treatment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border border-[#A48367] rounded-2xl px-5"
              >
                <AccordionTrigger className="text-left text-[#6D5744] hover:no-underline text-lg font-medium">
                  Wilayah mana saja yang bisa memesan de HOME SPA?
                </AccordionTrigger>

                <AccordionContent className="text-[#7D6A58] leading-relaxed pt-2">
                  Saat ini layanan tersedia untuk area Samarinda
                  dan beberapa wilayah sekitarnya.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border border-[#A48367] rounded-2xl px-5"
              >
                <AccordionTrigger className="text-left text-[#6D5744] hover:no-underline text-lg font-medium">
                  Apakah saya perlu menyiapkan peralatan pijat di rumah?
                </AccordionTrigger>

                <AccordionContent className="text-[#7D6A58] leading-relaxed pt-2">
                  Tidak perlu. Terapis kami akan membawa perlengkapan
                  lengkap seperti ranjang pijat, minyak aromaterapi,
                  handuk, dan perlengkapan lainnya.
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}