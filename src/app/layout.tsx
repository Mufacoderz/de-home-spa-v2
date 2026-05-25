import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner"

import {
  Poppins,
  Playfair_Display, Geist } from "next/font/google";

import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "HOME SPA",
  description: "Tempat spa terbaik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn(
              "h-full",
              "antialiased",
              "scroll-smooth",
              poppins.variable,
              playfair.variable
            , "font-sans", geist.variable)}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}


// import type { Metadata } from "next";
// import "./globals.css";
// import { Inter, Geist } from 'next/font/google'
// import { cn } from "@/lib/utils";

// const geist = Geist({subsets:['latin'],variable:'--font-sans'});

// const inter = Inter({ 
//   subsets: ['latin'],
//   display: 'swap',
// })

// export const metadata: Metadata = {
//   title: "HOME SPA",
//   description: "Tempat spa terbaik",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="id"
//       className={cn("h-full", "antialiased", inter.className, "font-sans", geist.variable, "scroll-smooth")}
//     >
//       <body className="min-h-full flex flex-col">
//         {children}
//       </body>
//     </html>
//   );
// }
