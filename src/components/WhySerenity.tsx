import Reveal from './Reveal'

const PROOFS = [
  {
    n: '01',
    title: 'Floating la standarde occidentale',
    text: 'Primul centru de terapie prin plutire din Cluj-Napoca, cu cele mai moderne bazine de pe piața din România.',
  },
  {
    n: '02',
    title: 'O experiență cu adevărat privată',
    text: 'Camera ta, bazinul tău, dușul tău. Nimeni nu te grăbește și nimeni nu te întrerupe.',
  },
  {
    n: '03',
    title: 'Totul sub același acoperiș',
    text: 'Plutirea se completează cu masaj, yoga, Mind Machine și Oxygen Bar — îți compui propriul ritual.',
  },
  {
    n: '04',
    title: 'Rezervare în mai puțin de un minut',
    text: 'Calendarul online îți arată pe loc locurile libere. Alegi ora, primești confirmarea, atât.',
  },
]

export default function WhySerenity() {
  return (
    <section className="bg-cream py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl leading-tight font-light text-ink sm:text-5xl">
            De ce Serenity, și nu <em className="text-copper italic">încă un spa</em>?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {PROOFS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <div className="border-t border-ink/15 pt-6">
                <p className="font-display text-sm text-copper">{p.n}</p>
                <h3 className="mt-3 text-[17px] leading-snug font-semibold text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed font-light text-ink/60">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
