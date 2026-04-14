'use client';

import { useState } from 'react';
import { featureTabs } from '../data/content';

/* ── Tab Visuals ── */
function ExamVisual() {
  return (
    <div style={{
      background: 'var(--surface2)', border: '1px solid var(--border)',
      borderRadius: 16, padding: 20, width: '100%', maxWidth: 340,
    }}>
      <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>
        ما المقصود بـ"المتقين" في الآية الثانية من سورة البقرة؟
      </div>
      {[
        { text: 'الذين يجعلون بينهم وبين المحارم وقاية', correct: true, wrong: false },
        { text: 'الذين يصلون فقط الفرائض', correct: false, wrong: true },
        { text: 'من أسلموا حديثاً', correct: false, wrong: false },
      ].map((opt, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '10px 14px', borderRadius: 10, marginBottom: 8,
          border: opt.correct ? '1px solid rgba(34,197,94,0.4)' : opt.wrong ? '1px solid rgba(239,68,68,0.4)' : '1px solid var(--border)',
          background: opt.correct ? 'rgba(34,197,94,0.06)' : opt.wrong ? 'rgba(239,68,68,0.06)' : 'transparent',
          fontSize: 13,
          color: opt.correct ? 'var(--green)' : opt.wrong ? '#ef4444' : 'var(--text2)',
        }}>
          <div style={{
            width: 16, height: 16, borderRadius: '50%', flexShrink: 0,
            border: opt.correct ? 'none' : opt.wrong ? 'none' : '2px solid var(--border2)',
            background: opt.correct ? 'var(--green)' : opt.wrong ? '#ef4444' : 'transparent',
          }} />
          {opt.text}
        </div>
      ))}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '10px 14px', background: 'var(--surface)',
        borderRadius: 10, border: '1px solid var(--border)',
      }}>
        <span style={{ fontSize: 13, color: 'var(--text2)' }}>نتيجتك في هذا الدرس</span>
        <span style={{ fontSize: 15, fontWeight: 800, color: 'var(--accent)' }}>٨ / ١٠</span>
      </div>
    </div>
  );
}

function AiVisual() {
  return (
    <div style={{
      background: 'var(--surface2)', border: '1px solid var(--border)',
      borderRadius: 16, padding: 16, width: '100%', maxWidth: 340,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid var(--border)',
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: 'rgba(200,151,63,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
        }}>🤖</div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>مرافق القرآن</div>
          <div style={{ fontSize: 11, color: 'var(--green)' }}>● متاح الآن</div>
        </div>
      </div>
      {[
        { text: 'ما معنى "الضالين" في الفاتحة؟ وهل تختلف عن "المغضوب عليهم"؟', mine: true },
        { text: 'الضالين هم من أخطأوا الطريق عن جهل أو غفلة، أما المغضوب عليهم فعرفوا الحق وتركوه عمداً...', mine: false },
      ].map((msg, i) => (
        <div key={i} style={{
          padding: '10px 12px', borderRadius: 12,
          fontSize: 13, lineHeight: 1.6,
          marginBottom: 8, maxWidth: '90%',
          alignSelf: msg.mine ? 'flex-end' : 'flex-start',
          background: msg.mine ? 'rgba(200,151,63,0.1)' : 'var(--surface)',
          border: msg.mine ? '1px solid rgba(200,151,63,0.15)' : '1px solid var(--border)',
          color: msg.mine ? 'var(--text)' : 'var(--text2)',
          marginRight: msg.mine ? 0 : 'auto',
          marginLeft: msg.mine ? 'auto' : 0,
          borderBottomRightRadius: msg.mine ? 4 : 12,
          borderBottomLeftRadius: msg.mine ? 12 : 4,
        }}>{msg.text}</div>
      ))}
    </div>
  );
}

function ResourcesVisual() {
  const items = [
    { icon: '🗺️', name: 'خريطة ذهنية - الربع الأول', type: 'PDF — خريطة ذهنية', size: '↓ ٢.١ م.ب', bg: 'rgba(200,151,63,0.1)' },
    { icon: '🎵', name: 'ملخص صوتي - الآيات ١-٢٠', type: 'MP3 — ١٢ دقيقة', size: '↓ ٨.٤ م.ب', bg: 'rgba(45,139,120,0.1)' },
    { icon: '📋', name: 'بطاقات المراجعة - جزء عمّ', type: 'PDF — ٤٠ بطاقة', size: '↓ ٣.٧ م.ب', bg: 'rgba(124,58,237,0.1)' },
  ];
  return (
    <div style={{
      background: 'var(--surface2)', border: '1px solid var(--border)',
      borderRadius: 16, padding: 16, width: '100%', maxWidth: 340,
    }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>
        📁 موارد سورة البقرة
      </div>
      {items.map((item, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '10px 12px', borderRadius: 10, marginBottom: 8,
          border: '1px solid var(--border)', background: 'var(--surface)',
        }}>
          <div style={{
            width: 34, height: 34, borderRadius: 8,
            background: item.bg,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
          }}>{item.icon}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{item.name}</div>
            <div style={{ fontSize: 11, color: 'var(--text3)' }}>{item.type}</div>
          </div>
          <span style={{ fontSize: 11, color: 'var(--accent)' }}>{item.size}</span>
        </div>
      ))}
    </div>
  );
}

