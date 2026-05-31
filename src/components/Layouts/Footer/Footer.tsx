'use client'

import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { tinos, ubuntu } from "@/lib/fonts";

type Ember = {
  color: string;
  width: string;
  height: string;
  left: string;
  bottom: string;
  delay: string;
  duration: string;
};

export function Footer({ embers, lightEmbers, mounted }: { embers: Ember[]; lightEmbers: Ember[]; mounted: boolean }) {
  return (
    <footer className="relative bg-[#f0f5f5] dark:bg-[#0a192f] pt-24 pb-16 overflow-hidden border-t border-[#e5e0d8] dark:border-white/5">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Light mode orb — orange */}
        <div
          className="block dark:hidden absolute top-1/2 left-1/2 w-[60%] h-[120%] rounded-full blur-[100px] animate-pulse-intense"
          style={{ background: "radial-gradient(circle, #ff9900 0%, transparent 70%)" }}
        />
        {/* Dark mode orb — blue */}
        <div
          className="hidden dark:block absolute top-1/2 left-1/2 w-[60%] h-[120%] rounded-full blur-[100px] animate-pulse-intense"
          style={{ background: "radial-gradient(circle, #1e40af 0%, transparent 70%)" }}
        />

        {/* Light mode embers — blue */}
        {mounted && lightEmbers.slice(0, 15).map((ember, i) => (
          <div
            key={`l-${i}`}
            className="absolute block dark:hidden rounded-full blur-[1px] animate-rise"
            style={{
              backgroundColor: ember.color,
              width: ember.width,
              height: ember.height,
              left: ember.left,
              bottom: "-20px",
              animationDelay: ember.delay,
              // @ts-expect-error - custom property
              "--duration": ember.duration,
              boxShadow: `0 0 10px ${ember.color}`,
              opacity: 0.4,
            }}
          />
        ))}

        {/* Dark mode embers — orange */}
        {mounted && embers.slice(0, 15).map((ember, i) => (
          <div
            key={`d-${i}`}
            className="absolute hidden dark:block rounded-full blur-[1px] animate-rise"
            style={{
              backgroundColor: ember.color,
              width: ember.width,
              height: ember.height,
              left: ember.left,
              bottom: "-20px",
              animationDelay: ember.delay,
              // @ts-expect-error - custom property
              "--duration": ember.duration,
              boxShadow: `0 0 10px ${ember.color}`,
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10 text-center space-y-10">
        <div className="space-y-4">
          <h2 className={`${tinos.className} text-3xl font-bold text-[#0f172a] dark:text-[#f5ede0]`}>Agnikriti</h2>
          <div className="flex flex-col items-center space-y-1">
            <p className={`${ubuntu.className} text-sm text-[#0a192f] dark:text-[#94a3b8] tracking-wide`}>
              © 2026 Agnikriti Solutions LLP. All Rights Reserved.
            </p>
            <p className={`${ubuntu.className} text-[13px] text-[#0a192f] dark:text-[#94a3b8] font-medium tracking-[0.2em] uppercase`}>
              LLPIN: ACY-5602 | PAN: ACOFA5113C
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex justify-center gap-10">
            <a href="#about" className={`${ubuntu.className} text-[13px] uppercase tracking-[0.25em] text-[#0a192f] dark:text-[#94a3b8] hover:text-orange-500 transition-colors`}>About</a>
            <a href="#services" className={`${ubuntu.className} text-[13px] uppercase tracking-[0.25em] text-[#0a192f] dark:text-[#94a3b8] hover:text-orange-500 transition-colors`}>Services</a>
            <a href="#contact" className={`${ubuntu.className} text-[13px] uppercase tracking-[0.25em] text-[#0a192f] dark:text-[#94a3b8] hover:text-orange-500 transition-colors`}>Contact</a>
          </div>

          <div className="flex justify-center gap-10">
            <a
              href="https://www.linkedin.com/company/agnikriti-solutions-llp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a192f] dark:text-[#f5ede0]/40 hover:text-orange-500 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://www.instagram.com/agnikriti.solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a192f] dark:text-[#f5ede0]/40 hover:text-orange-500 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://x.com/AgnikritiLLP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a192f] dark:text-[#f5ede0]/40 hover:text-orange-500 transition-all duration-300 hover:scale-110"
              aria-label="X"
            >
              <FaXTwitter size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
