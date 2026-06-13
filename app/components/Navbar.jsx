"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FcSettings, FcBarChart ,FcHome ,  FcAdvertising } from "react-icons/fc";

const navLinks = [
  {
    label: "الرئيسية",
    href: "/",
    icon: <FcHome size={24} />,
  },
  {
    label: "الغُرف",
    href: "/rooms",
    icon: <FcAdvertising size={24} />,
  },
  {
    label: "رحلتي",
    href: "/journey",
    icon: <FcBarChart  size={24} />,
  },
  {
    label: "الإعدادات",
    href: "/settings",
    icon: <FcSettings size={24} />,
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* ─── Desktop Navbar (md+) ─── */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="hidden md:block fixed top-5 left-0 w-full z-50"
      >
        <div className="w-[55%] bg-white/70 backdrop-blur-md mx-auto px-4 rounded-full py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/">
            <Image
              src="/Tasheel-logo.svg"
              width={140}
              height={40}
              alt="Tasheel Logo"
            />
          </a>

          {/* Links */}
          <div className="flex gap-8 text-sm font-medium text-foreground">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`hover:text-primary transition ${
                    isActive ? "text-primary font-semibold" : ""
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <a
            href="/auth/login"
            className="bg-primary text-white px-4 py-1 rounded-full text-sm hover:opacity-90 transition"
          >
            سجّل دخول
          </a>
        </div>
      </motion.nav>

      <motion.nav
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white border-t rounded-sm border-gray-200 pb-safe" // Added pb-safe for modern iPhones
>
  <div className="flex items-center justify-around px-4 py-2">
    {navLinks.map((link) => {
      const isActive = pathname === link.href;
      return (
        <a
          key={link.href}
          href={link.href}
          className="flex flex-col items-center gap-1 min-w-[64px]"
        >
          {/* Render the Icon directly */}
          <div className={`transition-all duration-300 ${!isActive ? "grayscale opacity-50 scale-90" : "scale-110"}`}>
            {link.icon}
          </div>

          {/* Label */}
          <span
            className={`text-sm font-medium transition-colors ${
              isActive ? "text-primary" : "text-gray-400"
            }`}
          >
            {link.label}
          </span>
        </a>
      );
    })}
  </div>
</motion.nav>
    </>
  );
}