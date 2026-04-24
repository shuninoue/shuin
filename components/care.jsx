function Anatomy() {
  const pieces = [
    { label: 'Blade Spine',   jp: '峰',  note: '2.2 mm thick' },
    { label: 'Damascus Clad', jp: '積層', note: '67 layers' },
    { label: 'VG-10 Core',    jp: '芯鋼', note: 'HRC 60 ± 2' },
    { label: 'Bolster',       jp: '口金', note: 'Stainless steel' },
    { label: 'Wa-Handle',     jp: '八角', note: 'Rosewood, octagonal' },
  ];
  return (
    <section style={{
      padding: '140px 0 160px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Giant kanji watermark */}
      <div className="kanji-bg" style={{
        position: 'absolute',
        top: '50%', left: '-6%',
        transform: 'translateY(-50%)',
        fontSize: 'clamp(280px, 40vw, 520px)',
        color: 'rgba(192, 57, 43, 0.05)',
        zIndex: 0,
      }}>解</div>

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="label" style={{ marginBottom: 20, display: 'inline-block' }}>Anatomy</div>
          <h2 className="serif" style={{ fontSize: 'clamp(40px, 4.6vw, 64px)', marginBottom: 14 }}>
            Every Detail, <em>Deliberate.</em>
          </h2>
          <div className="jp" style={{ fontSize: 13, letterSpacing: '0.4em', color: 'var(--ink-sub)' }}>
            構 造
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: 72,
          alignItems: 'center',
        }} className="anat-grid">
          {/* Left: list of anatomy parts */}
          <div>
            {pieces.map((p, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '44px 1fr auto',
                gap: 20,
                alignItems: 'baseline',
                padding: '24px 0',
                borderTop: '1px solid var(--line)',
              }}>
                <div className="serif" style={{
                  fontSize: 24, color: 'rgba(192,57,43,0.55)',
                  fontWeight: 500, letterSpacing: '-0.02em',
                }}>0{i+1}</div>
                <div>
                  <div className="jp" style={{
                    fontSize: 22, fontWeight: 500, color: 'var(--ink)', marginBottom: 2,
                    letterSpacing: '0.06em',
                  }}>{p.jp}</div>
                  <div style={{
                    fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase',
                    color: 'var(--ink-sub)',
                  }}>{p.label}</div>
                </div>
                <div style={{ fontSize: 12, color: 'var(--ink-dim)', letterSpacing: '0.06em' }}>
                  {p.note}
                </div>
              </div>
            ))}
            <div style={{ borderBottom: '1px solid var(--line)' }} />
          </div>

          {/* Right: big handle detail image */}
          <div style={{ position: 'relative' }}>
            <div style={{
              aspectRatio: '4/3',
              backgroundImage: "url('assets/handle-detail.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              border: '1px solid var(--line)',
            }}>
              {/* Corner ticks */}
              {[
                { t: -1, l: -1, rot: 0 },
                { t: -1, r: -1, rot: 90 },
                { b: -1, l: -1, rot: -90 },
                { b: -1, r: -1, rot: 180 },
              ].map((c, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  top: c.t, left: c.l, right: c.r, bottom: c.b,
                  width: 16, height: 16,
                  borderTop: '1px solid var(--accent)',
                  borderLeft: '1px solid var(--accent)',
                  transform: `rotate(${c.rot}deg)`,
                }} />
              ))}
              {/* Caption */}
              <div style={{
                position: 'absolute', bottom: 20, left: 20,
                display: 'flex', alignItems: 'center', gap: 10,
                fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase',
                color: 'var(--ink-dim)',
              }}>
                <span style={{ width: 24, height: 1, background: 'var(--accent)' }} />
                Rose Wood · Octagonal Grip
              </div>
            </div>
            {/* JP vertical caption outside */}
            <div style={{
              position: 'absolute', top: 24, right: -34,
              writingMode: 'vertical-rl',
              fontFamily: "'Shippori Mincho', serif",
              fontSize: 12,
              letterSpacing: '0.45em',
              color: 'var(--ink-dim)',
            }}>
              八角の握り
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .anat-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Anatomy });
