'use client';
import Image from "next/image";
import logo_black from "../../public/logo-black.webp"
import logo_light from "../../public/logo-white.webp"

import { useEffect, useState } from "react";
export const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <header className="p-4 shadow-md flex justify-between items-center bg-white dark:bg-gray-900">
      <Image src={theme == 'light' ? logo_black : logo_light} alt="logo" height={40} />
      <button
        onClick={toggleTheme}
        className="p-2 bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-md"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </header>
  )
}