import Link from 'next/link';

const PLAN_LABELS = { free: 'مجاني', basic: 'الأساس', full: 'المتعلم الكامل' };
const PLAN_COLORS = {
  free:  { bg: 'rgba(102,102,96,0.15)', color: '#A0A09A' },
  basic: { bg: 'rgba(45,139,120,0.15)', color: '#3DA88F' },
  full:  { bg: 'rgba(200,151,63,0.15)', color: '#C8973F' },
};

export default function ProfileCard({ profile }) {
  const plan = PLAN_COLORS[profile.plan] || PLAN_COLORS.free;

  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 28,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      alignItems: 'center',
      gap: 20,
    }}>
      {/* Avatar */}
      <div style={{
        width: 56, height: 56, borderRadius: '50%',
        background: 'var(--accent)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontSize: 24, fontWeight: 700, color: '#000',
      }}>
        {profile.full_name?.[0] || 'م'}
      </div>

      {/* Info */}
      <div>
        <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>
          {profile.full_name}
        </div>
        <div style={{ fontSize: 13, color: 'var(--text2)', marginTop: 3 }}>
          {profile.email}
        </div>
        {profile.grade && (
          <div style={{ fontSize: 12, color: 'var(--text3)', marginTop: 4 }}>
            {profile.grade}
          </div>
        )}
      </div>

      {/* Plan + upgrade */}
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <span style={{
          fontSize: 12, padding: '5px 14px', borderRadius: 20, fontWeight: 700,
          background: plan.bg, color: plan.color,
        }}>{PLAN_LABELS[profile.plan]}</span>

        {profile.plan === 'free' && (
          <Link href="/#pricing" style={{
            fontSize: 13, padding: '8px 18px', borderRadius: 8, fontWeight: 700,
            background: 'var(--accent)', color: '#000',
            textDecoration: 'none', transition: 'background .2s',
          }}>
            ترقية الباقة
          </Link>
        )}
      </div>
    </div>
  );
}
