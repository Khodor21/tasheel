export default function StatCard({ icon, label, value }) {
  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: '20px 22px',
    }}>
      <div style={{ fontSize: 22, marginBottom: 10 }}>{icon}</div>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 28, fontWeight: 700,
        color: 'var(--accent)',
        lineHeight: 1, marginBottom: 6,
      }}>{value}</div>
      <div style={{ fontSize: 13, color: 'var(--text2)' }}>{label}</div>
    </div>
  );
}
