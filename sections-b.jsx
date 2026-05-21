/* ArtPUFF — Why + Proof + Process */

function Why() {
  const points = [
    'Projektujemy z myślą o odbiorcy, nie tylko o estetyce.',
    'Tworzymy materiały gotowe do użycia w reklamie i social media.',
    'Dbamy o spójność kolorów, stylu i komunikatu.',
    'Łączymy kreatywność, AI i praktyczne podejście do sprzedaży.',
    'Pomagamy małym firmom wyglądać profesjonalnie bez korporacyjnego budżetu.',
  ];
  return (
    <section id="dlaczego" className="section-pad" data-screen-label="04 Why ArtPUFF">
      <div className="container">
        <div className="why-grid">
          <div>
            <div className="eyebrow reveal" style={{ marginBottom: 28 }}>Dlaczego ArtPUFF</div>
            <h2 className="h-display h2 reveal" style={{ transitionDelay: '60ms' }}>
              Nie robimy tylko<br/>
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span style={{
                  background: 'linear-gradient(95deg, var(--magenta), var(--orange))',
                  WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                }}>ładnych obrazków</span>
                <svg style={{ position: 'absolute', left: 0, right: 0, bottom: '-14px', width: '100%', height: 18 }} viewBox="0 0 400 18" preserveAspectRatio="none">
                  <path d="M2 12 C 80 2, 160 16, 240 6 S 380 14, 398 8" stroke="url(#g1)" strokeWidth="6" strokeLinecap="round" fill="none"/>
                  <defs><linearGradient id="g1"><stop offset="0" stopColor="#ff2d7e"/><stop offset="1" stopColor="#ff7a1f"/></linearGradient></defs>
                </svg>
              </span>.<br/>
              Pomagamy Twojej<br/>marce sprzedawać.
            </h2>
            <p className="lead reveal" style={{ transitionDelay: '120ms', marginTop: 32 }}>
              Materiały wizualne to nie sztuka dla sztuki. Każda grafika, każdy ekran i każde zdjęcie ma realne zadanie: przyciągnąć odbiorcę i przekonać go do działania.
            </p>
            <div className="reveal" style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#kontakt" className="btn btn-primary">
                Porozmawiajmy <span className="arrow">{ICONS.arrow}</span>
              </a>
            </div>
          </div>

          <ul className="why-list">
            {points.map((p, i) => (
              <li key={i} className="why-item reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="why-num">{String(i + 1).padStart(2, '0')}</span>
                <p>{p}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CountUp({ to, suffix = '', duration = 1800 }) {
  const [v, setV] = React.useState(0);
  const ref = React.useRef(null);
  const ran = React.useRef(false);

  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !ran.current) {
          ran.current = true;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setV(Math.round(to * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{v}{suffix}</span>;
}

function Proof() {
  const stats = [
    { n: 380, suffix: '+', label: 'Przygotowanych grafik', c: 'c1' },
    { n: 43, suffix: '+', label: 'Projektów stron i landing page', c: 'c2' },
    { n: 2340, suffix: '+', label: 'Poprawionych zdjęć', c: 'c3' },
    { n: 4, suffix: ' branże', label: 'Nieruchomości, usługi, butiki, marki lokalne', c: 'c4' },
  ];
  const testimonials = [
    {
      quote: 'Grafiki od razu wyglądały bardziej profesjonalnie. Wreszcie nasze posty zaczęły przyciągać uwagę.',
      name: 'Nina Ginter',
      role: 'Butik lokalny',
      grad: 'linear-gradient(135deg, var(--magenta), var(--orange))',
      initials: 'NG',
    },
    {
      quote: 'Strona została przygotowana szybko, estetycznie i z bardzo dobrym wyczuciem stylu.',
      name: 'Marek Nowak',
      role: 'Apartament noclegowy',
      grad: 'linear-gradient(135deg, var(--cyan), var(--blue))',
      initials: 'MN',
    },
    {
      quote: 'Zdjęcia po obróbce wyglądały znacznie lepiej i bardziej sprzedażowo.',
      name: 'Paulina Wiśniewska',
      role: 'Marka usługowa',
      grad: 'linear-gradient(135deg, var(--yellow), var(--orange))',
      initials: 'PW',
    },
  ];

  return (
    <section className="section-pad" data-screen-label="05 Social proof" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="section-head">
          <div className="eyebrow reveal">Liczby i opinie</div>
          <h2 className="h-display h2 reveal" style={{ transitionDelay: '60ms' }}>
            Małe studio,<br/>
            <span style={{
              background: 'linear-gradient(95deg, var(--cyan), var(--purple))',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
            }}>realne efekty.</span>
          </h2>
        </div>

        <div className="stats-row reveal">
          {stats.map((s, i) => (
            <div key={i} className="stat">
              <div className={`stat-num ${s.c}`}>
                <CountUp to={s.n} suffix={s.suffix}/>
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="testimonials">
          {testimonials.map((t, i) => (
            <article key={i} className="testi reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="testi-mark" style={{ background: t.grad, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>"</span>
              <p className="testi-quote">„{t.quote}"</p>
              <div className="testi-author">
                <div
                  className="testi-avatar"
                  style={{ background: t.grad, padding: 2 }}
                  title={t.name}
                >
                  <span className="testi-avatar-fallback" aria-hidden="true">{t.initials}</span>
                </div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: 1, t: 'Rozmawiamy', d: 'Krótko omawiamy, czego potrzebujesz i co ma osiągnąć projekt.', c: 'var(--magenta)' },
    { n: 2, t: 'Kierunek', d: 'Dobieramy styl, układ i kierunek wizualny pasujący do marki.', c: 'var(--orange)' },
    { n: 3, t: 'Projekt', d: 'Przygotowujemy projekt: strony, grafiki lub obróbkę zdjęć.', c: 'var(--yellow)' },
    { n: 4, t: 'Poprawki', d: 'Wprowadzamy Twoje uwagi i dopracowujemy detale.', c: 'var(--cyan)' },
    { n: 5, t: 'Gotowe', d: 'Otrzymujesz gotowe materiały lub działającą stronę.', c: 'var(--blue)' },
  ];

  return (
    <section id="proces" className="section-pad" data-screen-label="06 Process">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow reveal">Jak wygląda współpraca</div>
          <h2 className="h-display h2 reveal" style={{ transitionDelay: '60ms' }}>
            Pięć kroków od<br/>
            <span style={{
              background: 'linear-gradient(95deg, var(--magenta), var(--cyan))',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
            }}>pomysłu do efektu.</span>
          </h2>
        </div>

        <div className="process-rail">
          <span className="process-rail-pulse" aria-hidden="true"></span>
          {steps.map((s, i) => (
            <div key={s.n} className="process-step reveal" style={{ transitionDelay: `${i * 80}ms`, '--bullet': s.c, '--i': i }}>
              <div className="process-bullet">
                <span className="process-bullet-inner" style={{ background: s.c }}>{s.n}</span>
              </div>
              <div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Why, Proof, Process, CountUp });
