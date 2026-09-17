import { useReveal } from '../../three/hooks/useReveal'
import { recipes } from '../../data/site'
import { ArrowUpRight } from 'lucide-react'

const gradients = [
  'linear-gradient(135deg, #4b174a 0%, #76543d 100%)',
  'linear-gradient(135deg, #b58a43 0%, #4b174a 100%)',
  'linear-gradient(135deg, #58634a 0%, #32102f 100%)',
  'linear-gradient(135deg, #76543d 0%, #b58a43 100%)',
]

export default function Recipes() {
  const ref = useReveal<HTMLElement>()
  return (
    <section
      ref={ref as any}
      className="relative py-32 md:py-40"
      style={{ background: 'linear-gradient(180deg, var(--color-ivory) 0%, #e9dabf 100%)' }}
    >
      <div className="container-x">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5" data-reveal>
              <span className="h-px w-8 bg-gold" />
              <span className="eyebrow">Inspirations</span>
            </div>
            <h2 className="display" data-reveal>
              La figue, <span className="display-italic">autrement.</span>
            </h2>
          </div>
          <p className="max-w-md text-plum-dark/75 text-base leading-relaxed" data-reveal>
            Quelques pistes pour laisser la figue de Djebba s’inviter dans vos
            tables et vos moments partagés.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5">
          {recipes.map((r, i) => (
            <article
              key={r.title}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm card-paper cursor-pointer"
              data-reveal
            >
              {/* Background gradient placeholder */}
              <div
                className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-105"
                style={{ background: gradients[i % gradients.length] }}
              />
              {/* Botanical overlay */}
              <svg
                viewBox="0 0 200 260"
                className="absolute inset-0 w-full h-full text-ivory/25 mix-blend-overlay"
                aria-hidden
              >
                <g fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M40 240 C 60 180, 90 140, 130 90" />
                  <ellipse cx="70" cy="180" rx="10" ry="18" transform="rotate(-30 70 180)" />
                  <ellipse cx="100" cy="140" rx="9" ry="16" transform="rotate(-20 100 140)" />
                  <circle cx="130" cy="90" r="8" />
                </g>
              </svg>

              <div className="absolute inset-0 flex flex-col justify-between p-6 text-ivory">
                <div className="flex items-center justify-between">
                  <span className="text-[0.6rem] tracking-[0.35em] uppercase opacity-80">
                    {r.tag}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl leading-tight">{r.title}</h3>
                  <div
                    className="rule-gold my-4 max-w-[60px]"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, transparent, var(--color-gold-soft) 30%, var(--color-gold-soft) 70%, transparent)',
                    }}
                  />
                  <p className="text-ivory/85 text-sm leading-relaxed">{r.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-[0.62rem] tracking-[0.32em] uppercase text-plum/40" data-reveal>
          Visuels placeholders — à remplacer par la photographie éditoriale finale
        </div>
      </div>
    </section>
  )
}
