import Reveal from './Reveal'

const POINTS = [
  {
    title: 'Ce se întâmplă',
    text: 'Plutești fără niciun efort în apă cu sare Epsom, la temperatura pielii. Corpul nu mai luptă cu gravitația, iar mintea rămâne, în sfârșit, fără sarcini.',
  },
  {
    title: 'Prima vizită',
    text: 'Ajungi cu 10 minute înainte. Primești tot ce ai nevoie: prosoape proaspete, produse de baie, dopuri de urechi și un ceai cald la final.',
  },
  {
    title: 'Igiena, fără compromis',
    text: 'Apa trece prin 3 etape de filtrare înainte de fiecare oaspete: filtru fizic, UV și ozon. Fiecare cameră are propria cabină de duș.',
  },
  {
    title: 'Controlul e la tine',
    text: 'Lumina și muzica pot rămâne pornite cât vrei tu. Zilnic primim oameni aflați la prima plutire — îți explicăm tot, pas cu pas.',
  },
]

export default function FloatingFeature() {
  return (
    <section id="floating" className="overflow-hidden bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <Reveal>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1470376619031-a6791e534bf0?w=1200&q=80&auto=format&fit=crop"
                alt="Femeie plutind relaxată pe spate, cu ochii închiși"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-2xl object-cover"
              />
              <div className="absolute -right-4 -bottom-6 rounded-2xl bg-deep px-7 py-5 shadow-[0_24px_60px_rgba(10,30,24,0.35)] sm:-right-8">
                <p className="font-display text-4xl font-light text-coppersoft">60'</p>
                <p className="mt-1 text-[11px] font-medium tracking-[0.18em] text-mist/70 uppercase">
                  de imponderabilitate
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-[11px] font-semibold tracking-[0.4em] text-copper uppercase">
                Experiența signature
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[1.12] font-light text-ink sm:text-5xl">
                60 de minute fără greutate. Fără zgomot. <em className="text-copper italic">Fără obligații.</em>
              </h2>
            </Reveal>

            <div className="mt-10 space-y-7">
              {POINTS.map((p, i) => (
                <Reveal key={p.title} delay={0.08 + i * 0.07}>
                  <div className="border-l-2 border-copper/40 pl-5">
                    <h3 className="text-[15px] font-semibold text-ink">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed font-light text-ink/65">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <a
                href="https://www.serenityfloat.ro/terapia-prin-plutire-floating/"
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.08em] text-copper uppercase transition hover:gap-3.5 hover:text-ink"
              >
                Descoperă experiența floating
                <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
