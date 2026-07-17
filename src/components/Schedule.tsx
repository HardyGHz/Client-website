import { Siren, MapPin, Phone } from 'lucide-react'
import Reveal from './Reveal'
import { PHONE, PHONE_HREF, EMERGENCY, EMERGENCY_HREF } from './Navbar'
import { SCHEDULE, isOpenNow } from '../lib/hours'

export default function Schedule() {
  const open = isOpenNow()

  return (
    <section id="program" className="bg-cream scroll-mt-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:py-28 lg:grid-cols-2">
        <Reveal>
          <p className="text-[13px] font-bold tracking-[0.28em] text-teal uppercase">Program</p>
          <h2 className="font-display mt-3 text-[34px] leading-[1.1] font-bold text-ink md:text-[44px]">
            Deschis și seara, când alții au închis.
          </h2>
          <p className="mt-4 max-w-md text-[16px] leading-relaxed text-inksoft">
            Programul prelungit până la 21:00 înseamnă că nu trebuie să-ți iei liber de la muncă pentru un vaccin.
            Programarea în avans e recomandată.
          </p>

          <div className="mt-9 max-w-md">
            {SCHEDULE.map((row) => (
              <div key={row.label} className="flex items-baseline justify-between border-b border-ink/10 py-4">
                <span className="font-display text-[17px] font-bold text-ink">{row.label}</span>
                <span className="text-[16px] font-semibold text-inksoft">{row.hours}</span>
              </div>
            ))}
            <div className="mt-5 flex items-center gap-2.5 text-[14px] font-semibold">
              <span className={`h-2 w-2 rounded-full ${open ? 'animate-pulse-dot bg-green-500' : 'bg-ink/30'}`} aria-hidden />
              <span className={open ? 'text-teal' : 'text-inksoft'}>
                {open ? 'Deschis acum' : 'Închis acum — pentru urgențe sună linia dedicată'}
              </span>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kronvet&query_place_id=ChIJObmJUGIISUcRN-uwnlDxfDA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[14px] font-bold text-teal hover:text-ink"
            >
              <MapPin size={16} />
              Str. Veterinarului, Chinteni — deschide în Google Maps
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="flex h-full flex-col justify-center rounded-2xl bg-deep p-8 md:p-12">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accentsoft">
              <Siren size={24} strokeWidth={2.2} />
            </span>
            <h3 className="font-display mt-6 text-[28px] leading-tight font-bold text-cream md:text-[32px]">
              E urgent? Sună, chiar dacă e închis.
            </h3>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-cream/70">
              Pentru situațiile care nu pot aștepta până dimineața există o linie de urgență separată. Descrii ce s-a
              întâmplat și decideți împreună pașii următori.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={EMERGENCY_HREF}
                className="flex items-center justify-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-[16px] font-bold text-deep transition-colors hover:bg-accentsoft"
              >
                <Siren size={17} strokeWidth={2.4} />
                Urgențe: {EMERGENCY}
              </a>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2.5 rounded-full border border-cream/25 px-6 py-3.5 text-[15px] font-semibold text-cream transition-colors hover:border-cream/60"
              >
                <Phone size={16} />
                Cabinet: {PHONE}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
