import Reveal from './Reveal'

export default function About() {
  return (
    <section id="despre" className="bg-deep scroll-mt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <img
              src="/images/consult-caine-pisica.jpg"
              alt="Un câine și o pisică pe masa de consultație la Kronvet"
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-2xl shadow-black/40"
            />
            <img
              src="/images/pisoi-ochi-albastri.jpg"
              alt="Pisoi cu ochi albaștri îngrijit la cabinet"
              loading="lazy"
              className="absolute -right-4 -bottom-10 hidden w-[46%] rotate-2 rounded-xl border-4 border-deepsoft object-cover shadow-xl md:block"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[13px] font-bold tracking-[0.28em] text-tealsoft uppercase">Despre cabinet</p>
          <h2 className="font-display mt-3 text-[34px] leading-[1.1] font-bold text-cream md:text-[44px]">
            „Andrea" — așa încep majoritatea recenziilor.
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-[16px] leading-relaxed text-cream/75">
            <p>
              Dr. Szabó Andrea Ágnes conduce cabinetul Kronvet din Chinteni din 2015. Oamenii nu vin doar pentru
              vaccinuri — vin pentru că aici animalul lor e tratat ca al ei.
            </p>
            <p>
              În curtea cabinetului trăiesc animale salvate, iar după operații pacienții sunt „păziți" de Tigrișor,
              motanul asistent. Nu e marketing — e pur și simplu felul în care arată un cabinet condus de cineva care
              iubește ce face.
            </p>
          </div>

          <figure className="mt-8 border-l-2 border-accent pl-5">
            <blockquote className="text-[17px] leading-relaxed text-cream italic">
              „O profesionistă și o mare iubitoare de animale. A salvat-o pe pisicuța noastră Scai!"
            </blockquote>
            <figcaption className="mt-2 text-[13px] font-semibold text-cream/50">
              Ana Maria — recenzie Google, 5★
            </figcaption>
          </figure>

          <dl className="mt-10 grid grid-cols-3 gap-6">
            {[
              ['10+', 'ani în Chinteni'],
              ['89', 'recenzii Google'],
              ['0', 'recenzii de 1–2 stele'],
            ].map(([n, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-[34px] font-bold text-accentsoft md:text-[40px]">{n}</dd>
                <dd className="text-[13px] font-semibold text-cream/60">{label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
