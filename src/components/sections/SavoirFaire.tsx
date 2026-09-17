import { useReveal } from '../../three/hooks/useReveal'
import { Clock, Flame, Leaf } from 'lucide-react'

const ingredients = [
  'Chriha (galette tunisienne)',
  'Figues séchées Kramna',
  'Miel de fleurs d’oranger',
  'Fromage frais / ricotta',
  'Amandes torréfiées',
  'Menthe fraîche',
  'Zeste de citron',
  'Huile d’olive douce',
]

const steps = [
  {
    n: '01',
    title: 'Préparer la Chriha',
    body:
      'Réchauffer légèrement la Chriha à la poêle pour révéler son moelleux, sans matière grasse.',
  },
  {
    n: '02',
    title: 'Tailler les figues',
    body:
      'Émincer 4 à 5 figues Kramna en fines lamelles pour libérer toute leur douceur.',
  },
  {
    n: '03',
    title: 'Composer',
    body:
      'Étaler le fromage frais, disposer les figues, les amandes, un filet de miel et la menthe.',
  },
  {
    n: '04',
    title: 'Servir',
    body:
      'Terminer avec un zeste de citron et un trait d’huile d’olive. À déguster tiède.',
  },
]

export default function SavoirFaire() {
  const ref = useReveal<HTMLElement>()
  return (
    <section
      id="savoir-faire"
      ref={ref as any}
      className="relative py-14 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="container-x">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6" data-reveal>
            <span className="h-px w-6 bg-gold" />
            <span className="eyebrow">Recette healthy</span>
            <span className="h-px w-6 bg-gold" />
          </div>
          <h2
            className="font-serif font-bold text-plum leading-[1.05] tracking-[-0.025em]"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)' }}
            data-reveal
          >
            Chriha aux figues,<br />
            <span className="italic font-semibold">le goût du matin.</span>
          </h2>
          <div className="rule-gold my-6 mx-auto max-w-[180px]" data-reveal />
          <p
            className="text-plum-dark/80 text-[1rem] md:text-[1.05rem] leading-[1.8] mx-auto"
            data-reveal
          >
            Une revisite légère et gourmande d’un classique tunisien : la
            <span className="italic"> Chriha</span>, sublimée par la douceur
            profonde des figues séchées Kramna.
          </p>

          {/* Meta chips */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3" data-reveal>
            <Chip icon={<Clock size={14} />} label="10 min" />
            <Chip icon={<Flame size={14} />} label="Facile" />
            <Chip icon={<Leaf size={14} />} label="Sans sucre ajouté" />
          </div>
        </div>

        {/* Recipe body */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Ingredients */}
          <div className="lg:col-span-5" data-reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[0.6rem] tracking-[0.32em] uppercase text-ivory font-semibold" style={{ background: 'var(--color-plum)' }}>
                Ingrédients
              </span>
              <span className="h-px flex-1 bg-plum/15" />
            </div>
            <div
              className="p-6 md:p-8 rounded-sm"
              style={{
                background:
                  'linear-gradient(180deg, rgba(249, 240, 214, 0.9) 0%, rgba(243, 233, 215, 0.9) 100%)',
                border: '1px solid rgba(181, 138, 67, 0.28)',
              }}
            >
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {ingredients.map((i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-plum-dark/85 text-[0.95rem] leading-relaxed"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Steps */}
          <div className="lg:col-span-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[0.6rem] tracking-[0.32em] uppercase text-ivory font-semibold" style={{ background: 'var(--color-plum)' }}>
                Préparation
              </span>
              <span className="h-px flex-1 bg-plum/15" />
            </div>
            <ol className="space-y-4">
              {steps.map((s) => (
                <li
                  key={s.n}
                  data-reveal
                  className="relative flex gap-4 md:gap-5 p-5 md:p-6 rounded-sm"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(249, 240, 214, 0.9) 0%, rgba(243, 233, 215, 0.9) 100%)',
                    border: '1px solid rgba(181, 138, 67, 0.28)',
                  }}
                >
                  <span
                    className="grid place-items-center h-11 w-11 md:h-12 md:w-12 rounded-full shrink-0 font-serif font-bold text-plum text-lg"
                    style={{
                      background: 'rgba(75, 23, 74, 0.06)',
                      border: '1px solid rgba(181, 138, 67, 0.4)',
                    }}
                  >
                    {s.n}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-plum text-lg md:text-xl leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-plum-dark/75 text-sm md:text-[0.95rem] leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

function Chip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[0.78rem] tracking-tight text-plum font-serif font-semibold"
      style={{
        background: 'rgba(249, 240, 214, 0.9)',
        border: '1px solid rgba(181, 138, 67, 0.35)',
      }}
    >
      <span className="text-gold">{icon}</span>
      {label}
    </span>
  )
}
