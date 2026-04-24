function Reviews() {
  const reviews = [
    {
      text: 'The tsuchime finish is the real thing — food falls off the blade. Sharper out of the box than anything I\'ve spent three times on.',
      name: 'Marcus T.',
      loc: 'Portland, OR',
    },
    {
      text: 'Felt skeptical at $75. Holding it, the fit and finish is genuinely on par with the Shun I replaced. The wa-handle makes long prep sessions actually comfortable.',
      name: 'Elena R.',
      loc: 'Brooklyn, NY',
    },
    {
      text: 'I cook professionally. Bought one for home use and ended up ordering a second for the restaurant. That should tell you everything.',
      name: 'Hiro K.',
      loc: 'Los Angeles, CA',
    },
  ];

  return (
    <section style={{ padding: '140px 0', position: 'relative' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="label" style={{ marginBottom: 20, display: 'inline-block' }}>Testimonials</div>
          <h2 className="serif" style={{ fontSize: 'clamp(38px, 4.2vw, 58px)', marginBottom: 14 }}>
            From Our Kitchen <em>to Yours.</em>
          </h2>
          <div className="jp" style={{ fontSize: 12, letterSpacing: '0.4em', color: 'var(--ink-sub)' }}>
            お 客 様 の 声
          </div>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }} className="rev-grid">
          {reviews.map((r, i) => (
            <div key={i} style={{
              padding: '36px 32px',
              background:
                'linear-gradient(180deg, rgba(255, 240, 220, 0.06) 0%, rgba(255, 240, 220, 0.015) 40%, rgba(232, 224, 214, 0.02) 100%)',
              border: '1px solid var(--line)',
              boxShadow:
                'inset 0 1px 0 rgba(255,240,220,0.14), inset 0 -1px 0 rgba(0,0,0,0.2), 0 20px 40px -24px rgba(0,0,0,0.5)',
              position: 'relative',
              transition: 'all .3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(207, 67, 48, 0.4)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--line)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              <div style={{
                position: 'absolute',
                top: -28, left: 20,
                fontSize: 84,
                fontFamily: "'Cormorant Garamond', serif",
                color: 'var(--accent)',
                lineHeight: 1,
                opacity: 0.5,
              }}>"</div>
              <div style={{ color: 'var(--accent)', letterSpacing: '0.2em', marginBottom: 18, fontSize: 14 }}>
                ★ ★ ★ ★ ★
              </div>
              <p style={{
                fontStyle: 'italic',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 19,
                lineHeight: 1.5,
                color: 'var(--ink)',
                marginBottom: 28,
                fontWeight: 400,
              }}>
                "{r.text}"
              </p>
              <div style={{ paddingTop: 16, borderTop: '1px solid var(--line)' }}>
                <div style={{ fontSize: 13, color: 'var(--ink)', fontWeight: 500, letterSpacing: '0.05em' }}>
                  {r.name}
                </div>
                <div style={{ fontSize: 10.5, color: 'var(--ink-sub)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 4 }}>
                  {r.loc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .rev-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

Object.assign(window, { Reviews });
