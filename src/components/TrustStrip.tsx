import { Star, ShieldCheck, Siren, CalendarClock } from 'lucide-react'
import Reveal from './Reveal'
import { EMERGENCY, EMERGENCY_HREF } from './Navbar'

const ITEMS = [
  {
    icon: Star,
    title: '4.9 / 5 pe Google',
    text: '89 de recenzii, nicio notă de 1 sau 2 stele',
  },
  {
    icon: ShieldCheck,
    title: 'Peste 10 ani în Chinteni',
    text: 'Cabinet înregistrat CMV din 2015',
  },
  {
    icon: Siren,
    title: 'Urgențe după program',
    text: EMERGENCY,
    href: EMERGENCY_HREF,
  },
  {
    icon: CalendarClock,
    title: 'Program prelungit',
    text: 'Luni – vineri până la 21:00',
  },
]

export default function TrustStrip() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-7 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <div className="flex items-start gap-3.5">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <item.icon size={19} strokeWidth={2.2} />
              </span>
              <div>
                <p className="font-display text-[16px] font-bold text-ink">{item.title}</p>
                {item.href ? (
                  <a href={item.href} className="text-[14px] font-bold text-accent hover:text-accentsoft">
                    {item.text}
                  </a>
                ) : (
                  <p className="text-[14px] text-inksoft">{item.text}</p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
