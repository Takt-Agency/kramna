import { useReveal } from '../../three/hooks/useReveal'
import { values } from '../../data/site'

const symbols = ['circle', 'leaf', 'diamond', 'sun'] as const
type Symbol = (typeof symbols)[number]

function ValueSymbol({ kind }: { kind: Symbol }) {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10 text-gold" aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="1.1">
        {kind === 'circle' && (
          <>
            <circle cx="20" cy="20" r="12" />
            <circle cx="20" cy="20" r="4" fill="currentColor" />
          </>
        )}
        {kind === 'leaf' && (
          <>
            <path d="M8 30 C 12 12, 28 8, 32 12 C 30 26, 18 32, 8 30 Z" />
            <path d="M12 26 L 28 12" />
          </>
        )}
        {kind === 'diamond' && (
          <>
            <path d="M20 6 L 34 20 L 20 34 L 6 20 Z" />
            <path d="M14 20 L 26 20 M 20 14 L 20 26" />
          </>
        )}
        {kind === 'sun' && (
          <>
            <circle cx="20" cy="20" r="7" />
            {Array.from({ length: 8 }).map((_, i) => {
              const a = (i / 8) * Math.PI * 2
              const x1 = 20 + Math.cos(a) * 10
              const y1 = 20 + Math.sin(a) * 10
              const x2 = 20 + Math.cos(a) * 15
              const y2 = 20 + Math.sin(a) * 15
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
            })}
          </>
        )}
      </g>
    </svg>
  )
}

export default function Values() {
  const ref = useReveal<HTMLElement>()
  return (
    <section
      ref={ref as any}
      className="relative py-32 md:py-40 bg-ivory"
    >
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5" data-reveal>
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow">Nos valeurs</span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="display" data-reveal>
            Ce qui nous <span className="display-italic">guide.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="relative p-8 border-t border-plum/15"
              data-reveal
            >
              <ValueSymbol kind={symbols[i % symbols.length]} />
              <h3 className="font-serif text-2xl text-plum mt-6">{v.title}</h3>
              <p className="mt-4 text-plum-dark/75 leading-relaxed text-sm">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
