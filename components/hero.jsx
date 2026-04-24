function FAQ() {
  const [open, setOpen] = React.useState(0);
  const qs = [
    {
      q: 'Where is this knife made?',
      a: 'The blade is forged using VG-10 steel from Takefu Special Steel Co. in Japan, with 67-layer Damascus cladding. The knife is assembled with a hand-finished rosewood octagonal handle. SHUIN is based in Tokyo and personally inspects quality before listing.',
    },
    {
      q: 'How is this only $75?',
      a: `Simple: we don't operate retail stores, carry large inventories, or sell through Amazon. By curating a single knife at a time and shipping direct, we pass the savings to you — without compromising on materials or finish.`,
    },
    {
      q: 'How long does shipping take?',
      a: `US orders typically arrive in 7–14 business days. We'll provide tracking as soon as your knife ships. Shipping rates vary by region and will be calculated at checkout.`,
    },
    {
      q: 'What is your return policy?',
      a: `We offer a 30-day satisfaction guarantee. If you're not completely happy, contact us for a full refund — we just ask that the knife returns in its original condition.`,
    },
    {
      q: 'Is this knife suitable for beginners?',
      a: 'Absolutely. The Santoku is the most popular knife type in Japanese home kitchens for a reason — its flat edge and compact size make it intuitive for slicing, dicing, and chopping. No rocking technique required.',
    },
    {
      q: 'Can left-handed users use this knife?',
      a: 'Yes. The blade has a symmetrical double bevel (sharpened equally on both sides), and the octagonal handle is ambidextrous by design.',
    },
  ];

  return (
    <section id="faq" style={{ padding: '140px 0' }}>
      <div className="wrap" style={{ maxWidth: 820 }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="label" style={{ marginBottom: 20, display: 'inline-block' }}>FAQ</div>
          <h2 className="serif" style={{ fontSize: 'clamp(38px, 4.2vw, 58px)' }}>
            Common <em>Questions.</em>
          </h2>
        </div>
        <div>
          {qs.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderTop: '1px solid var(--line)' }}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width: '100%',
                    padding: '28px 4px',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--ink)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 21,
                    fontWeight: 500,
                    letterSpacing: '-0.005em',
                    transition: 'color .25s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#d94f3b'}
                  onMouseLeave={e => e.currentTarget.style.color = isOpen ? '#d94f3b' : 'var(--ink)'}
                >
                  <span style={{ color: isOpen ? 'var(--accent)' : 'inherit' }}>{it.q}</span>
                  <span style={{
                    fontSize: 24,
                    color: 'var(--accent)',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 200,
                    transition: 'transform .35s cubic-bezier(.2,.8,.2,1)',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                    display: 'inline-block',
                  }}>+</span>
                </button>
                <div style={{
                  maxHeight: isOpen ? 400 : 0,
                  opacity: isOpen ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all .45s cubic-bezier(.2,.8,.2,1)',
                }}>
                  <p style={{
                    padding: '0 4px 32px',
                    color: 'var(--ink-dim)',
                    fontSize: 15,
                    lineHeight: 1.85,
                    maxWidth: 680,
                  }}>{it.a}</p>
                </div>
              </div>
            );
          })}
          <div style={{ borderBottom: '1px solid var(--line)' }} />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { FAQ });
