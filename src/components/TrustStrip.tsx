const ITEMS = [
  ['Rezervare online', 'în calendarul live, oricând'],
  ['Str. Eremia Grigorescu 56', 'Cluj-Napoca'],
  ['Apă filtrată în 3 etape', 'înainte de fiecare oaspete'],
  ['Standarde occidentale', 'primul centru de floating din Cluj'],
] as const

export default function TrustStrip() {
  return (
    <section className="border-b border-deep/10 bg-deep" aria-label="De ce să ai încredere">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-6 px-6 py-8 lg:grid-cols-4">
        {ITEMS.map(([title, sub]) => (
          <div key={title} className="border-l border-mist/15 pl-4">
            <p className="text-[13px] font-semibold tracking-[0.06em] text-mist">{title}</p>
            <p className="mt-1 text-xs font-light text-mist/55">{sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
