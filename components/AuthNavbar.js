'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createClient } from '../lib/supabase/client';
import { nav } from '../data/content';

export default function Navbar() {
  const supabase = createClient();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(13,13,13,0.88)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <nav style={{
        maxWidth: 1280, margin: '0 auto',
        padding: '0 5vw', height: 66,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, background: 'var(--accent)',
            borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)',
            fontSize: 18, fontWeight: 700, color: '#000',
          }}>ق</div>
          <span style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)' }}>
            {nav.brand}
          </span>
        </Link>

        {/* Nav links */}
        <ul style={{ display: 'flex', gap: 28, listStyle: 'none' }}>
          {nav.links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} style={{ fontSize: 15, color: 'var(--text2)' }}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth actions */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {!loading && (
            user ? (
              /* Logged in → show dashboard link + avatar */
              <>
                <Link href="/dashboard" style={{
                  padding: '8px 18px', borderRadius: 8,
                  fontSize: 14, fontWeight: 600,
                  border: '1px solid var(--border2)',
                  color: 'var(--text2)',
                }}>لوحة التحكم</Link>
                <div style={{
                  width: 34, height: 34, borderRadius: '50%',
                  background: 'var(--accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, fontWeight: 700, color: '#000',
                }}>
                  {user.user_metadata?.full_name?.[0] || user.email?.[0]?.toUpperCase()}
                </div>
              </>
            ) : (
              /* Logged out → login + register */
              <>
                <Link href="/auth/login" style={{
                  padding: '8px 18px', borderRadius: 8,
                  fontSize: 14, fontWeight: 600,
                  border: '1px solid var(--border2)', color: 'var(--text2)',
                }}>
                  {nav.login}
                </Link>
                <Link href="/auth/register" style={{
                  padding: '8px 18px', borderRadius: 8,
                  fontSize: 14, fontWeight: 700,
                  background: 'var(--accent)', color: '#000',
                }}>
                  {nav.cta}
                </Link>
              </>
            )
          )}
        </div>
      </nav>
    </header>
  );
}
