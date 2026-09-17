import { Leaf, Beaker, Wheat, Heart } from 'lucide-react'
import { useReveal } from '../../three/hooks/useReveal'
import produitsImg from '../../assets/produits images.png'

const highlights = [
  { icon: <Leaf size={18} />, label: '100% Naturel' },
  { icon: <Beaker size={18} />, label: 'Sans conservateurs' },
  { icon: <Wheat size={18} />, label: 'Riche en fibres' },
  { icon: <Heart size={18} />, label: 'Source d’antioxydants' },
]

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export default function Product() {
  const ref = useReveal<HTMLElement>()
  return (
    <section
      id="produits"
      ref={ref as any}
      className="relative py-14 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* LEFT — product image */}
        <div className="lg:col-span-6" data-reveal>
          <div className="relative w-full max-w-[600px] mx-auto lg:mx-0 aspect-[3/2] overflow-hidden rounded-sm">
            <div className="absolute inset-0 border border-gold/50 pointer-events-none z-10" />
            <div className="absolute inset-2 border border-plum/15 pointer-events-none z-10" />
            <img
              src={produitsImg}
              alt="Kramna — Figues séchées du soleil, 1 kg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT — product info */}
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3 mb-6" data-reveal>
            <span className="h-px w-6 bg-gold" />
            <span className="eyebrow">Nos produits</span>
          </div>

          <h2
            className="font-serif font-bold text-plum leading-[1.05] tracking-[-0.025em]"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)' }}
            data-reveal
          >
            Figues Séchées<br />
            <span className="italic font-semibold">du Soleil.</span>
          </h2>

          <div className="rule-gold my-6 max-w-[180px]" data-reveal />

          <p
            className="text-plum-dark/80 text-[1rem] md:text-[1.05rem] leading-[1.8] max-w-xl"
            data-reveal
          >
            Des figues soigneusement séchées au soleil de Djebba,
            naturellement gourmandes. Un produit qui célèbre l’équilibre entre
            douceur, texture et caractère du terroir tunisien.
          </p>

          {/* Highlights grid */}
          <div className="mt-8 grid grid-cols-2 gap-3 max-w-lg" data-reveal>
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex items-center gap-3 px-4 py-3 rounded-sm"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(249, 240, 214, 0.85) 0%, rgba(243, 233, 215, 0.9) 100%)',
                  border: '1px solid rgba(181, 138, 67, 0.28)',
                }}
              >
                <span className="grid place-items-center h-9 w-9 rounded-full shrink-0 text-gold"
                  style={{
                    background: 'rgba(75, 23, 74, 0.06)',
                    border: '1px solid rgba(181, 138, 67, 0.3)',
                  }}
                >
                  {h.icon}
                </span>
                <span className="text-plum text-[0.82rem] tracking-tight font-semibold font-serif">
                  {h.label}
                </span>
              </div>
            ))}
          </div>

          {/* Meta info */}
          <div
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-plum-dark/75 text-sm"
            data-reveal
          >
            <div className="flex items-center gap-2">
              <span className="text-[0.62rem] tracking-[0.32em] uppercase text-plum/50">
                Origine
              </span>
              <span className="font-serif italic">Djebba, Tunisie</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[0.62rem] tracking-[0.32em] uppercase text-plum/50">
                Format
              </span>
              <span className="font-serif italic">1 kg · 0,5 kg</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[0.62rem] tracking-[0.32em] uppercase text-plum/50">
                Qualité
              </span>
              <span className="font-serif italic">Tunisienne</span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6" data-reveal>
            <a
              href="https://wa.me/21655331023?text=Bonjour%20Kramna%2C%20je%20souhaite%20commander%20les%20Figues%20S%C3%A9ch%C3%A9es%20de%20Djebba."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-serif text-[0.95rem] font-semibold text-ivory transition-all duration-500 ease-out shadow-[0_12px_30px_-14px_rgba(75,23,74,0.55)] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-16px_rgba(75,23,74,0.6)]"
              style={{ background: 'var(--color-plum)' }}
            >
              <span
                className="grid place-items-center h-7 w-7 rounded-full text-plum shrink-0 transition-colors duration-500 group-hover:bg-gold-soft"
                style={{ background: 'var(--color-gold-soft)' }}
              >
                <WhatsAppIcon />
              </span>
              Commander sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
