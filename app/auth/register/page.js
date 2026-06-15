"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../../lib/supabase/client";
import AuthLayout from "../../../components/auth/AuthLayout";
import AuthInput from "../../../components/auth/AuthInput";
import AuthButton from "../../../components/auth/AuthButton";
import AuthAlert from "../../../components/auth/AuthAlert";

export default function RegisterPage() {
  const router = useRouter();
  const supabase = createClient();

  const [form, setForm] = useState({
    full_name: "",
    telegram: "",
    study_field: "",
    password: "",
    confirm_password: "",
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  async function handleRegister(e) {
    e.preventDefault();
    setAlert(null);

    // Validation
    if (!form.full_name.trim()) {
      setAlert({ type: "error", message: "الرجاء إدخال الاسم الكامل." });
      return;
    }

    if (!form.telegram.trim()) {
      setAlert({ type: "error", message: "الرجاء إدخال حساب التلغرام." });
      return;
    }

    if (form.password !== form.confirm_password) {
      setAlert({ type: "error", message: "كلمتا المرور غير متطابقتين." });
      return;
    }

    if (form.password.length < 6) {
      setAlert({
        type: "error",
        message: "كلمة المرور يجب أن تكون 6 أحرف على الأقل.",
      });
      return;
    }

    setLoading(true);

    const fakeEmail = `${form.telegram.replace(/@/g, "")}@app.local`;

    const { data, error } = await supabase.auth.signUp({
      email: fakeEmail,
      password: form.password,
      options: {
        data: {
          full_name: form.full_name.trim(),
          telegram: form.telegram.trim(),
          study_field: form.study_field.trim(),
        },
      },
    });

    if (error) {
      const errorMap = {
        "User already registered": "هذا المستخدم مسجّل بالفعل.",
        "Password should be at least 6 characters":
          "كلمة المرور قصيرة جداً (6 أحرف على الأقل).",
      };

      const arabicMsg =
        errorMap[error.message] ??
        `خطأ غير متوقع (${error.status ?? error.code ?? "422"}).`;

      setAlert({ type: "error", message: arabicMsg });
    } else if (data?.user?.identities?.length === 0) {
      setAlert({
        type: "error",
        message: "هذا المستخدم مسجّل بالفعل.",
      });
    } else {
      // ✅ Logic fix: Push to the main page "/" after successful registration
      router.push("/");
    }

    setLoading(false);
  }

  return (
    <AuthLayout
      title="أنشئ حسابك"
      subtitle="ابدأ رحلتك في بناء العادات الروحية اليوم"
      footerText="لديك حساب بالفعل؟"
      footerLink="سجّل دخولك"
      footerHref="/auth/login"
    >
      <AuthAlert {...(alert || { message: null })} />

      <form onSubmit={handleRegister} className="flex flex-col gap-2">
        <AuthInput
          label="الاسم الكامل"
          type="text"
          name="full_name"
          placeholder="اسمك الكريم"
          value={form.full_name}
          onChange={handleChange}
          required
        />

        <AuthInput
          label="حساب التلغرام"
          type="text"
          name="telegram"
          placeholder="@username"
          value={form.telegram}
          onChange={handleChange}
          required
        />

        <AuthInput
          label="المرحلة أو الاختصاص"
          type="text"
          name="study_field"
          placeholder="مثال: طالب ثانوي / هندسة / شريعة..."
          value={form.study_field}
          onChange={handleChange}
        />

        <AuthInput
          label="كلمة المرور"
          type="password"
          name="password"
          placeholder="6 أحرف على الأقل"
          value={form.password}
          onChange={handleChange}
          required
        />

        <AuthInput
          label="تأكيد كلمة المرور"
          type="password"
          name="confirm_password"
          placeholder="أعد كتابة كلمة المرور"
          value={form.confirm_password}
          onChange={handleChange}
          required
        />

        <AuthButton loading={loading}>إنشاء الحساب</AuthButton>
      </form>
    </AuthLayout>
  );
}
