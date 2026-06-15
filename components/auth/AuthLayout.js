"use client";

import Link from "next/link";
import { Emoji, EmojiStyle } from "emoji-picker-react";

export default function AuthLayout({
  children,
  title,
  subtitle,
  footerText,
  footerLink,
  footerHref,
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-[#feffff] overflow-hidden font-sans dir-rtl">
      {/* Softer, wider background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none z-0" />
      {/* Main Card - Increased width to 540px and added elegant shadow */}
      <div
        className="w-full max-w-[640px] bg-white rounded-[12px] p-8 sm:px-2 sm:py-8 relative z-10"
        style={{
          border: "1px solid rgba(226, 232, 240, 0.8)",
          boxShadow: "0 20px 40px -15px rgba(110,138,120,0.15)",
        }}
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black mb-3" style={{ color: "#4a6252" }}>
            {title}
          </h2>
          {subtitle && (
            <p className="text-base font-medium" style={{ color: "#64748b" }}>
              {subtitle}
            </p>
          )}
        </div>

        {children}
      </div>
      {footerText && (
        <p
          className="mt-3 text-[15px] relative z-10 font-medium"
          style={{ color: "#64748b" }}
        >
          {footerText}{" "}
          <Link
            href={footerHref}
            className="font-bold hover:underline transition-all"
            style={{ color: "#6E8A78" }}
          >
            {footerLink}
          </Link>
        </p>
      )}
    </div>
  );
}
