/* SHUIN Seal Logo — 朱印 (literally "red seal"; the brand's core identity) */
function SealLogo({ size = 56, label = true, stacked = false }) {
  const s = size;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: stacked ? 0 : 14, flexDirection: stacked ? 'column' : 'row' }}>
      <div
        style={{
          position: 'relative',
          width: s, height: s,
          background: '#c0392b',
          color: '#f3ebdf',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.06), inset 0 0 0 1px rgba(0,0,0,0.12)',
          transform: 'rotate(-2deg)',
          fontFamily: "'Shippori Mincho', 'Noto Serif JP', serif",
        }}
      >
        {/* Inner double frame (typical of Japanese hanko/inkan) */}
        <div style={{
          position: 'absolute',
          inset: s * 0.08,
          border: '1px solid rgba(243, 235, 223, 0.55)',
          pointerEvents: 'none',
        }} />
        {/* 朱 character – carved into the seal */}
        <div style={{
          fontSize: s * 0.6,
          fontWeight: 700,
          color: '#f3ebdf',
          lineHeight: 1,
          marginTop: s * 0.02,
          fontFamily: "'Shippori Mincho', 'Noto Serif JP', serif",
        }}>朱</div>
        {/* grain overlay – ink smudge */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='2'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter><rect width='80' height='80' filter='url(%23n)' opacity='0.85'/></svg>\")",
          mixBlendMode: 'overlay',
          opacity: 0.5,
          pointerEvents: 'none',
        }} />
        {/* Ink bleed on edges */}
        <div style={{
          position: 'absolute', inset: -2,
          boxShadow: 'inset 0 0 6px rgba(80, 20, 14, 0.6)',
          pointerEvents: 'none',
        }} />
      </div>
      {label && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, marginTop: stacked ? 10 : 0, alignItems: stacked ? 'center' : 'flex-start' }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: stacked ? 26 : 20,
            fontWeight: 600,
            letterSpacing: '0.22em',
            color: '#e8e0d6',
          }}>SHUIN</div>
          <div style={{
            fontFamily: "'Shippori Mincho', serif",
            fontSize: 9.5,
            fontWeight: 400,
            letterSpacing: '0.36em',
            color: '#9a9a96',
            marginTop: 5,
          }}>朱印 · TOKYO</div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { SealLogo });
