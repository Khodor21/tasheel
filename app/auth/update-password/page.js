'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '../../../lib/supabase/client';
import AuthLayout from '../../../components/auth/AuthLayout';
import AuthInput from '../../../components/auth/AuthInput';
import AuthButton from '../../../components/auth/AuthButton';
import AuthAlert from '../../../components/auth/AuthAlert';

export default function UpdatePasswordPage() {
  const router = useRouter();
  const supabase = createClient();

  const [form, setForm] = useState({ password: '', confirm: '' });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  async function handleUpdate(e) {
    e.preventDefault();
    setAlert(null);

    if (form.password !== form.confirm) {
      setAlert({ type: 'error', message: 'كلمتا المرور غير متطابقتين.' });
      return;
    }
    if (form.password.length < 8) {
      setAlert({ type: 'error', message: 'كلمة المرور يجب أن تكون ٨ أحرف على الأقل.' });
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password: form.password });

    if (error) {
      setAlert({ type: 'error', message: 'حدث خطأ أثناء تحديث كلمة المرور. حاول مجدداً.' });
    } else {
      setAlert({ type: 'success', message: 'تم تحديث كلمة المرور بنجاح! جاري التحويل...' });
      setTimeout(() => router.push('/dashboard'), 1500);
    }
    setLoading(false);
  }

  return (
    <AuthLayout
      title="تعيين كلمة مرور جديدة"
      subtitle="اختر كلمة مرور قوية لحماية حسابك"
    >
      <AuthAlert {...(alert || { message: null })} />
      <form onSubmit={handleUpdate}>
        <AuthInput
          label="كلمة المرور الجديدة"
          type="password" name="password"
          placeholder="٨ أحرف على الأقل"
          value={form.password}
          onChange={handleChange}
          required autoComplete="new-password"
          hint="يجب أن تحتوي على ٨ أحرف على الأقل"
        />
        <AuthInput
          label="تأكيد كلمة المرور"
          type="password" name="confirm"
          placeholder="أعد كتابة كلمة المرور"
          value={form.confirm}
          onChange={handleChange}
          required autoComplete="new-password"
        />
        <AuthButton loading={loading}>تحديث كلمة المرور</AuthButton>
      </form>
    </AuthLayout>
  );
}