function ContactVisual() {
  return (
    <div style={{
      background: 'var(--surface2)', border: '1px solid var(--border)',
      borderRadius: 16, padding: 16, width: '100%', maxWidth: 340,
    }}>
      <div style={{
        fontSize: 13, fontWeight: 700, color: 'var(--text)',
        marginBottom: 12, paddingBottom: 10,
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--green)' }} />
        الشيخ خالد العمري — متاح
      </div>
      {[
        { text: 'أهلاً بك، ما الذي أشكل عليك اليوم؟', mine: false },
        { text: 'في آية ٢٦٠ من البقرة — كيف يطمئن القلب بعد الإيمان؟', mine: true },
        { text: 'سؤال لطيف — الطمأنينة هنا ليست شكاً، بل تعلّم يقين عميق يتحول من مجرد خبر إلى مشاهدة...', mine: false },
      ].map((msg, i) => (
        <div key={i} style={{
          padding: '10px 12px', borderRadius: 12,
          fontSize: 13, lineHeight: 1.6, marginBottom: 8,
          maxWidth: '85%',
          alignSelf: msg.mine ? 'flex-end' : 'flex-start',
          background: msg.mine ? 'rgba(200,151,63,0.1)' : 'var(--surface)',
          border: msg.mine ? '1px solid rgba(200,151,63,0.15)' : '1px solid var(--border)',
          color: msg.mine ? 'var(--text)' : 'var(--text2)',
          marginRight: msg.mine ? 0 : 'auto',
          marginLeft: msg.mine ? 'auto' : 0,
        }}>{msg.text}</div>
      ))}
      <div style={{ fontSize: 11, color: 'var(--text3)', textAlign: 'center', marginTop: 4 }}>
        رُدّ خلال ٤ دقائق ✓
      </div>
    </div>
  );
}

const TAB_VISUALS = { exam: ExamVisual, ai: AiVisual, resources: ResourcesVisual, contact: ContactVisual };

export default function TabbedFeatures() {
  const [active, setActive] = useState(0);
  const tab = featureTabs[active];
  const Visual = TAB_VISUALS[tab.visual];

  return (
    <section style={{ padding: '96px 5vw', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <div className="section-center" style={{ marginBottom: 48 }}>
          <span className="eyebrow">✨ مميزات تسهيل القرآن</span>
          <h2 className="section-title">نؤمن أن القرآن يستحق أفضل تجربة ممكنة</h2>
          <p className="section-sub">كل أداة صمّمناها لأن الطالب أخبرنا أنه يحتاجها</p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
          {featureTabs.map((t, i) => (
            <button key={t.id} onClick={() => setActive(i)} style={{
              padding: '10px 20px', borderRadius: 30,
              fontSize: 14, fontWeight: 600,
              border: `1px solid ${i === active ? 'var(--accent)' : 'var(--border)'}`,
              color: i === active ? '#000' : 'var(--text2)',
              background: i === active ? 'var(--accent)' : 'transparent',
              cursor: 'pointer', transition: 'all .2s',
            }}>{t.label}</button>
          ))}
        </div>

        {/* Panel */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 48, alignItems: 'center',
        }}>
          {/* Content */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px, 3vw, 38px)',
              fontWeight: 700, color: 'var(--text)',
              marginBottom: 16, lineHeight: 1.3,
            }}>{tab.title}</h3>
            <p style={{ fontSize: 16, color: 'var(--text2)', lineHeight: 1.85, marginBottom: 28 }}>
              {tab.desc}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {tab.bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--text2)' }}>
                  <span style={{
                    width: 20, height: 20, borderRadius: '50%',
                    background: 'rgba(200,151,63,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: 1,
                    fontSize: 10, color: 'var(--accent)',
                  }}>✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            minHeight: 320, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            padding: 32,
          }}>
            {Visual && <Visual />}
          </div>
        </div>
      </div>
    </section>
  );
}
