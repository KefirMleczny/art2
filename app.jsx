/* ArtPUFF — App root + Tweaks */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#ff2d7e", "#2dd4ef", "#3a78ff", "#ff7a1f", "#ffc93d", "#b855ff"],
  "heroVibe": "blobs",
  "showGrain": true,
  "scriptFont": "Caveat Brush"
}/*EDITMODE-END*/;

function applyPalette(p) {
  const root = document.documentElement;
  const [magenta, cyan, blue, orange, yellow, purple] = p;
  root.style.setProperty('--magenta', magenta);
  root.style.setProperty('--cyan', cyan);
  root.style.setProperty('--blue', blue);
  root.style.setProperty('--orange', orange);
  root.style.setProperty('--yellow', yellow);
  root.style.setProperty('--purple', purple);
}

function applyHeroVibe(vibe) {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  hero.dataset.vibe = vibe;
  // Simple swap: change blob filter / display
  if (vibe === 'grid') {
    hero.style.setProperty('--vibe-bg', 'linear-gradient(180deg, var(--bg), var(--bg))');
  }
}

function App() {
  const [tweaks, setTweak] = window.useTweaks ? window.useTweaks(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, () => {}];

  React.useEffect(() => { applyPalette(tweaks.palette); }, [tweaks.palette]);
  React.useEffect(() => {
    document.documentElement.style.setProperty('--font-script', `"${tweaks.scriptFont}", "Pacifico", cursive`);
  }, [tweaks.scriptFont]);

  useReveal();

  const PALETTES = [
    ['#ff2d7e', '#2dd4ef', '#3a78ff', '#ff7a1f', '#ffc93d', '#b855ff'],   // ArtPUFF original
    ['#ff3b94', '#00e5cf', '#7c5cff', '#ff8a00', '#ffd54a', '#ff5cb4'],   // Neon pop
    ['#e63946', '#00b4d8', '#0077b6', '#f4a261', '#e9c46a', '#9d4edd'],   // Earthy bold
    ['#ff006e', '#3a86ff', '#8338ec', '#fb5607', '#ffbe0b', '#ff70a6'],   // Vibrant 80s
  ];

  return (
    <React.Fragment>
      {tweaks.showGrain && <div className="grain" aria-hidden="true"></div>}
      <Nav/>
      <main>
        <Hero/>
        <Marquee/>
        <Services/>
        <Portfolio/>
        <Why/>
        <Proof/>
        <Process/>
        <Pricing/>
        <CTA/>
        <ContactForm/>
      </main>
      <Footer/>

      {window.TweaksPanel && (
        <window.TweaksPanel title="Tweaks · ArtPUFF">
          <window.TweakSection title="Paleta">
            <window.TweakColor
              k="palette"
              label="Zestaw kolorów"
              value={tweaks.palette}
              onChange={(v) => setTweak('palette', v)}
              options={PALETTES}
            />
          </window.TweakSection>
          <window.TweakSection title="Hero">
            <window.TweakRadio
              k="heroVibe"
              label="Tło"
              value={tweaks.heroVibe}
              onChange={(v) => setTweak('heroVibe', v)}
              options={[
                { value: 'blobs', label: 'Blobs' },
                { value: 'minimal', label: 'Minimal' },
              ]}
            />
            <window.TweakToggle
              k="showGrain"
              label="Ziarno (grain)"
              value={tweaks.showGrain}
              onChange={(v) => setTweak('showGrain', v)}
            />
          </window.TweakSection>
          <window.TweakSection title="Typografia">
            <window.TweakSelect
              k="scriptFont"
              label="Font skryptowy"
              value={tweaks.scriptFont}
              onChange={(v) => setTweak('scriptFont', v)}
              options={[
                { value: 'Caveat Brush', label: 'Caveat Brush' },
                { value: 'Pacifico', label: 'Pacifico' },
                { value: 'Permanent Marker', label: 'Permanent Marker' },
                { value: 'Shadows Into Light', label: 'Shadows Into Light' },
              ]}
            />
          </window.TweakSection>
        </window.TweaksPanel>
      )}

      <HeroVibe vibe={tweaks.heroVibe}/>
    </React.Fragment>
  );
}

function HeroVibe({ vibe }) {
  React.useEffect(() => {
    const blobs = document.querySelectorAll('.hero .blob');
    blobs.forEach(b => {
      b.style.display = vibe === 'minimal' ? 'none' : '';
    });
  }, [vibe]);
  return null;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
