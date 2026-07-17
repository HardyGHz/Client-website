import { Star } from 'lucide-react'
import Reveal from './Reveal'

// Valós Google-recenziók (output/kronvet/reviews_slim.json) — szó szerint, nem átírva.
type Quote = { name: string; text: string }

const ROW_A: Quote[] = [
  {
    name: 'Ana Maria',
    text: 'Andrea este minunată! O profesionistă și o mare iubitoare de animale. A salvat-o pe pisicuța noastră Scai! Îți mulțumim!',
  },
  {
    name: 'Edy',
    text: 'Prețurile sunt corecte. Ba chiar foarte bune aș spune. Puteți să sunați oricând, chiar și când e închis — există și un număr de urgență.',
  },
  {
    name: 'Emanuela Ciupe',
    text: 'Profesionalism, multă dedicație, atenție la detalii, înțelegere față de companionii necuvântători și multă răbdare cu oamenii. Dna Dr. Szabó este un exemplu.',
  },
  {
    name: 'Sonia Szekely',
    text: 'Andrea este un veterinar minunat! Este foarte drăguță cu animalele și cu clienții.',
  },
  {
    name: 'Alex Pop',
    text: 'Un medic veterinar care face cinste profesiei!',
  },
]

const ROW_B: Quote[] = [
  {
    name: 'Ana Maria Statie',
    text: 'Doamna veterinar este foarte drăguță și implicată — se vede cât de mult iubește animalele din câte animăluțe salvate găzduiește în curte.',
  },
  {
    name: 'Anca Mic',
    text: 'Doamna doctor este foarte implicată și dedicată. Recomand cu cel mai mare drag. ♥️',
  },
  {
    name: 'Victor Gavronschi',
    text: 'Atenție, dedicație și îngrijire la superlativ. Recomand cu multă încredere! Mulțumesc.',
  },
  {
    name: 'Campean Lucia',
    text: 'Dr. Andrea Szabó — un medic dedicat și bun profesionist pentru prietenii noștri necuvântători! Recomand!',
  },
]

function QuoteCard({ q }: { q: Quote }) {
  return (
    <figure className="w-[320px] shrink-0 rounded-2xl border border-cream/10 bg-deepsoft/60 p-6 md:w-[400px]">
      <span className="flex items-center gap-0.5 text-accentsoft" aria-label="5 stele">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
        ))}
      </span>
      <blockquote className="mt-3.5 text-[15px] leading-relaxed text-cream/85">{q.text}</blockquote>
      <figcaption className="mt-4 text-[13px] font-bold text-tealsoft">{q.name}</figcaption>
    </figure>
  )
}

function MarqueeRow({ quotes, reverse = false }: { quotes: Quote[]; reverse?: boolean }) {
  const doubled = [...quotes, ...quotes, ...quotes, ...quotes]
  return (
    <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex w-max gap-6 pr-6 group-hover:[animation-play-state:paused] ${
          reverse ? 'animate-marquee-right' : 'animate-marquee-left'
        }`}
      >
        {doubled.map((q, i) => (
          <QuoteCard key={i} q={q} />
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="recenzii" className="bg-deep scroll-mt-20">
      <div className="py-20 md:py-28">
        <Reveal className="mx-auto max-w-6xl px-5">
          <p className="text-[13px] font-bold tracking-[0.28em] text-tealsoft uppercase">Recenzii</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display max-w-xl text-[34px] leading-[1.1] font-bold text-cream md:text-[46px]">
              Ce spun stăpânii.
            </h2>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kronvet&query_place_id=ChIJObmJUGIISUcRN-uwnlDxfDA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-full border border-cream/20 px-5 py-2.5 text-[14px] font-semibold text-cream transition-colors hover:border-cream/50"
            >
              <Star size={15} className="text-accentsoft" fill="currentColor" strokeWidth={0} />
              4.9 · 89 recenzii pe Google
            </a>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col gap-6">
          <MarqueeRow quotes={ROW_A} />
          <MarqueeRow quotes={ROW_B} reverse />
        </div>
      </div>
    </section>
  )
}
