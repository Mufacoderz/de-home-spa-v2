
"use client";


import Link from "next/link"
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <main
            className=" relative flex h-screen items-center overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/images/bg-image.jpg')",
            }}
        >
            {/* <div className="absolute inset-0 bg-black/40" />

  <div
    className="
      absolute
      inset-0
      bg-linear-to-r
      from-black/50
      via-black/20
      to-transparent
    "
  /> */}

            <div
                className=" relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 md:px-8 lg:px-12"
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    className="max-w-full md:max-w-190"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.7,
                        }}
                        className=" font-poppins text-5xl font-extrabold leading-[0.95] tracking-tight text-primary-foreground sm:text-6xl md:text-7xl lg:text-[72px]"
                    >
                        Aroma yang <br />
                        Mengerti Ruangmu
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.7,
                        }}
                        className=" font-poppins mt-6 max-w-full text-base leading-relaxed text-primary-foreground/90 sm:text-lg md:max-w-155 md:text-xl"
                    >
                        Setiap ruang punya karakter berbeda. Ceritakan mood
                        yang ingin kamu bangun, dan Fern akan meracik rekomendasi
                        aroma yang paling pas — dari candle hingga diffuser,
                        semua bisa kamu pesan langsung dari sini.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.7,
                        }}
                        className=" mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 md:mt-12"
                    >
                        <Link
                            href="#reservasi-ai"
                            className=" font-poppins rounded-full bg-fern-ternary px-7 py-3.5 text-center text-base font-semibold text-primary-foreground transition-all duration-300 hover:scale-105  md:px-9 md:py-4 md:text-xl "
                        >
                            Rekomendasi Fern
                        </Link>
                        

                        <Link
                            href="#koleksi"
                            className=" font-poppins rounded-full border-2 border-primary-foreground/80 bg-primary-foreground/5 px-7 py-3.5 text-center text-base font-semibold text-primary-foreground backdrop-blur-md transition-all duration-300 hover:bg-primary-foreground hover:text-fern-ternary md:px-9 md:py-4 md:text-xl"
                        >
                            Lihat Koleksi
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

        </main>
    );
}











// "use client"
// import Image from "next/image";
// import hero from "@/public/images/hero-spa-lobby.webp"
// import { motion } from 'framer-motion';

// export default function Hero() {
//     return (
//         <>
//             <main id="beranda"
//             className="w-full min-h-screen relative">
//                 <Image className="absolute inset-0 w-full h-full object-cover"
//                     src={hero}
//                     priority
//                     alt="hero home spa"
//                 />
//                 <div className="absolute inset-0 bg-black/40"></div>
//                 <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
//                     <motion.h1
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className={`text-4xl md:text-8xl text-white text-center mb-8 font-bold`}>
//                         Jemari Home Spa
//                     </motion.h1>
//                     <motion.p
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.25 }}
//                         className="text-sm md:text-xl text-white text-center max-w-3xl leading-relaxed tracking-wide font-medium">
//                         Melayani Jasa Kerokan Terpercaya.
//                         <br />
//                         Rating 4/9/5 ⭐⭐⭐⭐⭐
//                         <br />
//                         Melayani Jasa Kerokan Panggilan
//                     </motion.p>
//                 </div>
//             </main>
//         </>
//     )
// }