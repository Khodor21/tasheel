'use client';

import { useState } from 'react';
import Link from 'next/link';
import { faq } from '../data/content';

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'right',
          padding: '20px 0',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 12,
          fontSize: 15, fontWeight: 600, color: open ? 'var(--accent)' : 'var(--text)',
          background: 'transparent', border: 'none',
          cursor: 'pointer', transition: 'color .2s',
          fontFamily: 'var(--font-body)',
        }}
      >
        {item.q}
        <span style={{
          fontSize: 18, color: 'var(--text3)',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform .3s', flexShrink: 0,
        }}>⌄</span>
      </button>
      {open && (
        <div style={{
          fontSize: 14, color: 'var(--text2)',
          lineHeight: 1.85, paddingBottom: 16,
        }}>
          {item.a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" style={{
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      padding: '96px 5vw',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 2fr',
        gap: 80, alignItems: 'start',
      }}>
        {/* Left */}
        <div>
          <span className="eyebrow">{faq.eyebrow}</span>
          <h2 className="section-title">{faq.title}</h2>
          <p className="section-sub" style={{ marginTop: 14, marginBottom: 28 }}>{faq.sub}</p>
          <Link href="#contact" className="btn-primary">{faq.cta}</Link>
        </div>

        {/* Right: accordion */}
        <div>
          {faq.items.map((item, i) => <FaqItem key={i} item={item} />)}
        </div>
      </div>
    </section>
  );
}
