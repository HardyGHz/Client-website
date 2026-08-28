import { useState } from 'react'
import { ArrowRight, Check, CheckCircle2, Clock, Mail, MapPin } from 'lucide-react'
import Reveal from './Reveal'
import { PHONE_DISPLAY, PHONE_TEL } from './Navbar'

const SERVICES = ['Stomatologie generală', 'Endodonție', 'Chirurgie orală', 'Parodontologie', 'Pedodonție & Ortodonție', 'Protetică', 'Implantologie', 'Nu știu încă, vreau o recomandare']

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  const [waitlist, setWaitlist] = useState(true)
  const firstName = name.trim().split(' ')[0] || ''
  const fieldClass = 'w-full rounded-2xl border border-[var(--color-line)] bg-white/70 px-4 py-3.5 text-sm text-[var(--color-deep)] outline-none transition-colors placeholder:text-[var(--color-text-soft)]/50 focus:border-[var(--color-accent)] focus:bg-white'

  return (
    <section id="contact" className="bg-[var(--color-deep)] py-10 text-white sm:py-16">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-stretch lg:gap-16">
          <div className="flex flex-col py-8 sm:py-12">
            <Reveal>
              <span className="eyebrow !text-[var(--color-claysoft)]">Programare</span>
              <h2 className="display-balance mt-5 font-display text-[clamp(3rem,5.5vw,6rem)] leading-[.9] tracking-[-.05em]">Primul pas este gratuit.</h2>
              <p className="mt-7 max-w-lg text-base leading-7 text-white/62 sm:text-lg">Trimiteți cererea în mai puțin de un minut. Vă sunăm pentru a înțelege situația și a găsi medicul potrivit.</p>
            </Reveal>

            <Reveal delay={0.08} className="mt-10">
              <a href={`tel:${PHONE_TEL}`} className="group inline-flex items-center gap-3 font-display text-3xl text-[var(--color-claysoft)] sm:text-4xl">{PHONE_DISPLAY} <ArrowRight size={24} className="transition-transform group-hover:translate-x-1" /></a>
            </Reveal>

            <Reveal delay={0.12} className="mt-auto grid gap-4 border-t border-white/12 pt-8 text-sm text-white/70 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="flex items-start gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-[var(--color-claysoft)]" /><span>Strada Cetății nr. 25<br />Florești, Cluj</span></div>
              <div className="flex items-start gap-3"><Clock size={17} className="mt-0.5 shrink-0 text-[var(--color-claysoft)]" /><span>Luni – Vineri<br />10:00–13:00 · 14:00–19:00</span></div>
              <div className="flex items-center gap-3 sm:col-span-2 lg:col-span-1 xl:col-span-2"><Mail size={17} className="shrink-0 text-[var(--color-claysoft)]" /><a href="mailto:office@dentistfloresti.ro" className="hover:text-white">office@dentistfloresti.ro</a></div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="h-full min-h-[610px] rounded-[2.25rem] bg-[var(--color-bg)] p-6 text-[var(--color-deep)] shadow-[0_30px_90px_rgba(0,0,0,.18)] sm:rounded-[3rem] sm:p-10">
              {sent ? (
                <div className="flex h-full min-h-[530px] flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-[var(--color-sage)] text-[var(--color-accent)]"><CheckCircle2 size={30} /></span>
                  <p className="mt-6 font-display text-4xl">Mulțumim{firstName ? `, ${firstName}` : ''}!</p>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--color-text-soft)]">Vă sunăm în cel mai scurt timp pentru confirmarea programării.</p>
                  {waitlist && <p className="mt-4 max-w-sm rounded-2xl bg-[var(--color-claysoft)]/20 px-5 py-4 text-sm text-[var(--color-deep)]">Sunteți și pe lista pentru locuri eliberate — vă anunțăm primii.</p>}
                </div>
              ) : (
                <form onSubmit={(event) => { event.preventDefault(); setSent(true) }}>
                  <div className="mb-8 flex items-start justify-between gap-5">
                    <div><p className="text-[10px] font-bold tracking-[.18em] text-[var(--color-accent)] uppercase">Cerere de programare</p><h3 className="mt-2 font-display text-3xl">Cu ce vă putem ajuta?</h3></div>
                    <span className="hidden rounded-full bg-[var(--color-sage)] px-3 py-2 text-[10px] font-bold text-[var(--color-deep)] uppercase sm:block">≈ 1 minut</span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div><label className="mb-2 block text-xs font-semibold">Nume</label><input required value={name} onChange={(event) => setName(event.target.value)} className={fieldClass} placeholder="Numele dvs." /></div>
                    <div><label className="mb-2 block text-xs font-semibold">Telefon</label><input required type="tel" className={fieldClass} placeholder="07xx xxx xxx" /></div>
                  </div>
                  <div className="mt-4"><label className="mb-2 block text-xs font-semibold">Vă interesează</label><select className={fieldClass}>{SERVICES.map((service) => <option key={service}>{service}</option>)}</select></div>
                  <div className="mt-4"><label className="mb-2 block text-xs font-semibold">Mesaj <span className="font-normal text-[var(--color-text-soft)]">(opțional)</span></label><textarea rows={3} className={fieldClass} placeholder="Spuneți-ne pe scurt ce vă supără." /></div>
                  <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-2xl border border-[var(--color-line)] bg-white/45 px-4 py-4">
                    <span className="relative mt-0.5"><input type="checkbox" checked={waitlist} onChange={(event) => setWaitlist(event.target.checked)} className="peer h-5 w-5 appearance-none rounded-md border border-[var(--color-line)] checked:border-[var(--color-accent)] checked:bg-[var(--color-accent)]" /><Check size={13} className="pointer-events-none absolute left-1 top-1 text-white opacity-0 peer-checked:opacity-100" /></span>
                    <span className="text-sm font-semibold">Anunțați-mă dacă se eliberează un loc mai devreme<span className="mt-1 block text-xs font-normal leading-5 text-[var(--color-text-soft)]">Vă scriem doar dacă apare o oră liberă potrivită.</span></span>
                  </label>
                  <button type="submit" className="group mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--color-clay)] py-4 text-sm font-bold text-white transition-all hover:bg-[var(--color-deep)]">Trimite cererea <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></button>
                  <p className="mt-4 text-center text-xs text-[var(--color-text-soft)]">Fără spam. Vă contactăm o singură dată, pentru confirmare.</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
