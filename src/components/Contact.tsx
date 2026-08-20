import { useState } from 'react'
import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react'
import Reveal from './Reveal'
import { PHONE_DISPLAY, PHONE_TEL } from './Navbar'

const SERVICES = [
  'Stomatologie generală',
  'Endodonție',
  'Chirurgie orală',
  'Parodontologie',
  'Pedodonție & Ortodonție',
  'Protetică',
  'Implantologie',
  'Nu știu încă, vreau o recomandare',
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  // Opt-in for the cancellation waitlist. Real value for the patient, and it is
  // the list a gap-filling system would draw from later.
  const [waitlist, setWaitlist] = useState(true)

  const firstName = name.trim().split(' ')[0] || ''

  return (
    <section id="contact" className="bg-[var(--color-deep)] py-24 text-[var(--color-bg)]">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="text-xs font-medium tracking-[0.2em] text-[var(--color-claysoft)] uppercase">
              Programare
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Trimiteți-ne câteva rânduri, vă sunăm noi.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-[var(--color-claysoft)]" />
              <a href={`tel:${PHONE_TEL}`} className="hover:underline">
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-[var(--color-claysoft)]" />
              <a href="mailto:office@dentistfloresti.ro" className="hover:underline">
                office@dentistfloresti.ro
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-[var(--color-claysoft)]" />
              Strada Cetății nr. 25, Florești, 407280, Cluj
            </div>
            <div className="flex items-start gap-3">
              <Clock size={16} className="mt-0.5 text-[var(--color-claysoft)]" />
              <div>
                <div>Luni – Vineri: 10:00–13:00, 14:00–19:00</div>
                <div className="text-[var(--color-bg)]/60">Sâmbătă – Duminică: închis</div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-white/5 p-10 text-center">
              <CheckCircle2 size={40} className="text-[var(--color-claysoft)]" />
              <p className="mt-4 font-display text-xl">Mulțumim{firstName ? `, ${firstName}` : ''}!</p>
              <p className="mt-2 text-sm text-[var(--color-bg)]/70">
                Vă sunăm în cel mai scurt timp pentru confirmarea programării.
              </p>
              {waitlist && (
                <p className="mt-3 text-sm text-[var(--color-claysoft)]">
                  V-am trecut și pe lista pentru locuri eliberate. Dacă cineva anulează mai
                  devreme, vă anunțăm primii.
                </p>
              )}
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="space-y-4 rounded-3xl bg-white/5 p-8"
            >
              <div>
                <label className="mb-1.5 block text-xs text-[var(--color-bg)]/70">Nume</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus-visible:border-[var(--color-claysoft)]"
                  placeholder="Numele dvs."
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs text-[var(--color-bg)]/70">Telefon</label>
                <input
                  required
                  type="tel"
                  className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus-visible:border-[var(--color-claysoft)]"
                  placeholder="07xx xxx xxx"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs text-[var(--color-bg)]/70">Vă interesează</label>
                <select className="w-full rounded-xl border border-white/15 bg-[var(--color-deep)] px-4 py-3 text-sm outline-none focus-visible:border-[var(--color-claysoft)]">
                  {SERVICES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs text-[var(--color-bg)]/70">Mesaj (opțional)</label>
                <textarea
                  rows={3}
                  className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus-visible:border-[var(--color-claysoft)]"
                  placeholder="Spuneți-ne pe scurt ce vă supără."
                />
              </div>

              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/15 px-4 py-3">
                <input
                  type="checkbox"
                  checked={waitlist}
                  onChange={(e) => setWaitlist(e.target.checked)}
                  className="mt-0.5 accent-[var(--color-clay)]"
                />
                <span className="text-sm">
                  Anunțați-mă dacă se eliberează un loc mai devreme
                  <span className="mt-0.5 block text-xs text-[var(--color-bg)]/50">
                    Vă scriem doar dacă apare o oră liberă care vi se potrivește.
                  </span>
                </span>
              </label>
              <button
                type="submit"
                className="w-full rounded-xl bg-[var(--color-clay)] py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-claysoft)]"
              >
                Trimite cererea
              </button>
              <p className="text-center text-xs text-[var(--color-bg)]/50">
                Fără spam. Vă contactăm o singură dată, pentru confirmare.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
