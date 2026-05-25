"use client";

import {
  motion,
  useMotionValue,
  animate,
} from "framer-motion";

import React from "react";

import {
  BadgeDollarSign,
  House,
  Sparkles,
  Calendar,
  UserRound,
} from "lucide-react";

const overallItems = [
  {
    id: 1,
    from: 0,
    to: 1200,
    suffix: "+",
    text: "Pelanggan Puas",
  },
  {
    id: 2,
    from: 0,
    to: 26,
    text: "Jenis Layanan",
  },
  {
    id: 3,
    from: 0,
    to: 4.8,
    text: "Rating Rata-rata",
  },
];

export const whyChooseUsItems = [
  {
    id: 1,
    icon: BadgeDollarSign,
    heading: "Harga Transparan",
    text: "Harga yang tertera adalah harga final tanpa ada biaya tambahan atau biaya tersembunyi lainnya.",
  },

  {
    id: 2,
    icon: House,
    heading: "Datang Ke Rumah",
    text: "Nikmati layanan pijat berkualitas tanpa perlu keluar rumah; terapis kami akan datang langsung ke lokasi Anda.",
  },

  {
    id: 3,
    icon: Sparkles,
    heading: "Saran Pijat Pintar",
    text: "Gunakan asisten pintar kami untuk menemukan jenis pijat yang paling tepat berdasarkan kebutuhan dan masalah tubuh Anda secara presisi.",
  },

  {
    id: 4,
    icon: Calendar,
    heading: "Booking Mudah",
    text: "Sistem reservasi yang simpel dan cepat memungkinkan Anda memesan jadwal hanya dalam hitungan detik.",
  },

  {
    id: 5,
    icon: UserRound,
    heading: "Profesional",
    text: "Terapis kami telah tersertifikasi dan berpengalaman dalam berbagai teknik pijat untuk hasil yang optimal.",
  },
];

const fadeUp = {
  initial: {
    opacity: 0,
    y: 40,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.6,
    ease: "easeOut" as const,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const staggerItem = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

function Counter({
  from,
  to,
  suffix = "",
}: {
  from: number;
  to: number;
  suffix?: string;
}) {
  const [display, setDisplay] = React.useState(from.toString());

  const count = useMotionValue(from);

  React.useEffect(() => {
    const controls = animate(count, to, {
      duration: 4,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplay(
          to % 1 !== 0
            ? latest.toFixed(1)
            : Math.floor(latest).toLocaleString("id-ID")
        );
      },
    });

    return controls.stop;
  }, [count, to]);

  return (
    <motion.span>
      {display}
      {suffix}
    </motion.span>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="w-full">
      <div className="overall bg-main h-auto py-10 px-6 sm:px-10 md:px-20 lg:px-40 xl:px-60">
        <div className="overall-content flex flex-col items-center justify-between gap-8 text-main font-poppins sm:flex-row sm:gap-4">
          {overallItems.map((item, index) => (
            <motion.div
              {...fadeUp}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              key={item.id}
              className="overallContent text-center"
            >
              <h2 className="text-4xl font-extrabold sm:text-5xl md:text-[55px]">
                <Counter
                  from={item.from}
                  to={item.to}
                  suffix={item.suffix}
                />
              </h2>

              <p className="text-base font-semibold sm:text-lg md:text-[20px]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="WhyChooseUs bg-second px-6 py-24 md:px-10 lg:px-20">
        <motion.div
          {...fadeUp}
          className="mb-16 text-center"
        >
          <h2 className="font-playfair text-[48px] font-medium tracking-tight text-main md:text-5xl">
            Kenapa Pilih Kami?
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 lg:grid-cols-5"
        >
          {whyChooseUsItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                variants={staggerItem}
                key={item.id}
                className="relative flex flex-col items-center px-4"
              >
                {index !== whyChooseUsItems.length - 1 && (
                  <div
                    key={`separator-${item.id}`}
                    className="absolute top-1/2 right-0 hidden h-28 w-px -translate-y-1/2 bg-[#B08968]/40 lg:block"
                  />
                )}

                <div className="mb-5 text-main">
                  <Icon size={52} strokeWidth={1.8} />
                </div>

                <h3 className="mb-3 text-2xl font-bold tracking-tight text-main">
                  {item.heading}
                </h3>

                <p className="max-w-60 text-base leading-relaxed text-[#7A5C45]/80">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}