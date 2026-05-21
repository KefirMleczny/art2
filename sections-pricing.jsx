/* ArtPUFF — Pricing
   3 kategorie usług × 3 pakiety × 4 modele płatności
   Modele płatności są wspólne dla wszystkich kategorii.
*/

function Pricing() {
  // ===== KATEGORIE USŁUG =====
  // Każda kategoria ma 3 pakiety. `total` = wartość pakietu od dolnej widełki.
  const categories = [
    {
      id: 'web',
      label: 'Strony www',
      icon: 'web',
      accent: 'var(--magenta)',
      headline: <>strony <span style={{ color: 'var(--magenta)' }}>internetowej</span></>,
      lead: 'Landing page, strona firmowa albo pełny sklep. Wybierz zakres i model płatności.',
      plans: [
        {
          key: 'landing',
          title: 'Landing Page',
          sub: 'Jednostronicowa strona sprzedażowa',
          total: 1900,
          color: 'var(--magenta)',
          glow: 'rgba(255, 45, 126, 0.25)',
          icon: 'web',
          features: [
            'Projekt indywidualny (nie szablon)',
            '1 strona z sekcjami sprzedażowymi',
            'Wersja mobilna i desktop',
            'Formularz kontaktowy / zapis',
            'Podstawowe SEO i Open Graph',
            'Hosting i konfiguracja domeny',
            'Integracja z Google Analytics',
            '14 dni poprawek po starcie',
          ],
        },
        {
          key: 'multipage',
          title: 'Strona główna + 6 podstron',
          sub: 'Strona firmowa · Oferta · Blog · Kontakt',
          total: 2500,
          color: 'var(--cyan)',
          glow: 'rgba(45, 212, 239, 0.25)',
          icon: 'web',
          featured: true,
          features: [
            'Projekt indywidualny strony głównej',
            '6 podstron (oferta, o nas, kontakt itd.)',
            'Wersja mobilna i desktop',
            'System zarządzania treścią (CMS)',
            'Galeria / portfolio realizacji',
            'Formularz kontaktowy + mapa',
            'Pełne SEO, Open Graph i sitemap',
            'Hosting, domena i certyfikat SSL',
            '30 dni poprawek po starcie',
          ],
        },
        {
          key: 'shop',
          title: 'Sklep internetowy',
          sub: 'E-commerce · Płatności · Wysyłki',
          total: 5500,
          color: 'var(--orange)',
          glow: 'rgba(255, 122, 31, 0.25)',
          icon: 'web',
          features: [
            'Projekt indywidualny sklepu',
            'Karty produktów i kategorie',
            'Koszyk i proces zamówienia',
            'Integracja z bramkami płatności',
            'Integracja z firmami kurierskimi',
            'Panel administracyjny do produktów',
            'Faktury, regulamin, polityka prywatności',
            'Pełne SEO i mapa sklepu',
            'Hosting, domena i SSL',
            '30 dni wsparcia po starcie',
          ],
        },
      ],
    },

    // ===== SOCIAL MEDIA =====
    {
      id: 'social',
      label: 'Social media',
      icon: 'social',
      accent: 'var(--cyan)',
      headline: <>postów <span style={{ color: 'var(--cyan)' }}>na social media</span></>,
      lead: 'Spójne grafiki, posty sprzedażowe, story i plakaty w jednym, dopracowanym stylu marki.',
      plans: [
        {
          key: 'social-mini',
          title: 'Pakiet Start',
          sub: '6 grafik · 1 plakat · 1 set story',
          total: 1490,
          color: 'var(--magenta)',
          glow: 'rgba(255, 45, 126, 0.25)',
          icon: 'social',
          features: [
            'Projekt 6 postów na Facebooka / Instagrama',
            '1 plakat promocyjny (digital + print)',
            '1 zestaw 4 story w stylu marki',
            'Spójna kolorystyka i typografia',
            'Hasła / teksty sprzedażowe',
            'Eksport pod każdy format social',
            '7 dni poprawek po oddaniu',
          ],
        },
        {
          key: 'social-std',
          title: 'Pakiet Standard',
          sub: '12 grafik · 2 plakaty · story + reels',
          total: 2890,
          color: 'var(--cyan)',
          glow: 'rgba(45, 212, 239, 0.25)',
          icon: 'social',
          featured: true,
          features: [
            '12 grafik miesięcznie (FB + IG)',
            '2 plakaty / banery promocyjne',
            'Zestaw story na 4 tygodnie',
            '2 covery / okładki Reels',
            'Plan publikacji na 4 tygodnie',
            'Hasła sprzedażowe i CTA',
            'Wersje wielojęzyczne (jeśli trzeba)',
            '14 dni poprawek po oddaniu',
          ],
        },
        {
          key: 'social-pro',
          title: 'Pakiet Pro',
          sub: '20 grafik · kampania · reels + animacje',
          total: 4990,
          color: 'var(--orange)',
          glow: 'rgba(255, 122, 31, 0.25)',
          icon: 'social',
          features: [
            '20+ grafik / postów miesięcznie',
            'Pełna kampania sprzedażowa (FB + IG)',
            'Animowane posty + reels covers',
            'Pakiet 8 story z animacją tekstu',
            'Plakaty drukowane (A3/A4) + digital',
            'Plan publikacji + harmonogram CTA',
            'Briefing copywritera + hasła',
            'Plik źródłowy (Figma) na życzenie',
            '30 dni poprawek po oddaniu',
          ],
        },
      ],
    },

    // ===== OBRÓBKA ZDJĘĆ =====
    {
      id: 'photo',
      label: 'Obróbka zdjęć',
      icon: 'photo',
      accent: 'var(--orange)',
      headline: <>obróbki <span style={{ color: 'var(--orange)' }}>zdjęć</span></>,
      lead: 'Wnętrza, produkty, oferty nieruchomości. Szybka korekta i retusz pod każdy kanał.',
      plans: [
        {
          key: 'photo-mini',
          title: 'Pakiet Mini',
          sub: 'Do 25 zdjęć · podstawowa korekta',
          total: 890,
          color: 'var(--magenta)',
          glow: 'rgba(255, 45, 126, 0.25)',
          icon: 'photo',
          features: [
            'Do 25 zdjęć w pakiecie',
            'Korekta światła i kolorów',
            'Wybielanie ścian, prostowanie linii',
            'Usuwanie zbędnych drobnych elementów',
            'Eksport pod 2 formaty (np. OLX + IG)',
            '7 dni poprawek po oddaniu',
          ],
        },
        {
          key: 'photo-std',
          title: 'Pakiet Standard',
          sub: 'Do 60 zdjęć · retusz + zamiana tła',
          total: 1690,
          color: 'var(--cyan)',
          glow: 'rgba(45, 212, 239, 0.25)',
          icon: 'photo',
          featured: true,
          features: [
            'Do 60 zdjęć w pakiecie',
            'Pełna korekta światła, kolorów, ostrości',
            'Retusz produktów (cienie, refleksy)',
            'Zamiana / wyczyszczenie tła',
            'Wybielanie ścian, prostowanie linii',
            'Usuwanie zbędnych elementów',
            'Eksport pod 3 formaty (web + print)',
            '14 dni poprawek po oddaniu',
          ],
        },
        {
          key: 'photo-pro',
          title: 'Pakiet Pro',
          sub: 'Do 150 zdjęć · retusz zaawansowany',
          total: 2990,
          color: 'var(--orange)',
          glow: 'rgba(255, 122, 31, 0.25)',
          icon: 'photo',
          features: [
            'Do 150 zdjęć w pakiecie',
            'Zaawansowany retusz produktów',
            'Sesja wnętrz / nieruchomości',
            'Wymiana nieba, oświetlenia, scenerii',
            'Retusz skóry i sylwetki (portrety)',
            'Wersje katalogowe (tło białe, sklep)',
            'Spójny look całej serii zdjęć',
            'Eksport pod 4 formaty + faktura PDF',
            '30 dni poprawek po oddaniu',
          ],
        },
      ],
    },
  ];

  // ===== MODELE PŁATNOŚCI =====
  const billingOptions = [
    { id: 'once',  label: 'Jednorazowo',      sub: '1 płatność' },
    { id: 'split', label: 'Płatność 2 raty',  sub: '50 / 50' },
    { id: 'm12',   label: 'Abonament 12 m-cy', sub: 'co miesiąc' },
    { id: 'm24',   label: 'Abonament 24 m-ce', sub: 'co miesiąc' },
  ];

  // Narzuty za rozłożenie płatności w czasie
  const MARKUP = { once: 0, split: 0.15, m12: 0.20, m24: 0.30 };
  // Opłata wstępna płatna po podpisaniu umowy (tylko dla abonamentów)
  const UPFRONT = 450;

  const [categoryId, setCategoryId] = React.useState('web');
  const [billing, setBilling] = React.useState('once');
  const category = categories.find(c => c.id === categoryId) || categories[0];

  // Cena wyświetlana w zależności od modelu
  const priceFor = (total, mode) => {
    const markup = MARKUP[mode] || 0;
    const grandTotal = Math.round(total * (1 + markup));
    const pct = Math.round(markup * 100);
    const extraNote = markup > 0 ? ` (+${pct}% za rozłożenie płatności)` : '';
    const fmtPL = (n) => n.toLocaleString('pl-PL');
    switch (mode) {
      case 'once':
        return {
          big: grandTotal,
          small: 'jednorazowo',
          unit: 'zł',
          note: 'Pełna płatność na starcie projektu.',
        };
      case 'split':
        return {
          big: Math.round(grandTotal / 2),
          small: '× 2 raty (50 / 50)',
          unit: 'zł',
          note: '1. rata na starcie, 2. po oddaniu projektu. Łącznie ' + fmtPL(grandTotal) + ' zł' + extraNote + '.',
        };
      case 'm12': {
        const remaining = Math.max(grandTotal - UPFRONT, 0);
        const monthly = Math.round(remaining / 12);
        return {
          big: monthly,
          small: '/ miesiąc · 12 m-cy',
          unit: 'zł',
          upfront: UPFRONT,
          note: 'Opłata wstępna ' + fmtPL(UPFRONT) + ' zł po podpisaniu umowy, następnie 12 × ' + fmtPL(monthly) + ' zł. Łącznie ' + fmtPL(grandTotal) + ' zł' + extraNote + '.',
        };
      }
      case 'm24': {
        const remaining = Math.max(grandTotal - UPFRONT, 0);
        const monthly = Math.round(remaining / 24);
        return {
          big: monthly,
          small: '/ miesiąc · 24 m-ce',
          unit: 'zł',
          upfront: UPFRONT,
          note: 'Opłata wstępna ' + fmtPL(UPFRONT) + ' zł po podpisaniu umowy, następnie 24 × ' + fmtPL(monthly) + ' zł. Łącznie ' + fmtPL(grandTotal) + ' zł' + extraNote + '.',
        };
      }
      default:
        return { big: grandTotal, small: '', unit: 'zł', note: '' };
    }
  };

  const fmt = (n) => n.toLocaleString('pl-PL');

  return (
    <section id="cennik" className="section-pad" data-screen-label="06 Cennik" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-head">
          <div className="eyebrow reveal">Cennik</div>
          <h2 className="h-display h2 reveal" style={{ transitionDelay: '60ms' }}>
            Wybierz zakres{' '}
            <span style={{
              background: 'linear-gradient(95deg, var(--magenta), var(--orange))',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
            }}>{category.headline}</span>
            <br/>i model płatności.
          </h2>
          <p className="lead reveal" style={{ transitionDelay: '120ms' }}>
            {category.lead}
          </p>
        </div>

        {/* Category tabs */}
        <div className="pricing-cats reveal" role="tablist" aria-label="Kategoria usług">
          {categories.map(c => (
            <button
              key={c.id}
              role="tab"
              aria-selected={categoryId === c.id}
              className={`pricing-cat-btn ${categoryId === c.id ? 'is-active' : ''}`}
              style={{ '--cat-accent': c.accent }}
              onClick={() => setCategoryId(c.id)}
            >
              <span className="pricing-cat-icon">{ICONS[c.icon]}</span>
              <span className="pricing-cat-label">{c.label}</span>
            </button>
          ))}
        </div>

        {/* Billing toggle */}
        <div
          className="pricing-toggle reveal"
          role="tablist"
          aria-label="Model płatności"
          style={{ '--billing-index': billingOptions.findIndex(o => o.id === billing) }}
        >
          <span className="pricing-toggle-pill" aria-hidden="true" />
          {billingOptions.map(o => (
            <button
              key={o.id}
              role="tab"
              aria-selected={billing === o.id}
              className={`pricing-toggle-btn ${billing === o.id ? 'is-active' : ''}`}
              onClick={() => setBilling(o.id)}
            >
              <span className="pricing-toggle-label">{o.label}</span>
              <span className="pricing-toggle-sub">{o.sub}</span>
            </button>
          ))}
        </div>

        {/* Plans — re-keyed by category so they animate in on category change */}
        <div className="pricing-grid" key={categoryId}>
          {category.plans.map((p, i) => {
            const price = priceFor(p.total, billing);
            return (
              <article
                key={p.key}
                className={`pricing-card pricing-card-in ${p.featured ? 'is-featured' : ''}`}
                style={{
                  animationDelay: `${i * 80}ms`,
                  '--accent': p.color,
                  '--accent-glow': p.glow,
                }}
              >
                {p.featured && <span className="pricing-badge">Najczęściej wybierane</span>}

                <header className="pricing-head">
                  <div className="pricing-icon" style={{ background: `linear-gradient(160deg, ${p.color}, color-mix(in oklab, ${p.color} 55%, #0a0908))` }}>
                    {ICONS[p.icon]}
                  </div>
                  <h3>{p.title}</h3>
                  <p className="pricing-sub">{p.sub}</p>
                </header>

                <div className="pricing-amount" key={billing /* re-mount → odpala animację */}>
                  <span className="pricing-amount-big">
                    <span className="from">od</span>
                    <span className="num">{fmt(price.big)}</span>
                    <span className="cur">{price.unit}</span>
                  </span>
                  <span className="pricing-amount-small">{price.small}</span>
                  {price.upfront && (
                    <span className="pricing-amount-upfront">
                      + <strong>{fmt(price.upfront)} zł</strong> opłata wstępna po podpisaniu umowy
                    </span>
                  )}
                </div>

                <p className="pricing-note">{price.note}</p>

                <ul className="pricing-features">
                  {p.features.map((f, idx) => (
                    <li key={idx}>
                      <span className="pricing-check" style={{ color: p.color }}>{ICONS.check || '✓'}</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a href="#kontakt" className={`btn ${p.featured ? 'btn-paint' : 'btn-ghost'} pricing-cta`}>
                  Wybieram <span className="arrow" style={p.featured ? { background: 'rgba(10,9,8,0.18)' } : null}>{ICONS.arrow}</span>
                </a>
              </article>
            );
          })}
        </div>

        <p className="pricing-footnote reveal">
          Ceny brutto. Indywidualne projekty wyceniamy po krótkiej rozmowie. Finalna kwota zależy od zakresu, terminów i materiałów.
        </p>
      </div>
    </section>
  );
}

Object.assign(window, { Pricing });
