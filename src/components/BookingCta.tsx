import { useState } from 'react'
import Reveal from './Reveal'
import { BOOKEO_URL } from './Navbar'

const WA_URL = 'https://wa.me/40772067981?text=Bun%C4%83!%20A%C8%99%20vrea%20s%C4%83%20fac%20o%20programare.'

export default function BookingCta() {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')

  return (
    <section id="rezerva" className="bg-deep py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.4em] text-coppersoft uppercase">Rezervare</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.1] font-light text-mist sm:text-[52px]">
              Rezervă 60 de minute <em className="text-coppersoft italic">doar pentru tine</em>.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed font-light text-mist/70">
              Calendarul online îți arată pe loc orele libere. Alegi, confirmi, iar restul e
              liniște.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={BOOKEO_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-copper px-8 py-4 text-center text-sm font-semibold tracking-[0.1em] text-deep uppercase transition hover:bg-coppersoft"
              >
                Deschide calendarul
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-mist/25 px-8 py-4 text-center text-sm font-medium tracking-[0.1em] text-mist uppercase transition hover:border-coppersoft hover:text-coppersoft"
              >
                Scrie pe WhatsApp
              </a>
            </div>
            <div className="mt-8 space-y-1.5 text-sm font-light text-mist/60">
              <p>Str. Eremia Grigorescu 56, Cluj-Napoca</p>
              <p>
                <a href="tel:+40772067981" className="transition hover:text-coppersoft">0772 067 981</a>
                {' · '}
                <a href="mailto:contact@serenityfloat.ro" className="transition hover:text-coppersoft">
                  contact@serenityfloat.ro
                </a>
              </p>
              <p>Program: conform calendarului de rezervări online</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-2xl bg-surface p-8 shadow-[0_30px_80px_rgba(5,20,15,0.45)] sm:p-10">
            {sent ? (
              <div className="py-10 text-center">
                <p className="font-display text-3xl font-light text-ink">
                  Mulțumim{name ? `, ${name.split(' ')[0]}` : ''}.
                </p>
                <p className="mt-3 text-sm font-light text-ink/60">
                  Mesajul a plecat spre echipa Serenity. Te contactăm pentru confirmare.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
                className="space-y-5"
              >
                <h3 className="font-display text-2xl font-normal text-ink">Sau lasă-ne un mesaj</h3>
                <div>
                  <label htmlFor="bk-name" className="mb-1.5 block text-xs font-medium tracking-[0.08em] text-ink/60 uppercase">
                    Nume
                  </label>
                  <input
                    id="bk-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-ink/15 bg-cream/60 px-4 py-3 text-[15px] text-ink outline-none focus:border-copper"
                  />
                </div>
                <div>
                  <label htmlFor="bk-tel" className="mb-1.5 block text-xs font-medium tracking-[0.08em] text-ink/60 uppercase">
                    Telefon
                  </label>
                  <input
                    id="bk-tel"
                    required
                    type="tel"
                    className="w-full rounded-xl border border-ink/15 bg-cream/60 px-4 py-3 text-[15px] text-ink outline-none focus:border-copper"
                  />
                </div>
                <div>
                  <label htmlFor="bk-int" className="mb-1.5 block text-xs font-medium tracking-[0.08em] text-ink/60 uppercase">
                    Ce te interesează?
                  </label>
                  <select
                    id="bk-int"
                    className="w-full rounded-xl border border-ink/15 bg-cream/60 px-4 py-3 text-[15px] text-ink outline-none focus:border-copper"
                  >
                    <option>Terapie prin plutire</option>
                    <option>Masaj</option>
                    <option>Pachet sau abonament</option>
                    <option>Voucher cadou</option>
                    <option>Altceva</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-deep py-4 text-sm font-semibold tracking-[0.1em] text-mist uppercase transition hover:bg-copper hover:text-deep"
                >
                  Trimite
                </button>
                <p className="text-center text-xs font-light text-ink/45">
                  Trimițând formularul, ești de acord cu prelucrarea datelor pentru contact.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
