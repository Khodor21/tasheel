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
      <div className="w-[85%] md:w-[55%] bg-white/70 backdrop-blur-md mx-auto px-5 md:px-4 rounded-full py-2 md:py-4 flex flex-row-reverse md:flex-row items-center justify-between">
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
          <div className="hidden md:block"></div>{" "}
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
        <a
          href="/auth/login"
          className="hidden md:block bg-primary text-white px-4 py-1 rounded-full text-sm hover:opacity-90 transition"
        >
          سجّل دخول
        </a>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="w-[85%] mt-2 md:hidden bg-white mx-auto px-5 md:px-4 rounded-md py-2 md:py-4 flex flex-col items-center justify-between">
          <a
            href="#about"
            className="block w-full font-semibold mx-auto py-3 text-center text-foreground border-b-[1px] border-foreground"
            onClick={() => setOpen(false)}
          >
            عن المنصة
          </a>
          <a
            href="#features"
            className="block w-full font-semibold mx-auto py-3 text-center text-foreground border-b-[1px] border-foreground"
            onClick={() => setOpen(false)}
          >
            المميزات
          </a>
          <a
            href="#contact"
            className="block w-full font-semibold mx-auto py-3 text-center text-foreground border-b-[1px] border-foreground"
            onClick={() => setOpen(false)}
          >
            تواصل
          </a>
          <a
            href="/auth/login"
            className="block w-full font-bold mx-auto py-3 text-center text-primary"
            onClick={() => setOpen(false)}
          >
            سجّل دخول
          </a>
        </div>
      )}
    </motion.nav>
  );
}
