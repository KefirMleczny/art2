/* ArtPUFF — shared atoms (icons, helpers) */

const ICONS = {
  arrow: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  ),
  web: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="4" width="19" height="15" rx="2.2"/>
      <path d="M2.5 8h19"/>
      <circle cx="5.5" cy="6" r="0.6" fill="currentColor"/>
      <circle cx="7.8" cy="6" r="0.6" fill="currentColor"/>
      <circle cx="10.1" cy="6" r="0.6" fill="currentColor"/>
      <path d="M7 12h10M7 15h6"/>
    </svg>
  ),
  social: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/>
      <circle cx="9" cy="11.5" r="1" fill="currentColor"/>
      <circle cx="13" cy="11.5" r="1" fill="currentColor"/>
      <circle cx="17" cy="11.5" r="1" fill="currentColor"/>
    </svg>
  ),
  photo: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2.2"/>
      <circle cx="9" cy="11" r="2.2"/>
      <path d="m21 16-4-4-7 7"/>
      <path d="M18 7.5h.01"/>
    </svg>
  ),
  brush: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.06 11.94 17 4l3 3-7.94 7.94"/>
      <path d="M12 14c-2 1-3 3-3 5 0 1-1 2-2 2-1 0-2-1-2-2 0-3 2-6 5-7"/>
    </svg>
  ),
  sparkle: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 13.8 9.2 21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8z"/>
    </svg>
  ),
  facebook: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.6V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4v2.7H7.6V14h2.7v8h3.2z"/></svg>
  ),
  instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
  ),
  mail: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>
  ),
  check: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L20 6.5"/></svg>
  ),
};

const IMAGE_META = {
  'assets/artpuff-logo-full.png': { width: 500, height: 300, widths: [250, 500] },
  'assets/artpuff-logo-nav.png': { width: 464, height: 254, widths: [156, 232] },
  'assets/artpuff-logo.png': { width: 180, height: 180, widths: [128, 180] },
  'assets/artpuff-wordmark.png': { width: 1110, height: 280, widths: [555, 1110] },
  'assets/lazienka-after.png': { width: 440, height: 550, widths: [360, 440] },
  'assets/lazienka-before.png': { width: 440, height: 550, widths: [360, 440] },
  'assets/portfolio-agroturystyka.png': { width: 800, height: 1000, widths: [480, 800] },
  'assets/portfolio-boho.png': { width: 800, height: 1000, widths: [480, 800] },
  'assets/portfolio-kaszubska.png': { width: 1024, height: 1536, widths: [360, 480] },
  'assets/portfolio-myhome.png': { width: 800, height: 1000, widths: [480, 800] },
  'assets/portfolio-terminarz.png': { width: 800, height: 1000, widths: [480, 800] },
  'assets/service-korekta.png': { width: 1080, height: 1080, widths: [240, 360, 480] },
  'assets/service-post.png': { width: 1080, height: 1080, widths: [240, 360, 480] },
  'assets/service-www.png': { width: 1080, height: 1080, widths: [240, 360, 480] },
};

function webpPath(src, width) {
  const suffix = width && IMAGE_META[src]?.width !== width ? `-${width}` : '';
  return src.replace(/\.png$/, `${suffix}.webp`);
}

function OptimizedImage({
  src,
  alt,
  className,
  loading = 'lazy',
  sizes = '(max-width: 700px) 92vw, 420px',
  ...props
}) {
  const meta = IMAGE_META[src] || {};
  const widths = meta.widths || [];
  const srcSet = widths.length
    ? widths.map((width) => `${webpPath(src, width)} ${width}w`).join(', ')
    : undefined;

  return (
    <img
      src={webpPath(src)}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      width={meta.width}
      height={meta.height}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      {...props}
    />
  );
}

/* Hook for IntersectionObserver-based scroll reveal */
function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* Hook for nav scroll state */
function useNavScroll() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return scrolled;
}

/* Decorative SVG paint stroke */
function PaintStroke({ className, style, color = "#ff2d7e" }) {
  return (
    <svg className={className} style={style} width="600" height="120" viewBox="0 0 600 120" fill="none">
      <path d="M10 70 C 120 20, 220 110, 340 60 S 540 30, 590 70" stroke={color} strokeWidth="22" strokeLinecap="round" opacity="0.5" filter="url(#blur1)"/>
      <path d="M10 70 C 120 20, 220 110, 340 60 S 540 30, 590 70" stroke={color} strokeWidth="6" strokeLinecap="round"/>
      <defs>
        <filter id="blur1"><feGaussianBlur stdDeviation="6"/></filter>
      </defs>
    </svg>
  );
}

