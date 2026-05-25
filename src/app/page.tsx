import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/layout/Navbar";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import About from "@/components/sections/About";
import Reservasi from "@/components/sections/Reservasi";
import Lokasi from "@/components/sections/Lokasi";
import Favorit from "@/components/sections/Favorite";
import Testimoni from "@/components/sections/Testimoni";
import FAQ from "@/components/sections/FAQ";


export default function Home() {

  return (
    <>
    <Navbar />
    <Hero />
    <WhyChooseUs/>
    <Favorit/>
    <About/>
    <Lokasi/>
    <Testimoni/>
    <Reservasi/>
    <FAQ/>
    <Footer />
    </>
  );
}
