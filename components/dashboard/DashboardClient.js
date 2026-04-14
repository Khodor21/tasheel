'use client';

import DashboardNav from './DashboardNav';
import StatCard from './StatCard';
import ProgressCard from './ProgressCard';
import ActivityCard from './ActivityCard';
import ProfileCard from './ProfileCard';

const STATS = [
  { icon: '🔥', label: 'سلسلة المراجعة',  value: '١٤ يوم'  },
  { icon: '📖', label: 'دروس مكتملة',      value: '٢٣'       },
  { icon: '🎯', label: 'معدل الاختبارات',  value: '٨٨٪'     },
  { icon: '⏱️', label: 'ساعات التعلم',    value: '٤٧ ساعة' },
];

export default function DashboardClient({ profile }) {
  const joinedDate = new Date(profile.joined_at).toLocaleDateString('ar-SA', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', fontFamily: 'var(--font-body)' }}>

      <DashboardNav profile={profile} />

      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 5vw' }}>

        {/* Greeting */}
        <div style={{ marginBottom: 40 }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(26px, 3vw, 38px)',
            fontWeight: 700, color: 'var(--text)', marginBottom: 8,
          }}>
            أهلاً بك، {profile.full_name?.split(' ')[0]} 👋
          </h1>
          <p style={{ fontSize: 16, color: 'var(--text2)' }}>
            {profile.grade ? profile.grade + ' · ' : ''}
            عضو منذ {joinedDate}
          </p>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 14, marginBottom: 24,
        }}>
          {STATS.map((s) => (
            <StatCard key={s.label} icon={s.icon} label={s.label} value={s.value} />
          ))}
        </div>

        {/* Two-column */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 20, marginBottom: 20,
        }}>
          <ProgressCard />
          <ActivityCard />
        </div>

        {/* Profile summary */}
        <ProfileCard profile={profile} />

      </main>
    </div>
  );
}
