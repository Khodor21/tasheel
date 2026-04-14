import { featurePanels } from '../data/content';

function TafsirVisual() {
  return (
    <div style={{
      background: 'var(--surface2)', border: '1px solid var(--border)',
      borderRadius: 16, padding: 20, width: '100%', maxWidth: 320,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <div style={{
          width: 38, height: 38, borderRadius: 10,
          background: 'rgba(200,151,63,0.12)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17,
        }}>📖</div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>تفسير الكهف - آية ٢٩</div>
          <div style={{ fontSize: 12, color: 'var(--text3)' }}>تفسير مبسّط</div>
        </div>
      </div>
      <div style={{
        background: 'rgba(200,151,63,0.06)',
        border: '1px solid rgba(200,151,63,0.15)',
        borderRadius: 10, padding: 12, marginBottom: 12,
      }}>
        <div style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.75 }}>
          الحق هو ما جاء به القرآن، واختيار القبول أو الرفض متروك للإنسان — لكن العواقب مختلفة في الحالتين...
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 12, color: 'var(--text3)' }}>مصدر: ابن كثير</span>
        <span style={{ fontSize: 12, color: 'var(--accent)' }}>▶ تعمّق أكثر</span>
      </div>
    </div>
  );
}

function ChatVisual() {
  return (
    <div style={{
      background: 'var(--surface2)', border: '1px solid var(--border)',
      borderRadius: 16, padding: 16, width: '100%', maxWidth: 320,
      display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <div style={{
        fontSize: 13, fontWeight: 700, color: 'var(--text)',
        marginBottom: 2, paddingBottom: 10,
        borderBottom: '1px solid var(--border)',
      }}>
        💬 مجموعة الحفظ — سورة البقرة
      </div>
      {[
        { text: 'الشيخ حمد: أحسنتم جميعاً في مراجعة الحزب الأول. من لديه سؤال؟', mine: false },
        { text: 'ما الفرق بين التوبة والاستغفار في الآية ١٦٠؟', mine: true },
        { text: 'الشيخ: سؤال ممتاز — الاستغفار طلب المغفرة، والتوبة العودة إلى الله بالقلب والفعل معاً.', mine: false },
      ].map((msg, i) => (
        <div key={i} style={{
          padding: '10px 14px', borderRadius: 12,
          fontSize: 13, lineHeight: 1.6,
          maxWidth: '85%',
          alignSelf: msg.mine ? 'flex-end' : 'flex-start',
          background: msg.mine ? 'rgba(200,151,63,0.15)' : 'var(--surface)',
          border: msg.mine ? '1px solid rgba(200,151,63,0.2)' : '1px solid var(--border)',
          color: msg.mine ? 'var(--text)' : 'var(--text2)',
          borderBottomLeftRadius: msg.mine ? 12 : 4,
          borderBottomRightRadius: msg.mine ? 4 : 12,
        }}>{msg.text}</div>
      ))}
      <div style={{ fontSize: 11, color: 'var(--text3)', textAlign: 'center' }}>
        ٤٧ عضو في المجموعة
      </div>
    </div>
  );
}

function ScheduleVisual() {
  const items = [
    { name: 'مراجعة الحزب الأول', day: '✓ الأحد', done: true },
    { name: 'حفظ صفحة جديدة', day: '✓ الاثنين', done: true },
    { name: 'جلسة التسميع', day: '✓ الثلاثاء', done: true },
    { name: 'بث مباشر — تفسير', day: 'الأربعاء', done: false },
    { name: 'اختبار أسبوعي', day: 'الجمعة', done: false },
  ];
  return (
    <div style={{
      background: 'var(--surface2)', border: '1px solid var(--border)',
      borderRadius: 16, padding: 16, width: '100%', maxWidth: 320,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 14,
      }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>
          📅 خطة هذا الأسبوع
        </span>
        <span style={{
          fontSize: 11, padding: '2px 8px', borderRadius: 20,
          background: 'rgba(34,197,94,0.12)', color: 'var(--green)', fontWeight: 600,
        }}>٣ من ٥ مكتمل</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '10px 12px',
            background: 'var(--surface)',
            borderRadius: 10, border: '1px solid var(--border)',
            opacity: item.done ? 1 : 0.5,
          }}>
            <div style={{
              width: 8, height: 8, borderRadius: '50%', flexShrink: 0,
              background: item.done ? 'var(--green)' : 'var(--border2)',
            }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', flex: 1 }}>
              {item.name}
            </span>
            <span style={{ fontSize: 11, color: 'var(--text3)' }}>{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const VISUALS = { tafsir: TafsirVisual, chat: ChatVisual, schedule: ScheduleVisual };

export default function FeaturePanels() {
  return (
    <div id="features">
      {featurePanels.map((panel, i) => {
        const Visual = VISUALS[panel.visual];
        return (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            borderTop: '1px solid var(--border)',
            ...(i === featurePanels.length - 1 ? { borderBottom: '1px solid var(--border)' } : {}),
          }}>
            {/* Visual side */}
            {!panel.reverse && (
              <div style={{
                background: 'var(--surface)',
                borderLeft: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                minHeight: 360, padding: 40,
              }}>
                {Visual && <Visual />}
              </div>
            )}

            {/* Content side */}
            <div style={{
              padding: '64px 5vw',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: 3,
                color: 'var(--text3)', marginBottom: 20, display: 'block',
              }}>{panel.num}</span>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(22px, 2.5vw, 30px)',
                fontWeight: 700, color: 'var(--text)',
                marginBottom: 14, lineHeight: 1.3,
              }}>{panel.title}</h3>
              <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.85, maxWidth: 420 }}>
                {panel.desc}
              </p>
            </div>

            {/* Visual side (reversed) */}
            {panel.reverse && (
              <div style={{
                background: 'var(--surface)',
                borderRight: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                minHeight: 360, padding: 40,
              }}>
                {Visual && <Visual />}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
