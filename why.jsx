function Specs() {
  const specs = [
    { label: 'Steel',    value: 'VG-10 Core',   note: '67-layer Damascus cladding', jp: '鋼' },
    { label: 'Hardness', value: 'HRC 60 ± 2',   note: 'Long-lasting edge retention', jp: '硬度' },
    { label: 'Edge',     value: '15° per side', note: 'Double bevel, hand-sharpened', jp: '刃' },
    { label: 'Blade',    value: '7" / 180 mm',  note: 'Hammered tsuchime finish', jp: '身' },
    { label: 'Handle',   value: 'Rosewood',     note: 'Octagonal wa-handle', jp: '柄' },
    { label: 'Weight',   value: '168.5 g',      note: 'Balanced for control', jp: '重' },
  ];

  return (
    <section id="specs" style={{
      padding: '140px 0 140px',
      background:
        'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255, 220, 180, 0.07), transparent 60%),' +
        'linear-gradient(to bottom, var(--bg-0), var(--bg-1) 20%, var(--bg-1) 80%, var(--bg-0))',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle red gradient */}
      <div style={{
        position: 'absolute',
        top: '20%', left: '-10%',
        width: 640, height: 640,
        background: 'radial-gradient(circle, rgba(192, 57, 43, 0.08), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="label" style={{ marginBottom: 20, display: 'inline-block' }}>Specifications</div>
          <h2 className="serif" style={{
            fontSize: 'clamp(40px, 4.4vw, 62px)',
            marginBottom: 14,
          }}>
            Built to <em>Outperform.</em>
          </h2>
          <div className="jp" style={{ fontSize: 14, letterSpacing: '0.4em', color: 'var(--ink-sub)' }}>
            製 品 情 報
          </div>
        </div>

        {/* Hero product image: full blade */}
        <div style={{
          position: 'relative',
          height: 340,
          marginBottom: 72,
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
          background: '#0a0a08',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: "url('assets/knife-horizontal.jpg')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }} />
          {/* Subtle red wash */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 70% 50%, rgba(192,57,43,0.1), transparent 60%)',
          }} />
          {/* Dimension callouts with leader lines */}
          <div style={{
            position: 'absolute', top: 24, left: '50%', transform: 'translateX(-50%)',
            fontSize: 10, letterSpacing: '0.3em', color: 'var(--ink-dim)', textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span style={{ width: 40, height: 1, background: 'var(--line-strong)' }} />
            33.8 cm / 13.3 in
            <span style={{ width: 40, height: 1, background: 'var(--line-strong)' }} />
          </div>
          <div style={{ position: 'absolute', bottom: 24, left: 32, fontSize: 10, letterSpacing: '0.3em', color: 'var(--ink-dim)', textTransform: 'uppercase' }}>
            <span style={{ color: 'var(--accent)' }}>◉</span> &nbsp; 21 cm Blade
          </div>
          <div style={{ position: 'absolute', bottom: 24, right: 32, fontSize: 10, letterSpacing: '0.3em', color: 'var(--ink-dim)', textTransform: 'uppercase' }}>
            12.8 cm Handle &nbsp; <span style={{ color: 'var(--accent)' }}>◉</span>
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          border: '1px solid var(--line)',
        }} className="specs-grid">
          {specs.map((s, i) => (
            <div key={i} style={{
              padding: '36px 32px',
              borderRight: (i % 3 !== 2) ? '1px solid var(--line)' : 'none',
              borderBottom: i < 3 ? '1px solid var(--line)' : 'none',
              position: 'relative',
              transition: 'background .3s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(192, 57, 43, 0.03)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{
                position: 'absolute',
                top: 24, right: 24,
                fontFamily: "'Shippori Mincho', serif",
                fontSize: 24,
                color: 'rgba(192, 57, 43, 0.18)',
              }}>{s.jp}</div>
              <div style={{
                fontSize: 10,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: 12,
                fontWeight: 500,
              }}>— {s.label}</div>
              <div className="serif" style={{
                fontSize: 30,
                fontWeight: 500,
                color: 'var(--ink)',
                marginBottom: 6,
                lineHeight: 1.1,
              }}>{s.value}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-dim)', fontWeight: 300 }}>
                {s.note}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .specs-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .specs-grid > div { border-right: 1px solid var(--line) !important; border-bottom: 1px solid var(--line) !important; }
        }
        @media (max-width: 560px) {
          .specs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Specs });
