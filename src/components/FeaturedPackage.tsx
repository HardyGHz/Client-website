import Reveal from './Reveal'

const WHATSAPP_RESET_URL =
  'https://wa.me/40772067981?text=Bun%C4%83!%20A%C8%99%20vrea%20detalii%20despre%20ritualul%20Serenity%20Reset.'

export default function FeaturedPackage() {
  return (
    <section className="relative overflow-hidden bg-deep py-28 lg:py-36">
      <img
        src="https://images.unsplash.com/photo-1705514442579-ee34539f57be?w=1600&q=80&auto=format&fit=crop"
        alt=""
        loading="lazy"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/70 to-deep/30" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.4em] text-coppersoft uppercase">
              Ritual recomandat
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.1] font-light text-mist sm:text-[54px]">
              Serenity <em className="text-coppersoft italic">Reset</em>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 text-lg leading-relaxed font-light text-mist/80">
              O plutire de 60 de minute, urmată de un masaj de relaxare și un ceai în lounge.
              Ritualul complet pentru zilele în care „obosit" nu mai acoperă realitatea.
            </p>
            <p className="mt-4 text-sm font-light text-mist/55">
              Detalii, durată și disponibilitate — la rezervare.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href={WHATSAPP_RESET_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-full border border-coppersoft/60 px-8 py-4 text-sm font-semibold tracking-[0.08em] text-coppersoft uppercase transition hover:bg-copper hover:text-deep"
            >
              Întreabă pe WhatsApp
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
