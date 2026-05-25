import Image from "next/image";
import logo from "@/public/images/logo.png";
import footerImage from "@/public/images/footer.webp";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="kontak"
      className="relative text-white font-poppins"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={footerImage}
          alt="Footer Background"
          fill
          className="object-cover"
          quality={100}
        />

        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRANDING */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="logo"
                width={70}
                height={70}
                className="object-contain"
              />

              <h1 className="text-3xl font-bold">
                De Home Spa
              </h1>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-gray-200 max-w-sm">
              Layanan pijat & perawatan tubuh profesional langsung
              ke rumahmu. Relaksasi mendalam dengan suasana spa
              premium tanpa perlu keluar rumah.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
              >
                <FaWhatsapp />
              </a>
            </div>

            {/* RATING */}
            <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-2xl p-4 w-fit">
              <p className="text-4xl font-bold">4.8</p>

              <p className="text-sm text-gray-200">
                dari 1.200+ ulasan pelanggan
              </p>
            </div>
          </div>

          {/* MENU 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-5">
              Layanan
            </h2>

            <ul className="space-y-3 text-gray-200">
              <li>Full Body Massage</li>
              <li>Massage & Refleksi</li>
              <li>Massage Totok Wajah</li>
              <li>Massage Scrub</li>
              <li>Massage Kerokan</li>
            </ul>
          </div>

          {/* MENU 2 */}
          <div>
            <h2 className="text-xl font-semibold mb-5">
              Informasi
            </h2>

            <ul className="space-y-3 text-gray-200">
              <li>Tentang Kami</li>
              <li>Cara Pemesanan</li>
              <li>Area Layanan</li>
              <li>Promo & Paket</li>
              <li>Galeri</li>
              <li>Blog Kesehatan</li>
            </ul>
          </div>

          {/* KONTAK */}
          <div>
            <h2 className="text-xl font-semibold mb-5">
              Kontak
            </h2>

            <div className="space-y-5 text-gray-200">

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-sm text-gray-300">
                    Telepon / WA
                  </p>

                  <p>0857-5342-1213</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-sm text-gray-300">
                    Email
                  </p>

                  <p>dehomespa@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-sm text-gray-300">
                    Area Layanan
                  </p>

                  <p>Samarinda & Sekitarnya</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <FaClock />
                </div>

                <div>
                  <p className="text-sm text-gray-300">
                    Jam Operasional
                  </p>

                  <p>08.00 - 22.00</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/20 mt-14 pt-6 text-center text-sm text-gray-300">
          © 2026 De Home Spa - Samarinda, Kalimantan Timur
        </div>
      </div>
    </footer>
  );
}