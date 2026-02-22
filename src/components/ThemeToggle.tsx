"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

export function ThemeToggle() {
  useEffect(() => {
    const stored = window.localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolved = stored ?? (systemPrefersDark ? "dark" : "light");

    document.documentElement.classList.toggle("dark", resolved === "dark");
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    const next = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-zinc-300 bg-white/80 text-zinc-700 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-900"
    >
      <Sun className="hidden h-4 w-4 dark:block" />
      <Moon className="h-4 w-4 dark:hidden" />
    </button>
  );
}
