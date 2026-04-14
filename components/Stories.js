import Link from 'next/link';
import { stories } from '../data/content';

function StoryCard({ item }) {
  return (
    <div style={{
      background: 'var(--bg)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 28,
      transition: 'border-color .2s',
    }}>
      <span style={{
        fontSize: 12, fontWeight: 700,
        color: 'var(--accent)', marginBottom: 14, display: 'block',
        textTransform: 'uppercase', letterSpacing: 1,
      }}>{item.grade}</span>
      <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>
        {item.name}
      </div>
      <p style={{
        fontSize: 14, color: 'var(--text2)', lineHeight: 1.85,
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}>
        <span style={{ color: 'var(--accent)', fontSize: 16 }}>❝ </span>
        {item.quote}
      </p>
    </div>
  );
}

export default function Stories() {
  return (
    <section id="stories" style={{
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      padding: '96px 5vw',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <span className="eyebrow">{stories.eyebrow}</span>
        <h2 className="section-title">{stories.title}</h2>
        <p className="section-sub" style={{ marginTop: 12 }}>{stories.sub}</p>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 16, marginTop: 48,
        }}>
          {stories.items.map((item, i) => <StoryCard key={i} item={item} />)}
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link href="#" style={{
            fontSize: 15, color: 'var(--accent)', fontWeight: 600,
            border: '1px solid rgba(200,151,63,0.3)',
            padding: '11px 28px', borderRadius: 10, display: 'inline-block',
            transition: 'background .2s',
          }}>{stories.cta}</Link>
        </div>
      </div>
    </section>
  );
}
