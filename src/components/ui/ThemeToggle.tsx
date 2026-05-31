'use client'

import { useEffect, useState } from "react";
import { LuSun, LuMoon } from "react-icons/lu";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="w-9 h-9 flex items-center justify-center rounded-xl text-gray-500 hover:text-orange-500 hover:bg-black/5 dark:text-white/60 dark:hover:text-orange-400 dark:hover:bg-white/5 transition-all duration-300"
    >
      {isDark ? <LuSun size={18} /> : <LuMoon size={16} />}
    </button>
  );
}
