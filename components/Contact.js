'use client';

import { useState } from 'react';
import { contact } from '../data/content';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('شكراً! سنتواصل معك قريباً.');
  };

  const inputStyle = {
    width: '100%',
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: 10,
    padding: '12px 14px',
    fontSize: 14, color: 'var(--text)',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    textAlign: 'right',
    transition: 'border-color .2s',
  };

  return (
    <section id="contact" style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '96px 5vw',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 80, alignItems: 'start',
      }}>
        {/* Left: info */}
        <div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 3.5vw, 42px)',
            fontWeight: 700, color: 'var(--text)',
            lineHeight: 1.3, marginBottom: 20,
          }}>
            {contact.headline[0]}<br />{contact.headline[1]}
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text2)', lineHeight: 1.85, marginBottom: 36 }}>
            {contact.desc}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {contact.details.map((d, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '16px 20px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 12,
              }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 12,
                  background: 'rgba(200,151,63,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, flexShrink: 0,
                }}>{d.icon}</div>
                <div>
                  <div style={{ fontSize: 12, color: 'var(--text3)', marginBottom: 3 }}>{d.label}</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)' }}>{d.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-xl)',
          padding: 40,
        }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)', marginBottom: 28 }}>
            {contact.formTitle}
          </div>
          <form onSubmit={handleSubmit}>
            {contact.fields.map((field) => (
              <div key={field.label} style={{ marginBottom: 16 }}>
                <label style={{
                  display: 'block', fontSize: 13, fontWeight: 600,
                  color: 'var(--text2)', marginBottom: 7,
                }}>{field.label}</label>
                <input
                  type={field.type}
                  name={field.label === 'الاسم' ? 'name' : 'email'}
                  placeholder={field.placeholder}
                  value={field.label === 'الاسم' ? form.name : form.email}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
            ))}
            <div style={{ marginBottom: 16 }}>
              <label style={{
                display: 'block', fontSize: 13, fontWeight: 600,
                color: 'var(--text2)', marginBottom: 7,
              }}>{contact.messageLabel}</label>
              <textarea
                name="message"
                placeholder={contact.messagePlaceholder}
                value={form.message}
                onChange={handleChange}
                style={{ ...inputStyle, minHeight: 100, resize: 'vertical' }}
              />
            </div>
            <button type="submit" style={{
              width: '100%', padding: 13, borderRadius: 10,
              fontSize: 15, fontWeight: 700,
              background: 'var(--accent)', color: '#000',
              border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              transition: 'background .2s',
              marginTop: 8,
            }}>{contact.submit}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
