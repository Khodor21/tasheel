export default function AuthButton({ children, loading, disabled }) {
  return (
    <button
      type="submit"
      disabled={loading || disabled}
      style={{
        width: '100%',
        padding: '13px',
        borderRadius: 10,
        fontSize: 15,
        fontWeight: 700,
        background: loading || disabled ? 'rgba(155,34,38,0.45)' : 'var(--primary)',
        color: '#fff',
        border: 'none',
        cursor: loading || disabled ? 'not-allowed' : 'pointer',
        fontFamily: '"IBM Plex Arabic", sans-serif',
        transition: 'background .2s, opacity .2s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        letterSpacing: '0.01em',
      }}
    >
      {loading && (
        <span style={{
          width: 17, height: 17,
          border: '2px solid rgba(255,255,255,0.35)',
          borderTopColor: '#fff',
          borderRadius: '50%',
          display: 'inline-block',
          animation: 'spin 0.7s linear infinite',
          flexShrink: 0,
        }} />
      )}
      {loading ? 'جاري التحميل...' : children}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </button>
  );
}
