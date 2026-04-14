export default function AuthAlert({ type = 'error', message }) {
  if (!message) return null;

  const styles = {
    error: {
      background: 'rgba(155,34,38,0.07)',
      border: '1px solid rgba(155,34,38,0.2)',
      color: '#9b2226',
    },
    success: {
      background: 'rgba(22,163,74,0.07)',
      border: '1px solid rgba(22,163,74,0.2)',
      color: '#15803d',
    },
    info: {
      background: 'rgba(155,34,38,0.05)',
      border: '1px solid rgba(155,34,38,0.15)',
      color: '#7a1a1d',
    },
  };

  const icons = { error: '⚠️', success: '✅', info: 'ℹ️' };

  return (
    <div style={{
      ...styles[type],
      borderRadius: 10,
      padding: '11px 15px',
      marginBottom: 20,
      fontSize: 14,
      lineHeight: 1.6,
      display: 'flex',
      alignItems: 'flex-start',
      gap: 9,
      fontFamily: '"IBM Plex Arabic", sans-serif',
    }}>
      <span style={{ flexShrink: 0, fontSize: 14, marginTop: 1 }}>{icons[type]}</span>
      <span>{message}</span>
    </div>
  );
}
