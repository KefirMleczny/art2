/* ArtPUFF — CTA + Form + Footer */

function CTA() {
  return (
    <section className="section-pad" data-screen-label="07 CTA" style={{ paddingBottom: 0 }}>
      <div className="container">
        <div className="cta reveal">
          <div className="eyebrow" style={{ color: 'var(--ink)', marginBottom: 22 }}>
            <span style={{ background: 'rgba(255,255,255,0.12)', padding: '6px 12px', borderRadius: 999, letterSpacing: '0.12em' }}>
              · Zapraszamy do rozmowy
            </span>
          </div>
          <h2 className="h-display h2">
            Chcesz, żeby Twoja marka <span className="script" style={{ color: 'var(--yellow)' }}>wyglądała lepiej</span> w&nbsp;internecie?
          </h2>
          <p className="lead" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Napisz, czego potrzebujesz: strony, grafik, postów, obróbki zdjęć albo pełnej oprawy wizualnej. Odezwiemy się z konkretną propozycją.
          </p>
          <div className="cta-actions">
            <a href="#kontakt" className="btn btn-primary">
              Skontaktuj się <span className="arrow">{ICONS.arrow}</span>
            </a>
            <a href="#portfolio" className="btn btn-ghost" style={{ color: '#fff', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.3)' }}>
              Zobacz prace <span className="arrow">{ICONS.arrow}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [state, setState] = React.useState({
    name: '', email: '', phone: '', topic: '', message: '',
  });
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');

  const onChange = (e) => setState(s => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'Nie udało się wysłać wiadomości.');
      }
      setSent(true);
    } catch (err) {
      setError(err.message || 'Nie udało się wysłać wiadomości. Spróbuj ponownie.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="section-pad" data-screen-label="08 Contact form">
      <div className="container" style={{ maxWidth: 980 }}>
        <div className="section-head">
          <div className="eyebrow reveal">Kontakt</div>
          <h2 className="h-display h2 reveal" style={{ transitionDelay: '60ms' }}>
            Powiedz nam, czego<br/>
            <span style={{
              background: 'linear-gradient(95deg, var(--cyan), var(--blue))',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
            }}>potrzebujesz.</span>
          </h2>
          <p className="lead reveal" style={{ transitionDelay: '120ms' }}>
            Wypełnij formularz, a odezwiemy się możliwie szybko z propozycją zakresu, terminu i wyceny.
          </p>
        </div>

        {sent ? (
          <div className="form-success reveal">
            <div className="form-success-icon">✓</div>
            <h3 className="h-display h3" style={{ marginBottom: 12 }}>Dziękujemy!</h3>
            <p style={{ color: 'var(--ink-dim)', maxWidth: 500, margin: '0 auto' }}>
              Wiadomość została wysłana. Odezwiemy się możliwie szybko z konkretną propozycją.
            </p>
            <button
              type="button"
              className="btn btn-ghost"
              style={{ marginTop: 32 }}
              onClick={() => { setSent(false); setState({ name: '', email: '', phone: '', topic: '', message: '' }); }}
            >
              Wyślij kolejne zapytanie
            </button>
          </div>
        ) : (
          <form className="form-card reveal" onSubmit={onSubmit} noValidate>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Imię</label>
                <input id="name" name="name" required value={state.name} onChange={onChange} placeholder="Anna" autoComplete="given-name"/>
              </div>
              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" name="email" required value={state.email} onChange={onChange} placeholder="ty@email.pl" autoComplete="email"/>
              </div>
              <div className="field">
                <label htmlFor="phone">Telefon (opcjonalnie)</label>
                <input id="phone" type="tel" name="phone" value={state.phone} onChange={onChange} placeholder="+48 ___ ___ ___" autoComplete="tel"/>
              </div>
              <div className="field">
                <label htmlFor="topic">Czego potrzebujesz?</label>
                <select id="topic" name="topic" required value={state.topic} onChange={onChange}>
                  <option value="" disabled>Wybierz usługę…</option>
                  <option value="strona">Strona internetowa</option>
                  <option value="posty">Posty na Facebooka</option>
                  <option value="obrobka">Obróbka zdjęć</option>
                  <option value="grafiki">Grafiki reklamowe</option>
                  <option value="doradztwo">Nie wiem, potrzebuję doradztwa</option>
                </select>
              </div>
              <div className="field field-full">
                <label htmlFor="message">Wiadomość</label>
                <textarea id="message" name="message" required value={state.message} onChange={onChange} placeholder="Krótko opisz projekt: branża, cel, terminy, inspiracje…"/>
              </div>
              <div className="field-full" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginTop: 8 }}>
                <p style={{ fontSize: 12, color: 'var(--ink-mute)', margin: 0, maxWidth: 380 }}>
                  Wysyłając formularz akceptujesz przetwarzanie danych w celu kontaktu zwrotnego.
                </p>
                <button type="submit" className="btn btn-paint" disabled={submitting}>
                  {submitting ? 'Wysyłamy…' : 'Wyślij zapytanie'} <span className="arrow" style={{ background: 'rgba(10,9,8,0.18)' }}>{ICONS.arrow}</span>
                </button>
              </div>
              {error && (
                <p className="form-error field-full" role="alert">
                  {error}
                </p>
              )}
            </div>
          </form>
        )}

        <div style={{ marginTop: 40, display: 'flex', gap: 20, flexWrap: 'wrap', color: 'var(--ink-dim)', fontSize: 14 }} className="reveal">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>{ICONS.mail} kontakt@artpuff.pl</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>artpuff.pl</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" data-screen-label="09 Footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#top" className="footer-logo" aria-label="Art Puff">
              <OptimizedImage
                src="assets/artpuff-logo-full.png"
                alt="Art Puff"
                className="footer-logo-img"
                sizes="180px"
              />
            </a>
            <div className="footer-brand-tag">Art that inspires. Creativity that stays.</div>
            <p style={{ color: 'var(--ink-mute)', fontSize: 14, marginTop: 24, maxWidth: 360 }}>
              Kreatywne studio digitalowe. Strony, grafiki i zdjęcia dla marek, które chcą wyróżniać się w internecie.
            </p>
          </div>
          <div className="footer-col">
            <h5>Studio</h5>
            <ul>
              <li><a href="#uslugi">Co robimy</a></li>
              <li><a href="#portfolio">Realizacje</a></li>
              <li><a href="#dlaczego">Dlaczego my</a></li>
              <li><a href="#proces">Proces</a></li>
              <li><a href="#cennik">Cennik</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Kontakt</h5>
            <ul>
              <li><a href="mailto:kontakt@artpuff.pl">kontakt@artpuff.pl</a></li>
              <li><a href="tel:+48516964726">+48 516 964 726</a></li>
              <li><a href="https://artpuff.pl">artpuff.pl</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Social</h5>
            <ul>
              <li><a href="#"><span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>{ICONS.facebook} Facebook</span></a></li>
              <li><a href="#"><span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>{ICONS.instagram} Instagram</span></a></li>
              <li><a href="#portfolio"><span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>{ICONS.sparkle} Portfolio</span></a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bigword" aria-hidden="true">Art Puff</div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ArtPUFF · artpuff.pl</span>
          <span className="dot-row" aria-hidden="true">
            <span className="d" style={{ background: 'var(--magenta)' }}></span>
            <span className="d" style={{ background: 'var(--cyan)' }}></span>
            <span className="d" style={{ background: 'var(--blue)' }}></span>
            <span className="d" style={{ background: 'var(--orange)' }}></span>
            <span className="d" style={{ background: 'var(--yellow)' }}></span>
            <span className="d" style={{ background: 'var(--purple)' }}></span>
          </span>
          <span>Made with passion 🎨</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { CTA, ContactForm, Footer });
