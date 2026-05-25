"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { useState, useEffect } from "react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  {
    label: "Testimonial",
    href: "#testimonial",
  },
  {
    label: "Lokasi",
    href: "#lokasi",
  },
  {
    label: "Layanan",
    href: "#layanan",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav
        className={`mx-4 mt-5 flex h-18 items-center justify-between rounded-full border px-6 transition-all duration-500 ease-out lg:mx-6
          
          ${
            isScrolled
              ? `
                border-[#E8D8BE]/70
                bg-[#FFF8EE]/75
                backdrop-blur-md
                shadow-[0_12px_40px_rgba(121,72,24,0.18)]
              `
              : `
                border-white/20
                bg-background/10
                backdrop-blur-2xl
                shadow-[0_8px_32px_rgba(0,0,0,0.15)]
              `
          }
        `}
      >
        <Link
          href="/"
          className="group flex items-center gap-4"
        >
          <Image
            src={`${
              isScrolled
                ? "/images/logo-coklat.png"
                : "/images/logo.png"
            }`}
            alt="De Home Spa"
            width={60}
            height={60}
            className="transition-all duration-500 group-hover:scale-105"
          />

          <h1
            className={`font-poppins text-2xl font-extrabold tracking-tight transition-all duration-500
              
              ${
                isScrolled
                  ? `
                    text-main
                    drop-shadow-[0_4px_4px_rgba(0,0,0,0.18)]
                  `
                  : `
                    text-white
                  `
              }
            `}
          >
            De Home Spa
          </h1>
        </Link>

        <ul className="hidden items-center gap-12 pr-10 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`relative font-poppins text-base font-medium tracking-tight transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:rounded-full after:transition-all after:duration-300 hover:after:w-full

                  ${
                    isScrolled
                      ? `
                        text-main
                        after:bg-main
                        drop-shadow-[0_4px_4px_rgba(0,0,0,0.18)]
                      `
                      : `
                        text-white
                        after:bg-white
                      `
                  }
                `}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:scale-105 hover:opacity-80

                  ${
                    isScrolled
                      ? `
                        bg-main/5
                        text-main
                      `
                      : `
                        text-white
                      `
                  }
                `}
              >
                <IoMenu className="h-7 w-7" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="
                border-border/20
                bg-background/10
                text-white
                backdrop-blur-2xl
              "
            >
              <div className="mt-14 ml-10 flex flex-col gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="
                      font-poppins
                      text-2xl
                      font-semibold
                      tracking-tight
                      text-white
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:opacity-70
                    "
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}