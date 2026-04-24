function Buy() {
  return (
    <section id="buy" style={{
      position: 'relative',
      padding: '160px 0',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse at center, rgba(192, 57, 43, 0.12) 0%, var(--bg-0) 55%)',
    }}>
      {/* Background product ghost */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: "url('assets/package-dark.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.85,
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, var(--bg-0), transparent 25%, transparent 75%, var(--bg-0))',
      }} />

      {/* Kanji watermark */}
      <div className="kanji-bg" style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 'clamp(260px, 36vw, 520px)',
        color: 'rgba(192, 57, 43, 0.06)',
      }}>
        朱
      </div>

      <div className="wrap" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
          <SealLogo size={64} label={false} />
        </div>
        <div className="label" style={{ marginBottom: 20, display: 'inline-block' }}>Order</div>
        <h2 className="serif" style={{ fontSize: 'clamp(40px, 4.8vw, 66px)', marginBottom: 22 }}>
          Ready to Elevate <em>Your Kitchen?</em>
        </h2>
        <p style={{ color: 'var(--ink-dim)', fontSize: 16, maxWidth: 540, margin: '0 auto 56px', lineHeight: 1.8 }}>
          The SHUIN Santoku — 67-layer VG-10 Damascus,
          hand-hammered tsuchime finish, rosewood octagonal handle.
          Delivered from Japan.
        </p>

        <div style={{
          maxWidth: 460,
          margin: '0 auto',
          padding: '40px 36px',
          background:
            'linear-gradient(180deg, rgba(255, 240, 220, 0.08) 0%, rgba(255, 240, 220, 0.02) 30%, rgba(232, 224, 214, 0.02) 100%)',
          border: '1px solid var(--line-strong)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          boxShadow:
            'inset 0 1px 0 rgba(255,240,220,0.18), inset 0 -1px 0 rgba(0,0,0,0.2), 0 30px 80px -30px rgba(0,0,0,0.6)',
          position: 'relative',
        }}>
          {/* Corner ticks */}
          {[
            { t: 0, l: 0, b: 'auto', r: 'auto', rot: 0 },
            { t: 0, l: 'auto', b: 'auto', r: 0, rot: 90 },
            { t: 'auto', l: 0, b: 0, r: 'auto', rot: -90 },
            { t: 'auto', l: 'auto', b: 0, r: 0, rot: 180 },
          ].map((c, i) => (
            <div key={i} style={{
              position: 'absolute',
              top: c.t, left: c.l, bottom: c.b, right: c.r,
              width: 14, height: 14,
              borderTop: '1px solid var(--accent)',
              borderLeft: '1px solid var(--accent)',
              transform: `rotate(${c.rot}deg)`,
            }} />
          ))}

          <div style={{ fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--ink-dim)', marginBottom: 10 }}>
            SHUIN · Santoku · 180 mm
          </div>
          <div className="serif" style={{ fontSize: 84, fontWeight: 600, color: 'var(--ink)', lineHeight: 1, marginBottom: 10, letterSpacing: '-0.02em' }}>
            <span style={{ fontSize: 32, color: 'var(--ink-dim)', verticalAlign: 'top', marginRight: 4, fontWeight: 400 }}>$</span>75
          </div>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--ink-sub)', marginBottom: 32, textTransform: 'uppercase' }}>
            One-time purchase
          </div>
          <a href="#buy" className="btn" style={{ width: '100%', marginBottom: 28 }}>
            <span>Add to Cart</span>
            <span className="arr">→</span>
          </a>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 12, color: 'var(--ink-dim)', textAlign: 'left' }}>
            {['Free US shipping', '30-day returns', 'Ships direct from Japan'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ color: 'var(--accent)', fontSize: 8 }}>●</span>
                <span style={{ letterSpacing: '0.04em' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Buy });
