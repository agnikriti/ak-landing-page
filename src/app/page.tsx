'use client'

import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa6";

import { Navbar } from "@/components/Layouts/FloatingNavbar/FloatingNavbar";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Services } from "@/components/Services/Services";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Layouts/Footer/Footer";

type Ember = {
  color: string;
  width: string;
  height: string;
  left: string;
  bottom: string;
  delay: string;
  duration: string;
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [embers, setEmbers] = useState<Ember[]>([]);
  const [lightEmbers, setLightEmbers] = useState<Ember[]>([]);

  useEffect(() => {
    const makeEmbers = (colors: string[]) =>
      [...Array(40)].map((_, i) => ({
        color: colors[i % colors.length],
        width: `${Math.random() * 5 + 2}px`,
        height: `${Math.random() * 5 + 2}px`,
        left: `${Math.random() * 100}%`,
        bottom: `-${Math.random() * 20}%`,
        delay: `${Math.random() * 12}s`,
        duration: `${Math.random() * 5 + 5}s`,
      }));

    setTimeout(() => {
      setEmbers(makeEmbers(["#f97316", "#fbbf24", "#f59e0b"]));
      setLightEmbers(makeEmbers(["#0a192f", "#112240", "#1e293b"]));
      setMounted(true);
    }, 0);

    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Hero embers={embers} lightEmbers={lightEmbers} mounted={mounted} />
      <About />
      <Services />
      <Contact />
      <Footer embers={embers} lightEmbers={lightEmbers} mounted={mounted} />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`
          fixed bottom-8 right-8 z-50
          w-14 h-14 rounded-full
          bg-orange-600 text-white
          flex items-center justify-center
          shadow-[0_10px_30px_rgba(234,88,12,0.4)]
          transition-all duration-500
          hover:bg-orange-500 hover:scale-110
          active:scale-95
          ${showScrollTop ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"}
        `}
        aria-label="Back to Top"
      >
        <FaChevronUp size={24} />
      </button>
    </>
  );
}
