"use client";

import Link from "next/link";
import Image from "next/image";
export default function AuthLayout({
  children,
  title,
  subtitle,
  footerText,
  footerLink,
  footerHref,
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--background)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        position: "relative",
      }}
    >
      {/* Subtle warm radial glow */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 500,
          background:
            "radial-gradient(ellipse at top, rgba(155,34,38,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Logo */}
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 36,
          position: "relative",
          zIndex: 1,
          textDecoration: "none",
        }}
      >
        <Image
          src="/Tasheel-logo.svg"
          width={140}
          height={40}
          alt="Tasheel Logo"
        />
      </Link>

      {/* Card */}
      <div
        style={{
          width: "100%",
          maxWidth: 460,
          background: "#fff",
          border: "1px solid var(--border)",
          borderRadius: 20,
          padding: "44px 40px",
          position: "relative",
          zIndex: 1,
          boxShadow: "0 2px 24px rgba(60,60,59,0.06)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h1
            style={{
              fontFamily: '"IBM Plex Arabic", sans-serif',
              fontSize: 26,
              fontWeight: 700,
              color: "var(--foreground)",
              marginBottom: 8,
              lineHeight: 1.3,
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              style={{
                fontSize: 15,
                color: "var(--text2)",
                lineHeight: 1.65,
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {children}
      </div>

      {footerText && (
        <p
          style={{
            marginTop: 24,
            fontSize: 14,
            color: "var(--text2)",
            position: "relative",
            zIndex: 1,
          }}
        >
          {footerText}{" "}
          <Link
            href={footerHref}
            style={{
              color: "var(--primary)",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            {footerLink}
          </Link>
        </p>
      )}
    </div>
  );
}
