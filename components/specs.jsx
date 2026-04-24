function Philosophy() {
  return (
    <section id="philosophy" style={{ padding: '140px 0 120px', position: 'relative' }}>
      <div className="wrap">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 1fr',
          gap: 88,
          alignItems: 'start',
        }} className="phil-grid">
          {/* Left: text - 3段構成 */}
          <div>
            <div className="label eyebrow-line" style={{ marginBottom: 32 }}>
              <span>Why We Exist</span>
            </div>
            <h2 className="serif" style={{
              fontSize: 'clamp(40px, 4.6vw, 64px)',
              marginBottom: 44,
              lineHeight: 1.05,
            }}>
              One Knife.<br/>
              <em>Zero Markup.</em>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28, color: 'var(--ink-dim)', fontSize: 15.5, lineHeight: 1.85, maxWidth: 540 }}>
              {/* 段落1 — 問題提起 */}
              <p>
                There are two types of "Japanese knives" sold online.
              </p>
              <p>
                The first costs $30 and ships from a warehouse in Shenzhen.
                The listing says "Japanese Damascus steel." The steel is not
                from Japan. The Damascus pattern is acid-etched, not forged.
              </p>
              <p>
                The second costs $200 from a curated shop in the US or Europe.
                The steel is real. The craft is real. But so is the 3× markup
                from importers, distributors, and retail overhead.
              </p>

              {/* 段落2 — 解決策 */}
              <p style={{ marginTop: 12, color: 'var(--ink)', fontSize: 16.5, lineHeight: 1.75 }}>
                Shuin exists in the space between.
              </p>
              <p>
                <strong style={{ color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.01em' }}>Based in Tokyo</strong>,
                we evaluate knives the way a sommelier evaluates wine — not
                by the label, but by what's inside. Every knife uses verified
                VG-10 steel from Takefu Special Steel, clad in 67 layers of
                genuine Damascus.
              </p>

              {/* 段落3 — 価格の理由 */}
              <p>
                By focusing on a single knife and shipping direct from Japan,
                we eliminate every cost that doesn't make the blade sharper.
              </p>
              <p style={{
                fontStyle: 'italic',
                color: 'var(--ink)',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 20,
                lineHeight: 1.55,
                borderLeft: '2px solid var(--accent)',
                paddingLeft: 22,
                marginTop: 4,
                fontWeight: 400,
              }}>
                The result: the same steel found in $180 knives,<br/>
                delivered for $75.
              </p>
            </div>
          </div>

          {/* Right: image with red offset frame */}
          <div style={{ position: 'relative', aspectRatio: '4/5', marginTop: 24 }}>
            <div style={{
              position: 'absolute',
              top: -18, left: -18,
              width: '100%', height: '100%',
              border: '1px solid var(--accent)',
              zIndex: 0,
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: "url('assets/handle-detail.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 1,
            }} />
            <div style={{
              position: 'absolute',
              bottom: 20, right: 20,
              background: 'rgba(10, 10, 8, 0.85)',
              backdropFilter: 'blur(8px)',
              padding: '10px 16px',
              fontSize: 9.5,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              fontWeight: 500,
              zIndex: 2,
            }}>
              Curated in Tokyo
            </div>
            <div style={{
              position: 'absolute',
              top: 24, right: -34,
              writingMode: 'vertical-rl',
              fontFamily: "'Shippori Mincho', serif",
              fontSize: 13,
              letterSpacing: '0.4em',
              color: 'var(--ink-dim)',
              zIndex: 2,
            }}>
              八角・紫檀
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .phil-grid { grid-template-columns: 1fr !important; gap: 64px !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Philosophy });
