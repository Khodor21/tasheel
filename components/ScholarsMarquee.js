import { scholars } from '../data/content';

function ScholarCard({ s }) {
  return (
    <div style={{
      background: 'var(--bg)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: 20, minWidth: 180,
      flexShrink: 0, textAlign: 'center',
    }}>
      <div style={{
        width: 64, height: 64, borderRadius: '50%',
        margin: '0 auto 12px',
        background: s.color,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 22, fontWeight: 700, color: '#fff',
        border: '2px solid var(--border2)',
      }}>{s.initial}</div>
      <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>
        {s.name}
      </div>
      <div style={{
        fontSize: 11, padding: '2px 10px', borderRadius: 20,
        background: 'rgba(200,151,63,0.1)', color: 'var(--accent)',
        display: 'inline-block', marginBottom: 4,
      }}>{s.subject}</div>
      <div style={{ fontSize: 11, color: 'var(--text3)' }}>{s.level}</div>
    </div>
  );
}

export default function ScholarsMarquee() {
  const doubled = [...scholars, ...scholars];

  return (
    <section style={{
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '80px 0',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ padding: '0 5vw', marginBottom: 48 }}>
        <span className="eyebrow">مشايخنا ومعلمونا</span>
        <h2 className="section-title">سرّ تميّز تسهيل… المشايخ</h2>
        <p className="section-sub" style={{ marginTop: 12 }}>
          مشايخ يفهمون القرآن ويعرفون كيف يوصّلونه لك بوضوح وعمق 👨‍🏫✨
        </p>
      </div>

      {/* Scrolling track */}
      <div style={{ overflow: 'hidden' }}>
        <div className="marquee-track" style={{ gap: 16 }}>
          {doubled.map((s, i) => <ScholarCard key={i} s={s} />)}
        </div>
      </div>
    </section>
  );
}
