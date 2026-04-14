import { experts } from '../data/content';

function ExpertCard({ item }) {
  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 28,
    }}>
      <p style={{
        fontSize: 15, color: 'var(--text2)', lineHeight: 1.85,
        marginBottom: 24, paddingBottom: 24,
        borderBottom: '1px solid var(--border)',
      }}>
        <span style={{ color: 'var(--accent)', fontSize: 18 }}>❝ </span>
        {item.quote}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 44, height: 44, borderRadius: '50%',
          background: item.color,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16, fontWeight: 700, color: '#fff', flexShrink: 0,
        }}>{item.initial}</div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>{item.name}</div>
          <div style={{ fontSize: 12, color: 'var(--text3)', marginTop: 2 }}>{item.title}</div>
        </div>
      </div>
    </div>
  );
}

export default function Experts() {
  return (
    <section style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '96px 5vw',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="section-center" style={{ marginBottom: 48 }}>
          <span className="eyebrow">{experts.eyebrow}</span>
          <h2 className="section-title">{experts.title}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {experts.items.map((item, i) => <ExpertCard key={i} item={item} />)}
        </div>
      </div>
    </section>
  );
}
