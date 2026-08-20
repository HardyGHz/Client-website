import Reveal from './Reveal'

const TEAM = [
  { name: 'Dr. Cristina Orga', role: 'Administrator cabinet · Master în Reabilitare Orală' },
  { name: 'Dr. Anca Labunet', role: 'Specialist Ortodonție și Ortopedie Dento-Facială' },
  { name: 'Dr. Vlad Opriș', role: 'Medic Stomatolog Generalist' },
  { name: 'Dr. Gheorghe Tamaș', role: 'Specialist Chirurgie Dento-Alveolară' },
  { name: 'Dr. Roxana Muntean', role: 'Specialist Endodonție' },
  { name: 'Dr. Cristian Zirbo', role: 'Medic Stomatolog Generalist' },
]

function initials(name: string) {
  return name
    .replace('Dr.', '')
    .trim()
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
}

export default function Team() {
  return (
    <section id="echipa" className="bg-[var(--color-surface)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <span className="text-xs font-medium tracking-[0.2em] text-[var(--color-accent)] uppercase">
            Echipa
          </span>
          <h2 className="mt-3 font-display text-3xl text-[var(--color-deep)] sm:text-4xl">
            6 medici, 6 specializări, sub același acoperiș.
          </h2>
          <p className="mt-4 text-[var(--color-text-soft)]">
            De la ortodonție la chirurgie dento-alveolară, alegeți direct medicul potrivit pentru
            problema dvs., nu doar „un cabinet".
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((doc, i) => (
            <Reveal key={doc.name} delay={i * 0.06}>
              <div className="group rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg)] p-6 transition-colors hover:border-[var(--color-accent)]/40">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-deep)] font-display text-lg text-white">
                  {initials(doc.name)}
                </div>
                <div className="mt-4 font-display text-lg text-[var(--color-deep)]">{doc.name}</div>
                <div className="mt-1 text-sm text-[var(--color-text-soft)]">{doc.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
