function Compare() {
  // cols: [feature, SHUIN, Shun Classic, Generic Amazon]
  const rows = [
    { feature: 'Core Steel',      shuin: 'VG-10 (Takefu)',    shun: 'VG-MAX (proprietary)', cheap: 'Unspecified stainless' },
    { feature: 'Damascus',        shuin: '67 forged layers',  shun: '68 forged layers',     cheap: 'Acid-etched pattern*' },
    { feature: 'Handle',          shuin: 'Rosewood, octagonal', shun: 'Pakkawood, D-shape', cheap: 'Plastic / dyed resin' },
    { feature: 'Finish',          shuin: 'Hand-hammered (tsuchime)', shun: 'Machine-polished', cheap: 'Machine-polished' },
    { feature: 'Edge Angle',      shuin: '15° per side',      shun: '16° per side',         cheap: '12°–20° (inconsistent)' },
    { feature: 'Forged & Finished', shuin: 'Japan (Seki)',    shun: 'Japan (Seki)',         cheap: 'China (often mislabeled)' },
    { feature: 'Ships From',      shuin: 'Tokyo — direct',    shun: 'US warehouse',         cheap: 'Shenzhen' },
    { feature: 'Price',           shuin: '$75',               shun: '$180',                 cheap: '$30–$60' },
  ];

  const headStyle = (opts = {}) => ({
    padding: '20px 18px',
    textAlign: 'left',
    fontSize: 10,
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    fontWeight: 500,
    borderBottom: '1px solid var(--line)',
    verticalAlign: 'bottom',
    ...opts,
  });

  return (
    <section id="compare" style={{
      padding: '140px 0',
      background:
        'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255, 220, 180, 0.05), transparent 60%),' +
        'var(--bg-0)',
      position: 'relative',
    }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: 60, maxWidth: 780, marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="label eyebrow-line" style={{ marginBottom: 22, justifyContent: 'center', display: 'inline-flex' }}>
            <span>Comparison</span>
          </div>
          <h2 className="serif" style={{ fontSize: 'clamp(38px, 4.6vw, 64px)', lineHeight: 1.05, marginBottom: 22 }}>
            Same steel as Shun.<br/>
            <em>Less than half the price.</em>
          </h2>
          <p style={{ color: 'var(--ink-dim)', fontSize: 15.5, lineHeight: 1.75 }}>
            Shun is the benchmark for Western-sold Japanese knives — and deservedly so.
            The reason we can match their blade for $75 isn't the steel. It's the supply chain.
          </p>
        </div>

        <div style={{ overflowX: 'auto', margin: '0 -8px', padding: '0 8px' }}>
          <table style={{
            width: '100%',
            minWidth: 820,
            borderCollapse: 'collapse',
            fontFamily: "'Outfit', sans-serif",
          }}>
            <thead>
              <tr>
                <th style={headStyle({ color: 'var(--ink-sub)' })}>Feature</th>

                {/* SHUIN column header — highlighted */}
                <th style={{
                  padding: '24px 20px 20px',
                  textAlign: 'left',
                  background: 'var(--accent)',
                  color: '#fff',
                  position: 'relative',
                  borderBottom: '1px solid var(--accent)',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: -11, left: 16,
                    fontSize: 9,
                    letterSpacing: '0.3em',
                    background: 'var(--bg-0)',
                    color: 'var(--accent)',
                    padding: '3px 10px',
                    border: '1px solid var(--accent)',
                    fontWeight: 500,
                  }}>OURS</div>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 22,
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    marginBottom: 2,
                  }}>SHUIN</div>
                  <div style={{ fontSize: 9.5, letterSpacing: '0.28em', textTransform: 'uppercase', opacity: 0.75 }}>
                    Tokyo-direct
                  </div>
                </th>

                {/* Shun column */}
                <th style={headStyle({ color: 'var(--ink-dim)' })}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 500, letterSpacing: '0.04em', color: 'var(--ink)', textTransform: 'none', marginBottom: 2 }}>
                    Shun <span style={{ fontSize: 12, opacity: 0.6 }}>Classic</span>
                  </div>
                  <div style={{ fontSize: 9.5, letterSpacing: '0.28em' }}>US-retail benchmark</div>
                </th>

                {/* Generic Amazon */}
                <th style={headStyle({ color: 'var(--ink-dim)' })}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 500, letterSpacing: '0.04em', color: 'var(--ink)', textTransform: 'none', marginBottom: 2 }}>
                    Amazon Generic
                  </div>
                  <div style={{ fontSize: 9.5, letterSpacing: '0.28em' }}>$30–$60 listings</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => {
                const isPrice = r.feature === 'Price';
                const isLast = i === rows.length - 1;
                return (
                  <tr key={i}>
                    <td style={{
                      padding: '20px 18px',
                      fontSize: 11,
                      color: 'var(--ink-sub)',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      fontWeight: 400,
                      borderBottom: isLast ? 'none' : '1px solid var(--line)',
                    }}>{r.feature}</td>

                    {/* SHUIN cell — bold, accent-tinted, boxed */}
                    <td style={{
                      padding: '20px 20px',
                      fontSize: isPrice ? 26 : 15,
                      color: 'var(--ink)',
                      fontWeight: 600,
                      letterSpacing: '0.005em',
                      fontFamily: isPrice ? "'Cormorant Garamond', serif" : "'Outfit', sans-serif",
                      background: 'rgba(192, 57, 43, 0.07)',
                      borderLeft: '1px solid rgba(192, 57, 43, 0.35)',
                      borderRight: '1px solid rgba(192, 57, 43, 0.35)',
                      borderBottom: isLast ? '1px solid var(--accent)' : '1px solid rgba(192, 57, 43, 0.15)',
                      position: 'relative',
                    }}>
                      {isPrice ? (
                        <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{r.shuin}</span>
                      ) : r.shuin}
                    </td>

                    {/* Shun cell */}
                    <td style={{
                      padding: '20px 18px',
                      fontSize: isPrice ? 22 : 14.5,
                      color: 'var(--ink-dim)',
                      fontWeight: 300,
                      fontFamily: isPrice ? "'Cormorant Garamond', serif" : 'inherit',
                      borderBottom: isLast ? 'none' : '1px solid var(--line)',
                      textDecoration: isPrice ? 'line-through' : 'none',
                      textDecorationColor: 'var(--ink-sub)',
                    }}>{r.shun}</td>

                    {/* Generic cell */}
                    <td style={{
                      padding: '20px 18px',
                      fontSize: isPrice ? 20 : 14.5,
                      color: 'var(--ink-sub)',
                      fontWeight: 300,
                      fontFamily: isPrice ? "'Cormorant Garamond', serif" : 'inherit',
                      borderBottom: isLast ? 'none' : '1px solid var(--line)',
                      fontStyle: isPrice ? 'normal' : 'normal',
                    }}>{r.cheap}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div style={{
          marginTop: 22, fontSize: 11, color: 'var(--ink-sub)', fontStyle: 'italic',
          letterSpacing: '0.02em', lineHeight: 1.7, maxWidth: 760,
        }}>
          *Many Amazon-listed "Damascus" knives use etched patterns rather than genuine forged layers.
          Shun pricing reflects the Classic 7" Santoku (DM0702) MSRP on the Kai USA website.
        </div>

        {/* Key differentiator callout */}
        <div style={{
          marginTop: 56,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }} className="diff-grid">
          {[
            { k: 'Identical', v: 'VG-10 core from Takefu Special Steel', note: 'The steel Shun uses in its standard lines' },
            { k: 'Removed', v: 'Importer + distributor + US retail margin', note: '~58% of what you pay at a US boutique' },
            { k: 'Added', v: 'Tokyo-based evaluator vets every batch', note: 'Shun ships volume; we ship verified units' },
          ].map((item, i) => (
            <div key={i} style={{
              padding: '28px 24px',
              background: 'var(--bg-1)',
              borderTop: '2px solid var(--accent)',
            }}>
              <div style={{ fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, marginBottom: 12 }}>
                {item.k}
              </div>
              <div className="serif" style={{ fontSize: 19, lineHeight: 1.3, color: 'var(--ink)', marginBottom: 10, fontWeight: 500 }}>
                {item.v}
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--ink-dim)', lineHeight: 1.6 }}>
                {item.note}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .diff-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Compare });
