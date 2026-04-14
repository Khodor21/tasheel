'use client';

import { useState } from 'react';
import { createClient } from '../../../lib/supabase/client';
import AuthLayout from '../../../components/auth/AuthLayout';
import AuthInput from '../../../components/auth/AuthInput';
import AuthButton from '../../../components/auth/AuthButton';
import AuthAlert from '../../../components/auth/AuthAlert';

export default function ForgotPasswordPage() {
  const supabase = createClient();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [sent, setSent] = useState(false);

  async function handleReset(e) {
    e.preventDefault();
    setLoading(true);
    setAlert(null);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/auth/update-password`,
    });

    if (error) {
      setAlert({ type: 'error', message: 'حدث خطأ. تحقق من البريد الإلكتروني وحاول مجدداً.' });
    } else {
      setSent(true);
    }
    setLoading(false);
  }

  if (sent) {
    return (
      <AuthLayout title="تحقق من بريدك 📬" subtitle="">
        <div style={{ textAlign: 'center', padding: '8px 0' }}>
          <div style={{ fontSize: 56, marginBottom: 20 }}>🔑</div>
          <p style={{
            fontSize: 15,
            color: 'var(--text2)',
            lineHeight: 1.8,
            fontFamily: '"IBM Plex Arabic", sans-serif',
          }}>
            أرسلنا رابط إعادة تعيين كلمة المرور إلى{' '}
            <strong style={{ color: 'var(--primary)', fontWeight: 700 }}>
              {email}
            </strong>.
            <br />
            افتح بريدك واتبع التعليمات.
          </p>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="نسيت كلمة المرور؟"
      subtitle="أدخل بريدك وسنرسل لك رابط الاسترداد"
      footerText="تذكّرت كلمة المرور؟"
      footerLink="عُد لتسجيل الدخول"
      footerHref="/auth/login"
    >
      <AuthAlert {...(alert || { message: null })} />
      <form onSubmit={handleReset}>
        <AuthInput
          label="البريد الإلكتروني"
          type="email" name="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required autoComplete="email"
        />
        <AuthButton loading={loading}>إرسال رابط الاسترداد</AuthButton>
      </form>
    </AuthLayout>
  );
}
