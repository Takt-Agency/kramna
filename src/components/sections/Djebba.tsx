import { useReveal } from '../../three/hooks/useReveal'
import cover from '../../assets/cover.png'

export default function Djebba() {
  const ref = useReveal<HTMLElement>()
  return (
    <section
      id="djebba"
      ref={ref as any}
      className="relative py-14 md:py-20 lg:py-24 overflow-hidden text-ivory"
    >
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Plum wash on top to keep readable + on-brand */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(160deg, rgba(50, 16, 47, 0.88) 0%, rgba(75, 23, 74, 0.82) 60%, rgba(90, 30, 88, 0.78) 100%)',
        }}
      />

      {/* Ambient gold glow */}
      <div
        aria-hidden
        className="absolute -top-32 -right-24 h-[500px] w-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(217,182,118,0.22) 0%, rgba(217,182,118,0) 70%)',
        }}
      />

      <div className="container-x relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6" data-reveal>
            <span className="h-px w-8 bg-gold-soft" />
            <span
              className="eyebrow"
              style={{ color: 'var(--color-gold-soft)' }}
            >
              Djebba · Tunisie
            </span>
            <span className="h-px w-8 bg-gold-soft" />
          </div>

          <h2
            className="font-serif font-bold leading-[1.05] tracking-[-0.025em]"
            style={{
              color: 'var(--color-ivory)',
              fontSize: 'clamp(2.4rem, 5vw, 4.4rem)',
            }}
            data-reveal
          >
            Djebba.<br />
            <span className="italic font-semibold" style={{ color: 'var(--color-gold-soft)' }}>
              Un terroir,
            </span>{' '}
            une identité.
          </h2>

          <div
            className="my-8 mx-auto max-w-[200px] h-px"
            style={{
              backgroundImage:
                'linear-gradient(to right, transparent, var(--color-gold-soft) 30%, var(--color-gold-soft) 70%, transparent)',
            }}
            data-reveal
          />

          <p
            className="mx-auto text-ivory/85 text-[1.02rem] md:text-[1.08rem] leading-[1.9] max-w-2xl"
            data-reveal
          >
            Djebba inspire notre univers par ses paysages, ses figuiers et sa
            richesse agricole.
          </p>
          <p
            className="mx-auto mt-5 text-ivory/85 text-[1.02rem] md:text-[1.08rem] leading-[1.9] max-w-2xl"
            data-reveal
          >
            À travers Kramna, nous souhaitons mettre en lumière la figue de
            Djebba et raconter l’histoire d’un produit lié à son territoire.
          </p>

          <div
            className="mt-12 font-serif italic text-gold-soft text-xl md:text-2xl"
            data-reveal
          >
            « De notre terre à votre table. »
          </div>
        </div>
      </div>
    </section>
  )
}

