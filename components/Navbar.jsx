"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-5 left-0 w-full z-50"
    >
      <div className="w-[85%] md:w-[55%] bg-white/70 backdrop-blur-md mx-auto px-4 rounded-full py-2 md:py-4 flex flex-row-reverse items-center justify-between">
        {" "}
        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >
          <span className="block w-6 h-0.5 bg-foreground mb-1"></span>
          <span className="block w-6 h-0.5 bg-foreground mb-1"></span>
          <span className="block w-6 h-0.5 bg-foreground"></span>
        </button>
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/">
            <Image
              src="/Tasheel-logo.svg"
              width={140}
              height={40}
              alt="Tasheel Logo"
            />
          </a>
        </div>
        {/* Links (desktop) */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-foreground">
          <a href="#about" className="hover:text-primary transition">
            عن المنصة
          </a>
          <a href="#features" className="hover:text-primary transition">
            المميزات
          </a>
          <a href="#contact" className="hover:text-primary transition">
            تواصل
          </a>
        </div>
        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#start"
            className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition"
          >
            سجّل دخول
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white">
          <a
            href="#about"
            className="block px-6 py-3 text-foreground border-b border-gray-200"
            onClick={() => setOpen(false)}
          >
            عن المنصة
          </a>
          <a
            href="#features"
            className="block px-6 py-3 text-foreground border-b border-gray-200"
            onClick={() => setOpen(false)}
          >
            المميزات
          </a>
          <a
            href="#contact"
            className="block px-6 py-3 text-foreground border-b border-gray-200"
            onClick={() => setOpen(false)}
          >
            تواصل
          </a>
          <a
            href="#start"
            className="block px-6 py-3 bg-primary text-white text-center font-semibold rounded-b-lg"
            onClick={() => setOpen(false)}
          >
            سجّل دخول
          </a>
        </div>
      )}
    </motion.nav>
  );
}
