'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '../../lib/supabase/client';

const PLAN_LABELS = { free: 'مجاني', basic: 'الأساس', full: 'المتعلم الكامل' };
const PLAN_COLORS = {
  free:  { bg: 'rgba(102,102,96,0.15)', color: '#A0A09A' },
  basic: { bg: 'rgba(45,139,120,0.15)', color: '#3DA88F' },
  full:  { bg: 'rgba(200,151,63,0.15)', color: '#C8973F' },
};

export default function DashboardNav({ profile }) {
  const router = useRouter();
  const supabase = createClient();
  const [signingOut, setSigningOut] = useState(false);
  const plan = PLAN_COLORS[profile.plan] || PLAN_COLORS.free;

  async function handleSignOut() {
    setSigningOut(true);
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  }

  return (
    <header style={{
      background: 'var(--surface)',
      borderBottom: '1px solid var(--border)',
      padding: '0 5vw',
      height: 66,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 34, height: 34,
          background: 'var(--accent)',
          borderRadius: 9,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)',
          fontSize: 17, fontWeight: 700, color: '#000',
        }}>ق</div>
        <span style={{ fontSize: 17, fontWeight: 800, color: 'var(--text)' }}>
          تسهيل القرآن
        </span>
      </Link>

      {/* Nav links */}
      <nav style={{ display: 'flex', gap: 24 }}>
        {[
          { href: '/dashboard', label: 'الرئيسية' },
          { href: '/dashboard/courses', label: 'دروسي' },
          { href: '/dashboard/progress', label: 'تقدمي' },
          { href: '/dashboard/profile', label: 'حسابي' },
        ].map((link) => (
          <Link key={link.href} href={link.href} style={{
            fontSize: 14, color: 'var(--text2)',
            transition: 'color .2s',
            fontWeight: 500,
          }}>{link.label}</Link>
        ))}
      </nav>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <span style={{
          fontSize: 12, padding: '4px 12px', borderRadius: 20, fontWeight: 700,
          background: plan.bg, color: plan.color,
        }}>{PLAN_LABELS[profile.plan]}</span>

        {/* Avatar circle */}
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'var(--accent)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 15, fontWeight: 700, color: '#000',
          flexShrink: 0,
        }}>
          {profile.full_name?.[0] || 'م'}
        </div>

        {/* Sign out */}
        <button
          onClick={handleSignOut}
          disabled={signingOut}
          style={{
            padding: '7px 16px', borderRadius: 8,
            fontSize: 13, fontWeight: 600,
            border: '1px solid var(--border)',
            color: 'var(--text2)', background: 'transparent',
            cursor: 'pointer', transition: 'all .2s',
            fontFamily: 'var(--font-body)',
          }}
        >
          {signingOut ? '...' : 'خروج'}
        </button>
      </div>
    </header>
  );
}
