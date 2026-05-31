'use client'

import { useEffect, useRef } from "react";
import { FaLinkedin, FaInstagram, FaXTwitter, FaChevronDown } from "react-icons/fa6";
import { tinos, dmSans, ubuntu } from "@/lib/fonts";

const WORDS = ["Igniting Ideas", "Crafting Futures", "Building Solutions", "Empowering Change"];

type Ember = {
  color: string;
  width: string;
  height: string;
  left: string;
  bottom: string;
  delay: string;
  duration: string;
};

function WordCycler() {
  const trackRef = useRef<HTMLDivElement>(null);
  const curRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      curRef.current = (curRef.current + 1) % WORDS.length;
      track.style.transform = `translateY(-${curRef.current * 32}px)`;
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 overflow-hidden mt-4">
      <div
        ref={trackRef}
        className="flex flex-col transition-transform duration-500"
        style={{ transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)" }}
      >
        {WORDS.map((w) => (
          <span
            key={w}
            className={`${ubuntu.className} text-[17px] font-light tracking-[0.08em] uppercase text-[#0a192f] dark:text-[#e8a830] h-8 flex items-center justify-center shrink-0`}
          >
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Hero({ embers, lightEmbers, mounted }: { embers: Ember[]; lightEmbers: Ember[]; mounted: boolean }) {
  return (
    <div
      id="hero"
      className="relative flex w-full h-[100vh] items-center justify-center overflow-hidden bg-blue-100
       dark:bg-[#0a192f]"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Light mode orb — orange */}
        <div
          className="block dark:hidden absolute top-1/2 left-1/2 w-[90%] h-[90%] rounded-full blur-[120px] animate-pulse-intense"
          style={{ background: "radial-gradient(circle, #ff9900 0%, transparent 70%)" }}
        />
        {/* Dark mode orb — blue */}
        <div
          className="hidden dark:block absolute top-1/2 left-1/2 w-[90%] h-[90%] rounded-full blur-[120px] animate-pulse-intense"
          style={{ background: "radial-gradient(circle, #1e40af 0%, transparent 70%)" }}
        />

        {/* Light mode embers — blue */}
        {mounted && lightEmbers.map((ember, i) => (
          <div
            key={`l-${i}`}
            className="absolute block dark:hidden rounded-full blur-[0.6px] animate-rise"
            style={{
              backgroundColor: ember.color,
              width: ember.width,
              height: ember.height,
              left: ember.left,
              bottom: ember.bottom,
              animationDelay: ember.delay,
              // @ts-expect-error - custom property
              "--duration": ember.duration,
              boxShadow: `0 0 18px 4px ${ember.color}`,
              opacity: 1,
            }}
          />
        ))}

        {/* Dark mode embers — orange */}
        {mounted && embers.map((ember, i) => (
          <div
            key={`d-${i}`}
            className="absolute hidden dark:block rounded-full blur-[0.5px] animate-rise"
            style={{
              backgroundColor: ember.color,
              width: ember.width,
              height: ember.height,
              left: ember.left,
              bottom: ember.bottom,
              animationDelay: ember.delay,
              // @ts-expect-error - custom property
              "--duration": ember.duration,
              boxShadow: `0 0 10px ${ember.color}`,
              opacity: 0.8,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        <h1
          className={`${tinos.className} text-5xl md:text-7xl font-bold text-[#0f172a] dark:text-[#f5ede0] leading-none tracking-tight`}
          style={{ animation: "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          Agnikriti
        </h1>

        <div style={{ animation: "fadeUp 0.9s 0.2s cubic-bezier(0.16,1,0.3,1) both" }}>
          <WordCycler />
        </div>

        <div
          className="flex gap-8 mt-8"
          style={{ animation: "fadeUp 0.9s 0.3s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <a
            href="https://www.linkedin.com/company/agnikriti-solutions-llp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0a192f] hover:text-[#112240] dark:text-[#f5ede0]/60 dark:hover:text-orange-500 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={36} />
          </a>
          <a
            href="https://www.instagram.com/agnikriti.solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0a192f] hover:text-[#112240] dark:text-[#f5ede0]/60 dark:hover:text-orange-500 transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram size={36} />
          </a>
          <a
            href="https://x.com/AgnikritiLLP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0a192f] hover:text-[#112240] dark:text-[#f5ede0]/60 dark:hover:text-orange-500 transition-all duration-300 hover:scale-110"
            aria-label="X"
          >
            <FaXTwitter size={36} />
          </a>
        </div>

        <p
          className={`${ubuntu.className} text-[11px] tracking-[0.25em] uppercase text-orange-700 font-medium mt-10 mb-5`}
          style={{ animation: "fadeUp 0.9s 0.4s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          Reach out to us
        </p>

        <div
          className="flex flex-wrap justify-center gap-4"
          style={{ animation: "fadeUp 0.9s 0.5s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <a
            href="#about"
            className={`
              ${dmSans.className}
              inline-flex items-center
              px-8 py-3
              bg-[#0a192f] dark:bg-orange-600
              text-white text-sm tracking-[0.1em] font-semibold uppercase
              rounded-[30px]
              transition-all duration-300
              hover:bg-[#112240] dark:hover:bg-orange-500
              hover:shadow-[0_0_30px_rgba(10,25,47,0.5)] dark:hover:shadow-[0_0_30px_rgba(234,88,12,0.6)]
              active:scale-95
            `}
          >
            About Us
          </a>
          <a
            href="#contact"
            className={`
              ${dmSans.className}
              inline-flex items-center
              px-8 py-3
              bg-[#0a192f] dark:bg-orange-600
              text-white text-sm tracking-[0.1em] font-semibold uppercase
              rounded-[30px]
              transition-all duration-300
              hover:bg-[#112240] dark:hover:bg-orange-500
              hover:shadow-[0_0_30px_rgba(10,25,47,0.5)] dark:hover:shadow-[0_0_30px_rgba(234,88,12,0.6)]
              active:scale-95
            `}
          >
            Get in Touch
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center group transition-all duration-300"
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute w-12 h-12 rounded-full border border-[#0a192f]/30 dark:border-orange-500/30 animate-ping opacity-75" />
          <div className="absolute w-12 h-12 rounded-full border border-[#0a192f]/10 dark:border-orange-500/10" />
          <FaChevronDown
            className="text-[#0a192f] dark:text-orange-500 drop-shadow-[0_0_10px_rgba(10,25,47,0.4)] dark:drop-shadow-[0_0_10px_rgba(234,88,12,0.4)] animate-bounce-slow relative z-10"
            size={28}
          />
        </div>
      </a>
    </div>
  );
}
