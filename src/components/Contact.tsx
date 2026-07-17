import { useState } from 'react'
import type { FormEvent } from 'react'
import { Check, MapPin, Phone, Clock } from 'lucide-react'
import Reveal from './Reveal'
import { PHONE, PHONE_HREF, EMERGENCY, EMERGENCY_HREF } from './Navbar'

// Éles bekötés: Web3Forms access key ide (https://web3forms.com, ingyenes).
// Amíg üres, a form demó-módban fut: csak a sikeres állapotot mutatja.
const WEB3FORMS_KEY = ''

const SERVICES = [
  'Consultație',
  'Vaccinare / deparazitare',
  'Sterilizare',
  'Chirurgie',
  'Tratament / recontrol',
  'Nu știu încă — vreau o recomandare',
]

export default function Contact() {
  const [name, setName] = useState('')
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (WEB3FORMS_KEY) {
      setSending(true)
      const data = new FormData(e.currentTarget)
      data.append('access_key', WEB3FORMS_KEY)
      data.append('subject', 'Programare nouă — site Kronvet')
      try {
        await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      } finally {
        setSending(false)
      }
    }
    setSent(true)
  }

  const firstName = name.trim().split(' ')[0] || ''

  return (
    <section id="contact" className="bg-cream scroll-mt-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pt-4 pb-20 md:pb-28 lg:grid-cols-[1fr_420px]">
        <Reveal>
          <p className="text-[13px] font-bold tracking-[0.28em] text-teal uppercase">Programare</p>
          <h2 className="font-display mt-3 max-w-lg text-[34px] leading-[1.1] font-bold text-ink md:text-[44px]">
            Spune-ne ce s-a întâmplat. Te sunăm noi.
          </h2>
          <p className="mt-4 max-w-md text-[16px] leading-relaxed text-inksoft">
            Lași numărul, te contactăm pentru confirmare și oră exactă. Dacă e urgent, nu completa formularul —{' '}
            <a href={EMERGENCY_HREF} className="font-bold text-accent hover:text-accentsoft">
              sună direct: {EMERGENCY}
            </a>
            .
          </p>

          <ul className="mt-9 flex flex-col gap-4 text-[15px] text-ink">
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal/10 text-teal">
                <Phone size={16} />
              </span>
              <a href={PHONE_HREF} className="font-bold hover:text-teal">
                {PHONE}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal/10 text-teal">
                <MapPin size={16} />
              </span>
              Str. Veterinarului, Chinteni, jud. Cluj
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal/10 text-teal">
                <Clock size={16} />
              </span>
              L–V 10:00–21:00 · S–D 14:30–17:00
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-surface p-10 text-center shadow-sm">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal/10 text-teal">
                <Check size={28} strokeWidth={2.6} />
              </span>
              <p className="font-display mt-5 text-[24px] font-bold text-ink">
                Mulțumim{firstName ? `, ${firstName}` : ''}!
              </p>
              <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-inksoft">
                Te sunăm în cel mai scurt timp pentru confirmare. Dacă între timp devine urgent:{' '}
                <a href={EMERGENCY_HREF} className="font-bold text-accent">
                  {EMERGENCY}
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-2xl bg-surface p-7 shadow-sm md:p-8">
              <div className="flex flex-col gap-4">
                <label className="flex flex-col gap-1.5">
                  <span className="text-[13px] font-bold text-ink">Numele tău</span>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    className="rounded-lg border border-ink/15 bg-cream/50 px-4 py-3 text-[15px] text-ink outline-none focus:border-teal"
                    placeholder="ex. Ioana Pop"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-[13px] font-bold text-ink">
                    Telefon <span className="text-accent">*</span>
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    className="rounded-lg border border-ink/15 bg-cream/50 px-4 py-3 text-[15px] text-ink outline-none focus:border-teal"
                    placeholder="07xx xxx xxx"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-[13px] font-bold text-ink">Cu ce te putem ajuta?</span>
                  <select
                    name="service"
                    className="rounded-lg border border-ink/15 bg-cream/50 px-4 py-3 text-[15px] text-ink outline-none focus:border-teal"
                    defaultValue={SERVICES[0]}
                  >
                    {SERVICES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-[13px] font-bold text-ink">Despre animal (opțional)</span>
                  <textarea
                    name="message"
                    rows={3}
                    className="resize-none rounded-lg border border-ink/15 bg-cream/50 px-4 py-3 text-[15px] text-ink outline-none focus:border-teal"
                    placeholder="ex. cățel de 2 ani, șchiopătează de ieri"
                  />
                </label>
                <button
                  type="submit"
                  disabled={sending}
                  className="mt-2 rounded-full bg-accent py-3.5 text-[16px] font-bold text-deep transition-colors hover:bg-accentsoft disabled:opacity-60"
                >
                  {sending ? 'Se trimite…' : 'Trimite cererea de programare'}
                </button>
                <p className="text-center text-[12px] text-inksoft">
                  Fără spam. Te contactăm o singură dată, pentru confirmare.
                </p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
