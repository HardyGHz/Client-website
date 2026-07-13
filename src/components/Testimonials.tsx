import Reveal from './Reveal'

// Demo-tartalom: a témák a nyilvános recenziókból származnak (atmoszféra, személyzet),
// de éles indulás előtt a kártyákat a központ valódi Google-recenzióira kell cserélni.
const QUOTES = [
  {
    text: 'O oră în care nu ți se cere absolut nimic. Am intrat cu capul plin și am ieșit cu o liniște pe care n-o mai simțisem de mult.',
    who: 'Oaspete la prima plutire',
  },
  {
    text: 'Atmosfera e gândită până la ultimul detaliu, iar echipa îți explică totul calm, fără grabă. Te simți în siguranță din primul minut.',
    who: 'Oaspete revenit cu abonament',
  },
  {
    text: 'Plutire și apoi masaj — combinația după care corpul își aduce aminte cum e să nu doară nimic.',
    who: 'Oaspete Serenity Reset',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-deepsoft py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.4em] text-coppersoft uppercase">
            Ce spun oaspeții
          </p>
          <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight font-light text-mist sm:text-5xl">
            Liniștea se <em className="text-coppersoft italic">recomandă</em> singură.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.who} delay={i * 0.1}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-mist/10 bg-deep/60 p-8">
                <blockquote className="text-[15px] leading-relaxed font-light text-mist/85">
                  <span aria-hidden="true" className="mb-4 block font-display text-4xl leading-none text-copper">
                    „
                  </span>
                  {q.text}
                </blockquote>
                <figcaption className="mt-6 text-xs font-medium tracking-[0.16em] text-coppersoft/80 uppercase">
                  {q.who}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-8 text-xs font-light text-mist/40">
            Secțiune pregătită pentru recenziile Google reale ale centrului — se conectează la
            lansare, cu nume și rating verificate.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
