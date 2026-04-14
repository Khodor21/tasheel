'use client';

import { useState } from 'react';
import Link from 'next/link';
import { pricing } from '../data/content';

export default function Pricing() {
  const [activePlan, setActivePlan] = useState(0);

  return (
    <section id="pricing" style={{ background: 'var(--bg)', padding: '96px 5vw' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <div className="section-center" style={{ marginBottom: 48 }}>
          <span className="eyebrow">{pricing.eyebrow}</span>
          <h2 className="section-title">{pricing.title}</h2>
          <p className="section-sub">{pricing.sub}</p>
        </div>

        {/* Featured plan */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-xl)',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          overflow: 'hidden', marginBottom: 24,
        }}>
          {/* Info */}
          <div style={{
            padding: '56px 48px',
            background: 'linear-gradient(135deg, rgba(200,151,63,0.08), transparent)',
          }}>
            <span style={{
              display: 'inline-block', fontSize: 12, fontWeight: 700,
              padding: '4px 14px', borderRadius: 20,
              background: 'rgba(200,151,63,0.15)', color: 'var(--accent)',
              marginBottom: 20,
            }}>{pricing.featured.tag}</span>

            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 28, fontWeight: 700, color: 'var(--text)', marginBottom: 14,
            }}>{pricing.featured.name}</div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 8 }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 60, fontWeight: 700, color: 'var(--accent)', lineHeight: 1,
              }}>{pricing.featured.price}</span>
              <span style={{ fontSize: 16, color: 'var(--text2)' }}>{pricing.featured.currency}</span>
              <span style={{ fontSize: 14, color: 'var(--text3)' }}>{pricing.featured.period}</span>
            </div>

            <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.8, marginBottom: 28 }}>
              {pricing.featured.desc}
            </p>

            <Link href="#" style={{
              display: 'inline-block', padding: '14px 32px', borderRadius: 10,
              fontSize: 16, fontWeight: 700, background: 'var(--accent)', color: '#000',
              transition: 'background .2s',
            }}>{pricing.featured.cta}</Link>
          </div>

          {/* Features list */}
          <div style={{
            padding: '56px 48px',
            borderRight: '1px solid var(--border)',
          }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text2)', marginBottom: 24 }}>
              ما تحصل عليه في الباقة
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {pricing.featured.features.map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 15, color: 'var(--text2)' }}>
                  <span style={{
                    width: 22, height: 22, borderRadius: '50%',
                    background: 'rgba(200,151,63,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, fontSize: 11, color: 'var(--accent)', marginTop: 1,
                  }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Plan toggle cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {pricing.plans.map((plan, i) => (
            <div key={i} onClick={() => setActivePlan(i)} style={{
              background: 'var(--surface)',
              border: `2px solid ${activePlan === i ? 'var(--accent)' : 'var(--border)'}`,
              borderRadius: 'var(--radius-lg)',
              padding: 28, cursor: 'pointer',
              transition: 'border-color .2s',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)' }}>{plan.name}</div>
                <span style={{
                  fontSize: 11, padding: '2px 10px', borderRadius: 20,
                  background: 'rgba(200,151,63,0.1)', color: 'var(--accent)', fontWeight: 600,
                }}>{plan.tag}</span>
              </div>
              <div style={{ fontSize: 14, color: 'var(--text2)' }}>{plan.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
