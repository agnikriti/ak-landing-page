'use client'

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { label: "Home", href: "/", section: "home" },
  { label: "About", href: "#about", section: "about" },
  { label: "Services", href: "#services", section: "services" },
  { label: "Contact", href: "#contact", section: "contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["about", "services", "contact"];
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      }
    };

    const sectionObserver = new IntersectionObserver(handleIntersect, {
      rootMargin: "-40% 0px -55% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });
    observers.push(sectionObserver);

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveSection("home");
      },
      { rootMargin: "0px 0px -80% 0px", threshold: 0 }
    );

    const heroEl = document.getElementById("hero");
    if (heroEl) heroObserver.observe(heroEl);
    observers.push(heroObserver);

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="fixed top-3 md:top-5 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-6xl">
      <div className="backdrop-blur-md bg-blue-100/80 dark:bg-[#0a192f]/60 border border-black/10 dark:border-white/10 rounded-full px-5 py-3 md:px-10 md:py-5 shadow-lg flex items-center justify-between">
        <Link href="/" aria-label="Home">
          <Image src="/assets/ak-logo.svg" alt="Agnikriti" width={36} height={36} className="md:w-[40px] md:h-[40px] select-none drop-shadow-[0_0_8px_rgba(241,108,7,0.5)]" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href, section }) => {
            const isActive = activeSection === section;
            return (
              <Link
                key={section}
                href={href}
                className={`
                  relative text-[12px] uppercase tracking-[0.2em] px-5 py-2.5 rounded-xl
                  transition-all duration-300 font-medium
                  ${isActive
                    ? "text-blue-600 bg-blue-500/10 dark:text-orange-500 dark:bg-orange-500/10"
                    : "text-gray-500 hover:text-gray-900 hover:bg-black/5 dark:text-white/60 dark:hover:text-white dark:hover:bg-white/5"
                  }
                `}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500 dark:bg-orange-400" />
                )}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>

        {/* Mobile right side */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="p-1.5 rounded-lg text-gray-600 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 mx-1 backdrop-blur-md bg-blue-100/90 dark:bg-[#0a192f]/90 border border-black/10 dark:border-white/10 rounded-2xl shadow-lg overflow-hidden">
          {NAV_LINKS.map(({ label, href, section }) => {
            const isActive = activeSection === section;
            return (
              <Link
                key={section}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`
                  flex items-center gap-3 px-5 py-3.5 text-[12px] uppercase tracking-[0.2em] font-medium
                  transition-all duration-200 border-b border-black/5 dark:border-white/5 last:border-0
                  ${isActive
                    ? "text-blue-600 bg-blue-500/10 dark:text-orange-500 dark:bg-orange-500/10"
                    : "text-gray-500 hover:text-gray-900 hover:bg-black/5 dark:text-white/60 dark:hover:text-white dark:hover:bg-white/5"
                  }
                `}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-orange-400 flex-shrink-0" />}
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
