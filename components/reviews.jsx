function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0,
    zIndex: 100,
    padding: '18px 48px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    transition: 'all .4s cubic-bezier(.2,.8,.2,1)',
    background: scrolled ? 'rgba(10, 10, 8, 0.72)' : 'transparent',
    backdropFilter: scrolled ? 'blur(18px) saturate(1.3)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(18px) saturate(1.3)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(232, 224, 214, 0.06)' : '1px solid transparent',
  };

  return (
    <nav style={navStyle}>
      <SealLogo size={40} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        <div className="desktop-only" style={{ display: 'flex', gap: 34 }}>
          {[
            ['Craft', '#philosophy'],
            ['Specs', '#specs'],
            ['Compare', '#compare'],
            ['FAQ', '#faq'],
          ].map(([t, h]) => (
            <a key={h} href={h} style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: '#e8e0d6',
              textDecoration: 'none',
              opacity: 0.85,
              transition: 'all .25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#d94f3b'; e.currentTarget.style.opacity = 1; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#e8e0d6'; e.currentTarget.style.opacity = 0.85; }}
            >{t}</a>
          ))}
        </div>
        <a href="#buy" className="btn-ghost">Order — $75</a>
      </div>
      <style>{`@media (max-width: 860px) { .desktop-only { display: none !important; } nav { padding: 14px 24px !important; } }`}</style>
    </nav>
  );
}

Object.assign(window, { Nav });
