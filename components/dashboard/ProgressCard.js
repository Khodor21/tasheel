const MOCK_PROGRESS = [
  { icon: '📖', name: 'تفسير جزء عمّ',    progress: 75, total: 16, done: 12, color: '#C8973F' },
  { icon: '🎧', name: 'التسميع — البقرة', progress: 40, total: 20, done: 8,  color: '#2D8B78' },
  { icon: '📅', name: 'خطة الحفظ',        progress: 60, total: 5,  done: 3,  color: '#7C3AED' },
];

export default function ProgressCard() {
  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 28,
    }}>
      <div style={{
        fontSize: 16, fontWeight: 700,
        color: 'var(--text)', marginBottom: 24,
      }}>
        📊 تقدمك الحالي
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        {MOCK_PROGRESS.map((item, i) => (
          <div key={i}>
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', marginBottom: 8,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 18 }}>{item.icon}</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>
                  {item.name}
                </span>
              </div>
              <span style={{ fontSize: 12, color: 'var(--text3)' }}>
                {item.done}/{item.total}
              </span>
            </div>
            {/* Progress bar */}
            <div style={{
              height: 6, background: 'var(--border)',
              borderRadius: 3, overflow: 'hidden',
            }}>
              <div style={{
                height: '100%', borderRadius: 3,
                background: item.color,
                width: `${item.progress}%`,
                transition: 'width .6s ease',
              }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
