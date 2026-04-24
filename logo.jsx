function Footer() {
  return (
    <footer style={{
      padding: '60px 0 40px',
      borderTop: '1px solid var(--line)',
      background:
        'linear-gradient(180deg, var(--bg-0) 0%, #161310 100%)',
    }}>
      <div className="wrap" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 40,
        alignItems: 'center',
      }} className="footer-grid">
        <SealLogo size={36} />
        <div style={{
          textAlign: 'center',
          fontSize: 11,
          letterSpacing: '0.2em',
          color: 'var(--ink-sub)',
          textTransform: 'uppercase',
        }}>
          © 2026 SHUIN · Curated in Tokyo, Japan
        </div>
        <div style={{
          display: 'flex',
          gap: 28,
          justifyContent: 'flex-end',
          fontSize: 11,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}>
          {['Shipping', 'Returns', 'Contact'].map(t => (
            <a key={t} href="#" style={{ color: 'var(--ink-dim)', textDecoration: 'none', transition: 'color .2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-dim)'}>
              {t}
            </a>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .footer-grid { grid-template-columns: 1fr !important; text-align: center !important; gap: 24px !important; }
          .footer-grid > div:last-child { justify-content: center !important; }
        }
      `}</style>
    </footer>
  );
}

Object.assign(window, { Footer });
