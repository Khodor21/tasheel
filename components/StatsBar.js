import { stats } from '../data/content';

export default function StatsBar() {
  return (
    <div style={{
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        padding: '32px 5vw',
        display: 'grid',
        gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', textAlign: 'center',
            padding: '0 20px',
            borderLeft: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
          }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 40, fontWeight: 700,
              color: 'var(--accent)', lineHeight: 1, marginBottom: 6,
            }}>{s.num}</div>
            <div style={{ fontSize: 14, color: 'var(--text2)' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
