/* ArtPUFF — Nav + Hero + Marquee */

function Nav() {
  const scrolled = useNavScroll();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navLinks = [
    ['#uslugi', 'Co robimy'],
    ['#portfolio', 'Realizacje'],
    ['#dlaczego', 'Dlaczego my'],
    ['#proces', 'Proces'],
    ['#cennik', 'Cennik'],
    ['#kontakt', 'Kontakt'],
  ];

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`} aria-label="Główna nawigacja">
      <div className="container nav-row">
        <a href="#top" className="nav-logo" aria-label="Art Puff — strona główna">
          <OptimizedImage
            src="assets/artpuff-logo-nav.png"
            alt="Art Puff"
            className="nav-logo-img"
            loading="eager"
            fetchPriority="high"
            sizes="156px"
          />
        </a>
        <div className="nav-links">
          {navLinks.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
        <div className="nav-actions">
          <a href="tel:+48516964726" className="nav-phone" aria-label="Zadzwoń: 516 964 726">
            <span className="nav-phone-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </span>
            <span className="nav-phone-text">
              <span className="nav-phone-label">Zadzwoń</span>
              <span className="nav-phone-number">516 964 726</span>
            </span>
          </a>
          <a href="#kontakt" className="btn btn-primary nav-cta">
            Napisz <span className="arrow">{ICONS.arrow}</span>
          </a>
          <button
            type="button"
            className="nav-menu-btn"
            aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(open => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className="container nav-mobile-wrap">
        <div className="nav-mobile-menu" id="mobile-menu">
          {navLinks.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a href="tel:+48516964726" onClick={() => setMenuOpen(false)}>Zadzwoń: 516 964 726</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero" id="top" data-screen-label="01 Hero">
      <span className="blob b1" aria-hidden="true"></span>
      <span className="blob b2" aria-hidden="true"></span>
      <span className="blob b3" aria-hidden="true"></span>
      <span className="blob b4" aria-hidden="true"></span>

      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="eyebrow hero-ready" style={{ marginBottom: 28 }}>
              <span>Kreatywne studio pomysłów · 2026</span>
            </div>
            <h1 className="h-display h1 hero-ready">
              <span className="word">Zamieniamy</span>{' '}
              <span className="paint">strony</span><span className="word">,</span>{' '}
              <span className="paint alt">posty</span>{' '}
              <span className="paint amp">i</span>{' '}
              <span className="paint">zdjęcia</span><br/>
              <span className="word">w wizualne</span>{' '}
              <span className="paint alt">magnesy</span><span className="word">,</span><br/>
              <span className="word">które zatrzymują uwagę i budują</span>{' '}
              <span className="paint">markę</span><span className="word">.</span>
            </h1>
            <p className="lead hero-ready" style={{ marginTop: 22 }}>
              ArtPUFF to kreatywne studio pomysłów dla marek, które chcą wyglądać profesjonalnie, świeżo i wyróżniać się w internecie.
            </p>
            <div className="hero-cta reveal" style={{ transitionDelay: '240ms' }}>
              <a href="#portfolio" className="btn btn-paint">
                Zobacz realizacje <span className="arrow" style={{ background: 'rgba(10,9,8,0.18)' }}>{ICONS.arrow}</span>
              </a>
              <a href="#kontakt" className="btn btn-ghost">
                Napisz do nas <span className="arrow">{ICONS.arrow}</span>
              </a>
            </div>
            <div className="hero-chips reveal" style={{ transitionDelay: '320ms' }}>
              <span className="chip"><span className="chip-dot" style={{ background: 'var(--magenta)' }}></span>Strony www</span>
              <span className="chip"><span className="chip-dot" style={{ background: 'var(--cyan)' }}></span>Posty na Facebooka</span>
              <span className="chip"><span className="chip-dot" style={{ background: 'var(--orange)' }}></span>Obróbka zdjęć</span>
              <span className="chip"><span className="chip-dot" style={{ background: 'var(--yellow)' }}></span>Grafiki reklamowe</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

function Marquee() {
  const items = [
    { t: 'STRONY WWW', c: 'var(--magenta)' },
    { t: 'SOCIAL MEDIA', c: 'var(--cyan)' },
    { t: 'OBRÓBKA ZDJĘĆ', c: 'var(--orange)' },
    { t: 'GRAFIKI REKLAMOWE', c: 'var(--yellow)' },
    { t: 'BRANDING', c: 'var(--blue)' },
    { t: 'POSTY FB', c: 'var(--purple)' },
  ];
  const loop = [...items, ...items];
  const rootRef = React.useRef(null);

  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    // Desktop only: skip on touch / coarse pointers
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mq.matches) return;

    const letters = Array.from(root.querySelectorAll('.mq-letter'));
    if (!letters.length) return;

    // Tunables — magnifying glass behaviour
    const RADIUS = 140;       // px — falloff radius around cursor
    const MAX_SCALE = 1.6;    // peak letter scale
    const GLOW_THRESHOLD = 1.08; // when to start glow

    let active = false;
    let cursorX = 0;
    let rafId = 0;

    const tick = () => {
      rafId = 0;
      if (!active) return;
      for (let i = 0; i < letters.length; i++) {
        const el = letters[i];
        const r = el.getBoundingClientRect();
        // Skip letters way off-screen for perf
        if (r.right < -200 || r.left > window.innerWidth + 200) {
          if (el.style.getPropertyValue('--s') !== '1') {
            el.style.setProperty('--s', '1');
            el.style.setProperty('--g', '0');
          }
          continue;
        }
        const cx = r.left + r.width / 2;
        const dx = Math.abs(cursorX - cx);
        // Smooth cosine falloff: 1 at distance 0, 0 at distance RADIUS
        let f = 0;
        if (dx < RADIUS) {
          const t = dx / RADIUS;
          f = 0.5 + 0.5 * Math.cos(t * Math.PI); // 1 → 0
        }
        const s = 1 + (MAX_SCALE - 1) * f;
        const g = s > GLOW_THRESHOLD ? (s - GLOW_THRESHOLD) / (MAX_SCALE - GLOW_THRESHOLD) : 0;
        el.style.setProperty('--s', s.toFixed(3));
        el.style.setProperty('--g', g.toFixed(3));
      }
      // Keep ticking while active so animation-driven motion stays in sync
      rafId = requestAnimationFrame(tick);
    };

    const onEnter = (e) => {
      active = true;
      cursorX = e.clientX;
      root.classList.add('is-lensing');
      if (!rafId) rafId = requestAnimationFrame(tick);
    };
    const onMove = (e) => { cursorX = e.clientX; };
    const onLeave = () => {
      active = false;
      root.classList.remove('is-lensing');
      if (rafId) { cancelAnimationFrame(rafId); rafId = 0; }
      // Reset
      for (const el of letters) {
        el.style.setProperty('--s', '1');
        el.style.setProperty('--g', '0');
      }
    };

    root.addEventListener('mouseenter', onEnter);
    root.addEventListener('mousemove', onMove);
    root.addEventListener('mouseleave', onLeave);
    return () => {
      root.removeEventListener('mouseenter', onEnter);
      root.removeEventListener('mousemove', onMove);
      root.removeEventListener('mouseleave', onLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const splitLetters = (text) =>
    Array.from(text).map((ch, i) =>
      ch === ' '
        ? <span key={i} className="mq-space">&nbsp;</span>
        : <span key={i} className="mq-letter" style={{ '--s': 1, '--g': 0 }}>{ch}</span>
    );

  return (
    <div className="marquee" aria-hidden="true" ref={rootRef}>
      <div className="marquee-track">
        {loop.map((it, i) => (
          <span key={i} className="mq-item">
            <span className="mq-word" style={{ '--accent': it.c }}>{splitLetters(it.t)}</span>
            <span className="marquee-dot" style={{ background: it.c, '--accent': it.c }}></span>
          </span>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Nav, Hero, Marquee });
