const MOCK_ACTIVITY = [
  { emoji: '✅', text: 'أتممت درس تفسير آية الكرسي',         time: 'منذ ساعتين' },
  { emoji: '🎧', text: 'جلسة تسميع — صفحة ٤٢',              time: 'أمس' },
  { emoji: '📝', text: 'اجتزت اختبار سورة الفاتحة بـ ٩/١٠', time: 'منذ يومين' },
  { emoji: '🔥', text: 'حققت سلسلة مراجعة ١٤ يوم متواصلة',   time: 'منذ ٣ أيام' },
];

export default function ActivityCard() {
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
        ⚡ آخر النشاطات
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {MOCK_ACTIVITY.map((a, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start', gap: 12,
            paddingBottom: 14,
            borderBottom: i < MOCK_ACTIVITY.length - 1
              ? '1px solid var(--border)' : 'none',
          }}>
            <span style={{
              width: 34, height: 34, borderRadius: 10,
              background: 'var(--surface2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 16, flexShrink: 0,
            }}>{a.emoji}</span>
            <div>
              <div style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500 }}>
                {a.text}
              </div>
              <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 3 }}>
                {a.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
