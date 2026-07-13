function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-mist/10 bg-deep pt-16 pb-8 text-mist">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="flex items-baseline gap-2">
              <span className="font-display text-xl font-medium tracking-[0.16em]">SERENITY</span>
              <span className="text-[10px] font-semibold tracking-[0.4em] text-coppersoft uppercase">Float</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed font-light text-mist/65">
              Primul centru de terapie prin plutire din Cluj-Napoca. Orașul rămâne afară.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://www.instagram.com/serenityfloatcluj/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-mist/60 transition hover:text-coppersoft">
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/SerenityFloat" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-mist/60 transition hover:text-coppersoft">
                <FacebookIcon />
              </a>
              <a href="https://www.youtube.com/@SerenityFloatCluj" target="_blank" rel="noreferrer" aria-label="YouTube" className="text-mist/60 transition hover:text-coppersoft">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold tracking-[0.26em] text-mist/50 uppercase">Explorează</h3>
            <ul className="space-y-2.5 text-sm font-light">
              {[
                ['Servicii', '#servicii'],
                ['Floating', '#floating'],
                ['Pachete', '#pachete'],
                ['Vouchere cadou', '#vouchere'],
                ['Întrebări frecvente', '#intrebari'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition hover:text-coppersoft">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold tracking-[0.26em] text-mist/50 uppercase">Contact</h3>
            <ul className="space-y-2.5 text-sm font-light">
              <li>Str. Eremia Grigorescu 56, Cluj-Napoca</li>
              <li>
                <a href="tel:+40772067981" className="transition hover:text-coppersoft">0772 067 981</a>
              </li>
              <li>
                <a href="mailto:contact@serenityfloat.ro" className="transition hover:text-coppersoft">
                  contact@serenityfloat.ro
                </a>
              </li>
            </ul>
            <ul className="mt-5 space-y-1.5 text-xs font-light text-mist/45">
              <li>
                <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noreferrer" className="transition hover:text-coppersoft">
                  ANPC – Soluționarea alternativă a litigiilor
                </a>
              </li>
              <li>
                <a
                  href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-coppersoft"
                >
                  SOL – Soluționarea online a litigiilor
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-mist/10 pt-7 text-xs font-light text-mist/45 sm:flex-row">
          <p>© 2026 Serenity Float – Relax Center, Cluj-Napoca</p>
          <p>
            Propunere de redesign ·{' '}
            <a href="https://novusolv.com" target="_blank" rel="noreferrer" className="text-coppersoft transition hover:text-copper">
              Novusolv
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
