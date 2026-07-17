import Reveal from './Reveal'

// Valódi fotók a Google Maps profilról — a vadállat-mentés a cabinet aláírása.
const RESCUES = [
  {
    src: '/images/rescue-iepuras.jpg',
    alt: 'Pui de iepure de câmp hrănit cu biberonul',
    caption: 'Pui de iepure, hrănit cu biberonul',
    rotate: '-rotate-2',
  },
  {
    src: '/images/rescue-ciocanitoare.jpg',
    alt: 'Ciocănitoare ținută cu grijă în mănușă',
    caption: 'Ciocănitoare adusă de un localnic',
    rotate: 'rotate-1',
  },
  {
    src: '/images/rescue-vanturel.jpg',
    alt: 'Pui de vânturel ținut în palmă',
    caption: 'Pui de vânturel căzut din cuib',
    rotate: '-rotate-1',
  },
  {
    src: '/images/rescue-arici.jpg',
    alt: 'Doi arici într-un culcuș la cabinet',
    caption: 'Doi arici, iernați la cabinet',
    rotate: 'rotate-2',
  },
  {
    src: '/images/rescue-cioara.jpg',
    alt: 'Pui de cioară recuperat în curtea cabinetului',
    caption: 'Pui de cioară, în recuperare',
    rotate: '-rotate-1',
  },
  {
    src: '/images/pisica-cabinet.jpg',
    alt: 'Pisică plimbându-se liberă prin cabinet',
    caption: 'Un rezident al cabinetului',
    rotate: 'rotate-1',
  },
]

export default function RescueGallery() {
  return (
    <section id="salvari" className="overflow-hidden bg-cream scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <p className="text-[13px] font-bold tracking-[0.28em] text-teal uppercase">Prieteni salvați</p>
          <h2 className="font-display mt-3 max-w-2xl text-[34px] leading-[1.1] font-bold text-ink md:text-[46px]">
            Nu doar câini și pisici.
          </h2>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-inksoft">
            Iepuri de câmp, ciocănitori, vânturei, arici — când cineva găsește un animal sălbatic rănit lângă
            Chinteni, de multe ori aici ajunge. Fotografiile sunt din cabinet, nu din arhivă de stock.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8">
          {RESCUES.map((r, i) => (
            <Reveal key={r.src} delay={i * 0.07} className={i === 4 ? 'md:translate-y-6' : i % 3 === 1 ? 'md:-translate-y-4' : ''}>
              <figure
                className={`${r.rotate} group rounded-md bg-surface p-2.5 pb-3.5 shadow-lg shadow-ink/10 transition-transform duration-300 hover:rotate-0 hover:scale-[1.03] md:p-3 md:pb-4`}
              >
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={r.src}
                    alt={r.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-2.5 text-center text-[12px] font-semibold text-inksoft md:text-[13px]">
                  {r.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
