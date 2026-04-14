import Link from 'next/link';
import { tools } from '../data/content';

export default function ToolsSection() {
  return (
    <section style={{
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      padding: '96px 5vw',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: 56, flexWrap: 'wrap', gap: 20,
        }}>
          <div>
            <span className="eyebrow">{tools.eyebrow}</span>
            <h2 className="section-title">{tools.title}</h2>
          </div>
          <Link href="#" className="btn-primary">{tools.cta}</Link>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1, background: 'var(--border)',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
        }}>
          {tools.items.map((item, i) => (
            <div key={i} style={{ background: 'var(--surface)', padding: '40px 36px' }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: 3,
                color: 'var(--text3)', marginBottom: 20, display: 'block',
              }}>{item.num}</span>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 24, marginBottom: 20,
                border: '1px solid var(--border2)',
              }}>{item.icon}</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', marginBottom: 10 }}>
                {item.title}
              </div>
              <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.8 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
