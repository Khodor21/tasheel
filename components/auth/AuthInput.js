'use client';

import { useState } from 'react';

export default function AuthInput({
  label,
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  required,
  autoComplete,
  hint,
}) {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div style={{ marginBottom: 18 }}>
      <label style={{
        display: 'block',
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--foreground)',
        marginBottom: 7,
        fontFamily: '"IBM Plex Arabic", sans-serif',
      }}>
        {label}
      </label>

      <div style={{ position: 'relative' }}>
        <input
          type={inputType}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            background: focused ? '#fff' : 'var(--background)',
            border: `1.5px solid ${focused ? 'var(--primary)' : 'var(--border)'}`,
            borderRadius: 10,
            padding: isPassword ? '12px 16px 12px 48px' : '12px 16px',
            fontSize: 15,
            color: 'var(--foreground)',
            fontFamily: '"IBM Plex Arabic", sans-serif',
            outline: 'none',
            textAlign: 'right',
            direction: 'rtl',
            transition: 'border-color .2s, background .2s',
          }}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              left: 14, top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: 15,
              color: 'var(--text3)',
              padding: 0,
              lineHeight: 1,
            }}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
      </div>

      {hint && (
        <p style={{
          fontSize: 12,
          color: 'var(--text3)',
          marginTop: 5,
          fontFamily: '"IBM Plex Arabic", sans-serif',
        }}>
          {hint}
        </p>
      )}
    </div>
  );
}
