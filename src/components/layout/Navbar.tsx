"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import SidebarMobile from "./SidebarMobile";
import { navItems } from "./navItems";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 md:px-6">
      <nav
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border px-4 transition-all duration-300 md:px-6 ${
          isScrolled
            ? "border-fern-frost2 bg-fern-petal3/90 shadow-[0_8px_24px_rgba(36,22,50,0.12)] backdrop-blur-md"
            : "border-white/15 bg-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.10)] backdrop-blur-md"
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={isScrolled ? "/images/logo-coklat.png" : "/images/logo.png"}
            alt="Fern Aromatics"
            width={48}
            height={48}
            className="object-contain transition-transform duration-300 hover:scale-105"
            priority
          />

          <div className="leading-none">
            <h1
              className={`font-playfair text-xl font-bold transition-colors duration-300 md:text-2xl ${
                isScrolled ? "text-fern-deep" : "text-white"
              }`}
            >
              Fern Aromatics
            </h1>
            <p
              className={`mt-1 hidden font-poppins text-[11px] transition-colors duration-300 sm:block ${
                isScrolled ? "text-fern-mid" : "text-white/75"
              }`}
            >
              Aroma for your space
            </p>
          </div>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`relative font-poppins text-sm font-medium transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:transition-all after:duration-300 hover:-translate-y-0.5 hover:after:w-full ${
                  isScrolled
                    ? "text-fern-deep after:bg-fern-deep hover:text-fern-mid"
                    : "text-white after:bg-white hover:text-white/80"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <SidebarMobile isScrolled={isScrolled} />
      </nav>
    </header>
  );
}