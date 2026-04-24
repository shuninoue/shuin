function Care() {
  const items = [
    { jp: '洗', title: 'Hand wash, dry at once', body: 'Warm water, soft sponge. Never the dishwasher.' },
    { jp: '板', title: 'Wood or soft plastic boards', body: 'Avoid glass, stone, or ceramic — they dull the edge.' },
    { jp: '研', title: 'Sharpen at 15° on a whetstone', body: 'Every 3–6 months of regular use keeps it keen.' },
    { jp: '蔵', title: 'Store in a saya or magnetic strip', body: 'Never loose in a drawer. Protect the edge.' },
  ];
  return (
    <section style={{
      padding: '140px 0',
      background:
        'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 220, 180, 0.06), transparent 65%),' +
        'var(--bg-1)',
    }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="label" style={{ marginBottom: 20, display: 'inline-block' }}>Knife Care</div>
          <h2 className="serif" style={{ fontSize: 'clamp(38px, 4.2vw, 58px)', marginBottom: 14 }}>
            Simple to <em>Maintain.</em>
          </h2>
          <div className="jp" style={{ fontSize: 12, letterSpacing: '0.4em', color: 'var(--ink-sub)' }}>
            お 手 入 れ
          </div>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
        }} className="care-grid">
          {items.map((it, i) => (
            <div key={i} style={{
              padding: '36px 28px',
              border: '1px solid var(--line)',
              position: 'relative',
              textAlign: 'left',
            }}>
              <div className="jp" style={{
                fontSize: 48,
                color: 'var(--accent)',
                opacity: 0.85,
                lineHeight: 1,
                marginBottom: 20,
                fontWeight: 500,
              }}>{it.jp}</div>
              <div style={{
                fontSize: 9,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: 'var(--ink-sub)',
                marginBottom: 10,
              }}>— 0{i+1}</div>
              <div className="serif" style={{ fontSize: 20, fontWeight: 500, color: 'var(--ink)', marginBottom: 10, lineHeight: 1.25 }}>
                {it.title}
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-dim)', lineHeight: 1.7 }}>
                {it.body}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .care-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .care-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

Object.assign(window, { Care });
