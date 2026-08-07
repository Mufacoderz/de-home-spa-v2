"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { X } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navItems } from "./navItems";

type Props = {
  isScrolled: boolean;
};

export default function SidebarMobile({ isScrolled }: Props) {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
              isScrolled
                ? "border-fern-frost2 bg-fern-petal3 text-fern-deep"
                : "border-white/25 bg-white/10 text-white backdrop-blur-md"
            }`}
            aria-label="Buka menu"
          >
            <IoMenu className="h-6 w-6" />
          </button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[82%] border-l border-fern-frost2 bg-fern-petal3 p-0 text-fern-deep"
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-fern-frost2 px-5 py-5">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo-coklat.png"
                  alt="Fern Aromatics"
                  width={42}
                  height={42}
                  className="object-contain"
                />

                <div>
                  <h2 className="font-playfair text-xl font-bold text-fern-deep">
                    Fern Aromatics
                  </h2>
                  <p className="font-poppins text-xs text-fern-mid">
                    Aromatik rumah alami
                  </p>
                </div>
              </div>

              <SheetClose asChild>
                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-fern-frost2 text-fern-deep">
                  <X size={18} />
                </button>
              </SheetClose>
            </div>

            <div className="flex flex-col gap-2 px-5 py-6">
              {navItems.map((item) => (
                <SheetClose asChild key={item.label}>
                  <Link
                    href={item.href}
                    className="rounded-2xl px-4 py-4 font-poppins text-lg font-semibold text-fern-deep transition hover:bg-fern-frost2/30"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </div>

            <div className="mt-auto border-t border-fern-frost2 px-5 py-5">
              <p className="font-poppins text-xs leading-relaxed text-fern-mid">
                Aroma alami untuk menemani setiap momen di rumahmu.
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}