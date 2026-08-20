const FACEBOOK_URL = 'https://www.facebook.com/p/Crisdental-Floresti-100054664500494/'

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[var(--color-deep)] pt-2 pb-10 text-[var(--color-bg)]/70">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 border-t border-white/10 py-10 md:flex-row md:items-center">
          <div>
            <div className="font-display text-xl text-[var(--color-bg)] italic">Crisdental</div>
            <p className="mt-2 max-w-sm text-sm">
              Cabinet stomatologic · Strada Cetății nr. 25, Florești, Cluj
            </p>
          </div>

          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Crisdental"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-[var(--color-claysoft)] hover:text-[var(--color-claysoft)]"
          >
            <FacebookIcon />
          </a>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a
              href="https://anpc.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-bg)]"
            >
              ANPC
            </a>
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-bg)]"
            >
              Soluționarea Alternativă a Litigiilor (SAL/SOL)
            </a>
            <span>Protecția datelor (GDPR)</span>
          </div>
          <p>
            Propunere de redesign ·{' '}
            <a href="https://novusolv.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-bg)]">
              Novusolv
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
