/* ArtPUFF — Services + Portfolio */

function Services() {
  const services = [
    {
      num: '01',
      title: 'Strony internetowe',
      desc: 'Projektujemy nowoczesne landing page, strony firmowe i strony ofertowe, które dobrze wyglądają na komputerze i telefonie.',
      icon: ICONS.web,
      img: 'assets/service-www.png',
      tilt: 'left',
      color: 'var(--magenta)',
      glow: 'rgba(255, 45, 126, 0.28)',
      tag: 'Landing · Firmowa · Oferta',
    },
    {
      num: '02',
      title: 'Posty i grafiki na Facebooka',
      desc: 'Tworzymy przyciągające wzrok grafiki reklamowe, posty sprzedażowe, plakaty promocyjne i materiały do social media.',
      icon: ICONS.social,
      img: 'assets/service-post.png',
      tilt: 'right',
      color: 'var(--cyan)',
      glow: 'rgba(45, 212, 239, 0.28)',
      tag: 'Posty · Reels · Plakaty',
    },
    {
      num: '03',
      title: 'Poprawa i obróbka zdjęć',
      desc: 'Poprawiamy zdjęcia produktów, wnętrz, apartamentów i materiałów promocyjnych, aby wyglądały bardziej profesjonalnie.',
      icon: ICONS.photo,
      img: 'assets/service-korekta.png',
      tilt: 'left',
      color: 'var(--orange)',
      glow: 'rgba(255, 122, 31, 0.28)',
      tag: 'Wnętrza · Produkty · Retusz',
    },
  ];
  return (
    <section id="uslugi" className="section-pad" data-screen-label="02 Services">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow reveal">Co robimy</div>
          <h2 className="h-display h2 reveal" style={{ transitionDelay: '60ms' }}>
            Trzy obszary,<br/>
            <span style={{ background: 'linear-gradient(95deg, var(--cyan), var(--blue))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              jedno spójne studio.
            </span>
          </h2>
          <p className="lead reveal" style={{ transitionDelay: '120ms' }}>
            Strony internetowe, grafiki i zdjęcia w jednej spójnej oprawie, dzięki której Twoja marka wygląda profesjonalnie w każdym miejscu.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <article
              key={s.num}
              className="service-card reveal"
              style={{
                transitionDelay: `${i * 80}ms`,
                '--accent-glow': `radial-gradient(420px 240px at 50% 0%, ${s.glow}, transparent 70%)`,
              }}
            >
              <div>
                <div className="service-num" style={{ color: s.color }}>{s.num} / 03</div>
                <div
                  className={`service-photo tilt-${s.tilt}`}
                  style={{ '--accent': s.color, '--accent-soft': s.glow }}
                >
                  <div className="service-photo-frame">
                    <OptimizedImage src={s.img} alt={s.title} sizes="(max-width: 900px) 240px, 280px"/>
                    <span className="service-photo-badge" aria-hidden="true">{s.icon}</span>
                  </div>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <div className="service-tag" style={{ color: s.color }}>{s.tag}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const WORKS = [
  {
    id: 1, cat: 'apartment-sale', catLabel: 'Apartament na sprzedaż',
    title: 'Kaszubska Droga 25', desc: 'Strona apartamentu na sprzedaż na Kaszubskiej Drodze w Chwaszczynie.',
    color: 'var(--magenta)',
    url: 'https://www.kaszubskadroga25.pl',
    image: 'assets/portfolio-kaszubska.png',
  },
  {
    id: 2, cat: 'social', catLabel: 'Posty Facebook',
    title: 'Plażowy Zakątek BOHO',
    desc: 'Post promocyjny apartamentu wakacyjnego w Gdańsku Brzeźnie.',
    color: 'var(--cyan)',
    image: 'assets/portfolio-boho.png',
  },
  {
    id: 3,
    cat: 'photo',
    catLabel: 'Obróbka zdjęć',
    title: 'Tworzenie wizualizacji nieruchomości',
    desc: 'Korekta światła i kolorów wnętrz pod ogłoszenia.',
    color: 'var(--orange)',
    beforeAfter: {
      before: 'assets/lazienka-before.png',
      after: 'assets/lazienka-after.png',
      beforeLabel: 'PRZED',
      afterLabel: 'PO',
    },
  },
  {
    id: 4, cat: 'ad', catLabel: 'Grafiki reklamowe',
    title: 'Terminarz Lekarza',
    desc: 'Planer dnia dla gabinetu lekarskiego, wersja print + digital.',
    color: 'var(--yellow)',
    image: 'assets/portfolio-terminarz.png',
  },
  {
    id: 5, cat: 'sales', catLabel: 'Serwis sprzedażowy',
    title: 'MY HOME',
    desc: 'Strona firmy zarządzającej apartamentami na wynajem krótko- i długoterminowy.',
    color: 'var(--magenta)',
    image: 'assets/portfolio-myhome.png',
  },
  {
    id: 6, cat: 'unique', catLabel: 'Miejsce unikalne',
    title: 'Gospodarstwo agroturystyczne',
    desc: 'Strona siedliska na wsi — atmosfera, oferta noclegów i rezerwacje.',
    color: 'var(--magenta)',
    image: 'assets/portfolio-agroturystyka.png',
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="section-pad" data-screen-label="03 Portfolio" style={{ background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.015) 30%, transparent)' }}>
      <div className="container">
        <div className="section-head" style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 720 }}>
            <div className="eyebrow reveal">Wybrane realizacje</div>
            <h2 className="h-display h2 reveal" style={{ transitionDelay: '60ms' }}>
              Projekty, które<br/>
              <span style={{
                background: 'linear-gradient(95deg, var(--orange), var(--yellow))',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
              }}>wyróżniają</span> marki.
            </h2>
          </div>
          <p className="lead reveal" style={{ transitionDelay: '120ms', maxWidth: 360 }}>
            Mix realnych projektów oraz placeholderów. Twoje miejsce, by pokazać prawdziwe prace, gdy będą gotowe.
          </p>
        </div>

        <div className="portfolio-grid">
          {WORKS.map((w, i) => {
            const Wrapper = w.url ? 'a' : 'article';
            const wrapperProps = w.url
              ? { href: w.url, target: '_blank', rel: 'noopener noreferrer' }
              : {};
            return (
              <Wrapper
                key={w.id}
                className={`work-card reveal ${w.url ? 'is-link' : ''}`}
                style={{ transitionDelay: `${i * 40}ms`, '--card-accent': w.color }}
                {...wrapperProps}
              >
                <div className="work-media">
                  {w.beforeAfter ? (
                    <BeforeAfterSlider {...w.beforeAfter}/>
                  ) : w.image ? (
                    <div className="work-art work-art-photo" aria-hidden="true">
                      <OptimizedImage
                        src={w.image}
                        alt=""
                        loading="lazy"
                        sizes="(max-width: 700px) 385px, (max-width: 1100px) 385px, 385px"
                        onError={(e) => {
                          const el = e.currentTarget;
                          if (!el.dataset.retried) {
                            el.dataset.retried = '1';
                            setTimeout(() => { el.src = webpPath(w.image) + '?_=' + Date.now(); }, 2500);
                          } else {
                            el.style.display = 'none';
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <WorkArt seed={w.id} cat={w.cat}/>
                  )}
                  {w.url && (
                    <span className="work-link-badge" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17 17 7"/><path d="M8 7h9v9"/>
                      </svg>
                    </span>
                  )}
                </div>
                <div className="work-meta">
                  <span className="work-cat">{w.catLabel}</span>
                  <h3 className="work-title">{w.title}</h3>
                  <p className="work-desc">{w.desc}</p>
                </div>
              </Wrapper>
            );
          })}
        </div>

        <div style={{ marginTop: 48, textAlign: 'center' }} className="reveal">
          <p style={{ color: 'var(--ink-mute)', fontSize: 13, marginBottom: 16 }}>
            Karty zostawione jako placeholdery. Podmień obrazy w katalogu <code style={{ background: 'rgba(255,255,255,0.06)', padding: '2px 8px', borderRadius: 6 }}>public/portfolio/</code>.
          </p>
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSlider({ before, after, beforeLabel = 'PRZED', afterLabel = 'PO' }) {
  const [position, setPosition] = React.useState(50);

  return (
    <div className="before-after" style={{ '--split': `${position}%` }}>
      <OptimizedImage className="ba-img ba-before" src={before} alt="Zdjęcie przed obróbką" sizes="(max-width: 700px) 92vw, 380px"/>
      <div className="ba-after-wrap" aria-hidden="true">
        <OptimizedImage className="ba-img ba-after" src={after} alt="" sizes="(max-width: 700px) 92vw, 380px"/>
      </div>
      <span className="ba-chip ba-chip-before">{beforeLabel}</span>
      <span className="ba-chip ba-chip-after">{afterLabel}</span>
      <span className="ba-line" aria-hidden="true">
        <span className="ba-handle">
          <span></span>
          <span></span>
        </span>
      </span>
      <input
        className="ba-range"
        type="range"
        min="0"
        max="100"
        value={position}
        aria-label="Porównaj zdjęcie przed i po obróbce"
        onInput={(event) => setPosition(event.target.value)}
        onChange={(event) => setPosition(event.target.value)}
      />
    </div>
  );
}

Object.assign(window, { Services, Portfolio });
