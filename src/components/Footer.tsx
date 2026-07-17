import { PHONE, PHONE_HREF, EMERGENCY, EMERGENCY_HREF } from './Navbar'

export default function Footer() {
  return (
    <footer className="bg-deep">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <a href="#top" className="flex items-center gap-2.5" aria-label="Kronvet — sus">
              <img src="/images/logo-mark.png" alt="" className="h-10 w-10 object-contain" />
              <span className="font-display text-[24px] font-bold tracking-tight">
                <span className="text-cream">kron</span>
                <span className="text-accent">vet</span>
              </span>
            </a>
            <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-cream/60">
              Cabinet Medical Veterinar · dr. Szabó Andrea Ágnes
              <br />
              Str. Veterinarului, Chinteni, jud. Cluj
            </p>
          </div>

          <div className="flex flex-col gap-2 text-[14px] text-cream/70">
            <span className="text-[12px] font-bold tracking-[0.2em] text-cream/40 uppercase">Contact</span>
            <a href={PHONE_HREF} className="font-semibold text-cream hover:text-accentsoft">
              Cabinet: {PHONE}
            </a>
            <a href={EMERGENCY_HREF} className="font-semibold text-cream hover:text-accentsoft">
              Urgențe: {EMERGENCY}
            </a>
            <span>L–V 10:00–21:00 · S–D 14:30–17:00</span>
          </div>

          <div className="flex flex-col gap-2 text-[14px] text-cream/70">
            <span className="text-[12px] font-bold tracking-[0.2em] text-cream/40 uppercase">Legal</span>
            <span>SC. KRONVET SRL</span>
            <span>Nr. Reg. Unic CMV 9387 / 15.12.2015</span>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-cream/10 pt-6 text-[13px] text-cream/45 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} SC. KRONVET SRL. Toate drepturile rezervate.</span>
          <a
            href="https://novusolv.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cream/80"
          >
            Design & automatizări · Novusolv
          </a>
        </div>
      </div>
    </footer>
  )
}
