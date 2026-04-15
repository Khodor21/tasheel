"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "../../../lib/supabase/client";
import AuthLayout from "../../../components/auth/AuthLayout";
import AuthInput from "../../../components/auth/AuthInput";
import AuthButton from "../../../components/auth/AuthButton";
import AuthAlert from "../../../components/auth/AuthAlert";
import { Suspense } from "react";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/dashboard";

  const [mode, setMode] = useState("password");
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const supabase = createClient();
  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  async function handlePasswordLogin(e) {
    e.preventDefault();
    setLoading(true);
    setAlert(null);
    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });
    if (error) {
      setAlert({
        type: "error",
        message: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
      });
    } else {
      router.push(redirectTo);
      router.refresh();
    }
    setLoading(false);
  }

  async function handleMagicLink(e) {
    e.preventDefault();
    setLoading(true);
    setAlert(null);
    const { error } = await supabase.auth.signInWithOtp({
      email: form.email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback?next=${redirectTo}`,
      },
    });
    if (error) {
      setAlert({
        type: "error",
        message: "حدث خطأ أثناء الإرسال. تحقق من البريد الإلكتروني.",
      });
    } else {
      setAlert({
        type: "success",
        message: "تم الإرسال! تحقق من بريدك وانقر على الرابط.",
      });
    }
    setLoading(false);
  }

  return (
    <AuthLayout
      title="أهلاً بعودتك"
      subtitle="سجّل دخولك لمتابعة رحلتك مع القرآن"
      footerText="ليس لديك حساب؟"
      footerLink="أنشئ حساباً"
      footerHref="/auth/register"
    >
      {/* Mode toggle */}
      <div
        style={{
          display: "flex",
          background: "var(--background)",
          border: "1px solid var(--border)",
          borderRadius: 10,
          padding: 4,
          marginBottom: 28,
          gap: 4,
        }}
      >
        {[
          { key: "password", label: "كلمة المرور" },
          { key: "magic", label: "رابط سريع 🪄" },
        ].map((m) => (
          <button
            key={m.key}
            type="button"
            onClick={() => {
              setMode(m.key);
              setAlert(null);
            }}
            style={{
              flex: 1,
              padding: "9px 0",
              borderRadius: 7,
              fontSize: 13,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              fontFamily: '"IBM Plex Arabic", sans-serif',
              background: mode === m.key ? "#fff" : "transparent",
              color: mode === m.key ? "var(--primary)" : "var(--text3)",
              boxShadow:
                mode === m.key ? "0 1px 4px rgba(60,60,59,0.10)" : "none",
              transition: "all .2s",
            }}
          >
            {m.label}
          </button>
        ))}
      </div>

      <AuthAlert {...(alert || { message: null })} />

      {/* Password form */}
      {mode === "password" && (
        <form onSubmit={handlePasswordLogin}>
          <AuthInput
            label="البريد الإلكتروني"
            type="email"
            name="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
          <AuthInput
            label="كلمة المرور"
            type="password"
            name="password"
            placeholder="••••••••"
            value={form.password}
            onChange={handleChange}
            required
            autoComplete="current-password"
          />
          <div style={{ textAlign: "left", marginTop: -8, marginBottom: 24 }}>
            <Link
              href="/auth/forgot-password"
              style={{
                fontSize: 13,
                color: "var(--text3)",
                textDecoration: "none",
              }}
            >
              نسيت كلمة المرور؟
            </Link>
          </div>
          <AuthButton loading={loading}>تسجيل الدخول</AuthButton>
        </form>
      )}

      {/* Magic link form */}
      {mode === "magic" && (
        <form onSubmit={handleMagicLink}>
          <AuthInput
            label="البريد الإلكتروني"
            type="email"
            name="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
            hint="سنرسل لك رابطاً مباشراً للدخول بدون كلمة مرور"
          />
          <AuthButton loading={loading}>إرسال رابط الدخول</AuthButton>
        </form>
      )}

      {/* Divider */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          margin: "24px 0",
        }}
      >
        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        <span style={{ fontSize: 12, color: "var(--text3)" }}>أو</span>
        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
      </div>

      <GoogleButton supabase={supabase} redirectTo={redirectTo} />
    </AuthLayout>
  );
}

function GoogleButton({ supabase, redirectTo }) {
  const [loading, setLoading] = useState(false);

  async function handleGoogle() {
    setLoading(true);
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${redirectTo}`,
      },
    });
    setLoading(false);
  }

  return (
    <button
      type="button"
      onClick={handleGoogle}
      disabled={loading}
      style={{
        width: "100%",
        padding: "12px 16px",
        borderRadius: 10,
        background: "#fff",
        border: "1.5px solid var(--border)",
        color: "var(--foreground)",
        fontSize: 14,
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        cursor: "pointer",
        transition: "border-color .2s, box-shadow .2s",
        fontFamily: '"IBM Plex Arabic", sans-serif',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = "var(--primary)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "var(--border)")
      }
    >
      <svg width="18" height="18" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
        <path
          fill="#4285F4"
          d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
        />
        <path
          fill="#34A853"
          d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.615 24 12.255 24z"
        />
        <path
          fill="#FBBC05"
          d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09z"
        />
        <path
          fill="#EA4335"
          d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.64 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
        />
      </svg>
      {loading ? "جاري التحويل..." : "الدخول عبر Google"}
    </button>
  );
}
