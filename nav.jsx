function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      paddingTop: 80,
    }}>
      {/* Background image — knife clearly visible */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url('assets/hero-bg-v3.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
      }} />
      {/* Right-side darkening for text legibility */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(26,23,19,0.15) 0%, rgba(26,23,19,0.15) 40%, rgba(20,17,13,0.75) 75%, rgba(20,17,13,0.9) 100%)',
        zIndex: 1,
      }} />
      {/* Top sheen — warm light from above */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(255, 220, 170, 0.14), transparent 60%)',
        zIndex: 1,
        mixBlendMode: 'screen',
      }} />
      {/* Bottom fade into next section */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, transparent 65%, var(--bg-0) 100%)',
        zIndex: 1,
      }} />
      {/* Kanji watermark */}
      <div className="kanji-bg" style={{
        position: 'absolute',
        top: '50%',
        right: '3%',
        transform: 'translateY(-50%)',
        fontSize: 'clamp(260px, 36vw, 520px)',
        zIndex: 1,
        color: 'rgba(192, 57, 43, 0.06)',
      }}>朱印</div>

      {/* Content — right aligned to let the knife image breathe on the left */}
      <div className="wrap" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div style={{ maxWidth: 620, marginLeft: 'auto' }} className="hero-content">
          <div style={{ display: 'flex', marginBottom: 28 }}>
            <SealLogo size={64} label={false} />
          </div>
          <div className="label" style={{ marginBottom: 22 }}>
            Curated in Tokyo · Shipped from Japan
          </div>
          <h1 className="serif" style={{
            fontSize: 'clamp(44px, 6.2vw, 88px)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            marginBottom: 32,
            lineHeight: 1.02,
            textWrap: 'balance',
          }}>
            The <em style={{ fontStyle: 'italic' }}>$180 knife.</em><br/>
            For $75.
          </h1>
          <p style={{
            maxWidth: 500,
            marginBottom: 44,
            color: 'var(--ink-dim)',
            fontSize: 'clamp(15px, 1.2vw, 17px)',
            lineHeight: 1.75,
          }}>
            67-layer VG-10 Damascus — the same steel found in Shun's Classic line.
            Vetted in Tokyo, shipped direct from Japan.{' '}
            <span style={{ color: 'var(--ink)' }}>No importer. No distributor. No retail markup.</span>
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 18 }}>
            <a href="#buy" className="btn">
              <span>Order — $75</span>
              <span className="arr">→</span>
            </a>
            <div style={{ fontSize: 11, color: 'var(--ink-sub)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Free US shipping · 30-day guarantee
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: -40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12,
          color: 'var(--ink-sub)',
          fontSize: 9,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
        }}>
          <span>scroll</span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--accent), transparent)', animation: 'scrolldown 2s ease-in-out infinite' }} />
        </div>
      </div>

      <style>{`
        @keyframes scrolldown {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          50.01% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        @media (max-width: 760px) {
          .hero-content { max-width: 100% !important; margin-left: 0 !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Hero });