/* generated colorful art for portfolio placeholders */
function WorkArt({ seed, cat }) {
  // seed -> deterministic gradient
  const palettes = [
    ['#ff2d7e', '#ff7a1f', '#ffc93d'],
    ['#2dd4ef', '#3a78ff', '#b855ff'],
    ['#ff7a1f', '#ffc93d', '#ff2d7e'],
    ['#3a78ff', '#b855ff', '#ff2d7e'],
    ['#2dd4ef', '#3a78ff', '#0a0908'],
    ['#ffc93d', '#ff7a1f', '#b855ff'],
  ];
  const p = palettes[seed % palettes.length];

  if (cat === 'web') {
    return (
      <div className="work-art" style={{
        background: `linear-gradient(135deg, ${p[2]}22, ${p[0]}10), #0d0b0a`
      }}>
        <svg width="100%" height="100%" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id={`wg-${seed}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={p[0]}/><stop offset="0.5" stopColor={p[1]}/><stop offset="1" stopColor={p[2]}/>
            </linearGradient>
          </defs>
          <rect x="40" y="60" width="320" height="380" rx="14" fill="#15120f" stroke="rgba(255,255,255,0.06)"/>
          <rect x="40" y="60" width="320" height="36" rx="14" fill="#0d0b0a"/>
          <circle cx="60" cy="78" r="4" fill="#ff5f57"/><circle cx="76" cy="78" r="4" fill="#febc2e"/><circle cx="92" cy="78" r="4" fill="#28c840"/>
          <rect x="60" y="120" width="180" height="14" rx="3" fill={p[0]}/>
          <rect x="60" y="142" width="240" height="14" rx="3" fill="#fff" opacity="0.85"/>
          <rect x="60" y="164" width="140" height="14" rx="3" fill="#fff" opacity="0.5"/>
          <rect x="60" y="200" width="280" height="120" rx="10" fill={`url(#wg-${seed})`}/>
          <rect x="60" y="336" width="80" height="28" rx="14" fill={p[1]}/>
          <rect x="148" y="336" width="80" height="28" rx="14" fill="none" stroke="#fff" strokeOpacity="0.3"/>
          <rect x="60" y="384" width="130" height="42" rx="6" fill="#0d0b0a" stroke="rgba(255,255,255,0.08)"/>
          <rect x="200" y="384" width="130" height="42" rx="6" fill="#0d0b0a" stroke="rgba(255,255,255,0.08)"/>
        </svg>
      </div>
    );
  }
  if (cat === 'social') {
    return (
      <div className="work-art" style={{ background: `#0d0b0a` }}>
        <svg width="100%" height="100%" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id={`sg-${seed}`} cx="0.5" cy="0.5" r="0.7">
              <stop offset="0" stopColor={p[0]}/><stop offset="0.6" stopColor={p[1]}/><stop offset="1" stopColor="#0d0b0a"/>
            </radialGradient>
          </defs>
          <rect width="400" height="500" fill={`url(#sg-${seed})`}/>
          <g opacity="0.9">
            <path d="M -20 380 Q 120 260, 240 360 T 440 320" stroke={p[2]} strokeWidth="48" fill="none" strokeLinecap="round" opacity="0.55"/>
            <path d="M -20 380 Q 120 260, 240 360 T 440 320" stroke="#fff" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.6"/>
          </g>
          <text x="40" y="180" fill="#fff" fontFamily="Bricolage Grotesque" fontSize="62" fontWeight="800" letterSpacing="-2">SALE</text>
          <text x="40" y="240" fill="#fff" fontFamily="Bricolage Grotesque" fontSize="28" fontWeight="600" opacity="0.85">-40%</text>
          <circle cx="320" cy="120" r="46" fill={p[2]}/>
          <text x="320" y="130" fill="#0a0908" fontFamily="Bricolage Grotesque" fontSize="22" fontWeight="800" textAnchor="middle">NEW</text>
        </svg>
      </div>
    );
  }
  if (cat === 'photo') {
    return (
      <div className="work-art" style={{ background: '#0d0b0a' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id={`pgB-${seed}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#3a2515"/><stop offset="0.6" stopColor="#1a1410"/><stop offset="1" stopColor="#0d0b0a"/>
            </linearGradient>
            <linearGradient id={`pgA-${seed}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={p[0]} stopOpacity="0.6"/><stop offset="1" stopColor={p[2]} stopOpacity="0.2"/>
            </linearGradient>
          </defs>
          <rect width="200" height="500" fill={`url(#pgB-${seed})`}/>
          <rect x="200" width="200" height="500" fill={`url(#pgA-${seed})`}/>
          {/* room silhouette */}
          <path d="M0 360 L60 320 L140 340 L200 300 L200 500 L0 500 Z" fill="#0a0908"/>
          <path d="M200 300 L260 340 L340 320 L400 360 L400 500 L200 500 Z" fill="#0a0908" opacity="0.6"/>
          <rect x="40" y="200" width="56" height="84" fill="#fff" opacity="0.06"/>
          <rect x="240" y="180" width="64" height="100" fill={p[1]} opacity="0.6"/>
          <line x1="200" y1="0" x2="200" y2="500" stroke="#fff" strokeWidth="2" strokeDasharray="6 6" opacity="0.55"/>
          <g transform="translate(186, 240)">
            <rect width="28" height="20" rx="4" fill="#fff"/>
            <text x="14" y="14" fill="#0a0908" fontFamily="Inter" fontSize="11" fontWeight="700" textAnchor="middle">BEF/AFT</text>
          </g>
        </svg>
      </div>
    );
  }
  // ad
  return (
    <div className="work-art" style={{ background: '#0d0b0a' }}>
      <svg width="100%" height="100%" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`ag-${seed}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={p[0]}/><stop offset="0.5" stopColor={p[1]}/><stop offset="1" stopColor={p[2]}/>
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill={`url(#ag-${seed})`}/>
        <circle cx="80" cy="100" r="60" fill="#fff" opacity="0.15"/>
        <circle cx="340" cy="420" r="100" fill="#0a0908" opacity="0.25"/>
        <text x="40" y="240" fill="#0a0908" fontFamily="Bricolage Grotesque" fontSize="64" fontWeight="900" letterSpacing="-3">DZIŚ</text>
        <text x="40" y="300" fill="#0a0908" fontFamily="Caveat Brush" fontSize="86" letterSpacing="-1">otwarte!</text>
        <rect x="40" y="380" width="160" height="44" rx="22" fill="#0a0908"/>
        <text x="120" y="408" fill="#fff" fontFamily="Inter" fontSize="14" fontWeight="700" textAnchor="middle">REZERWUJ</text>
      </svg>
    </div>
  );
}

Object.assign(window, { ICONS, useReveal, useNavScroll, PaintStroke, WorkArt });
