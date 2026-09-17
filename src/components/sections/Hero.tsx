import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowRight, Play, Leaf, Sun, Heart, Mouse } from 'lucide-react'
import cover from '../../assets/cover.png'

export default function Hero() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from('[data-hero-anim]', {
        y: 20,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.09,
        delay: 0.15,
      })
      gsap.from('[data-hero-image]', {
        scale: 1.06,
        opacity: 0,
        duration: 1.6,
        ease: 'power3.out',
        delay: 0.25,
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={root}
      className="relative w-full overflow-hidden paper-grain min-h-[100svh]"
    >
      {/* Ambient warm background — semi-transparent to let global botanical show through */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(1200px 700px at 65% 40%, rgba(249, 237, 208, 0.75) 0%, rgba(243, 233, 215, 0.55) 55%, rgba(230, 211, 181, 0.75) 100%)',
        }}
      />

      {/* Corner botanical engravings */}
      <CornerOrnaments />

      {/* Image layer with soft gradient fade on every edge */}
      <div className="pointer-events-none absolute inset-0" data-hero-image>
        <img
          src={cover}
          alt="Figues séchées de Djebba avec paysage tunisien"
          className="absolute inset-0 w-full h-full object-cover object-center md:object-right"
          style={{
            WebkitMaskImage:
              'radial-gradient(120% 100% at 78% 55%, #000 25%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.35) 65%, transparent 85%)',
            maskImage:
              'radial-gradient(120% 100% at 78% 55%, #000 25%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.35) 65%, transparent 85%)',
          }}
        />

        {/* Top ivory wash */}
        <div
          className="absolute inset-x-0 top-0 h-[30%]"
          style={{
            background:
              'linear-gradient(to bottom, var(--color-ivory) 0%, rgba(243,233,215,0.55) 55%, rgba(243,233,215,0) 100%)',
          }}
        />

        {/* Bottom ivory wash */}
        <div
          className="absolute inset-x-0 bottom-0 h-[35%]"
          style={{
            background:
              'linear-gradient(to top, var(--color-ivory) 0%, rgba(243,233,215,0.6) 55%, rgba(243,233,215,0) 100%)',
          }}
        />

        {/* Left ivory wash (mobile-first: cover more for readability) */}
        <div
          className="absolute inset-y-0 left-0 w-full md:w-[62%]"
          style={{
            background:
              'linear-gradient(to right, var(--color-ivory) 0%, rgba(243,233,215,0.9) 30%, rgba(243,233,215,0.55) 60%, rgba(243,233,215,0.2) 85%, rgba(243,233,215,0) 100%)',
          }}
        />
      </div>

      {/* Main grid — copy overlays the image */}
      <div className="container-x pt-24 md:pt-32 lg:pt-40 pb-28 md:pb-32 relative grid lg:grid-cols-12 gap-6 lg:gap-6 items-center min-h-[100svh]">
        {/* Left copy column */}
        <div className="lg:col-span-7 relative z-10 lg:pl-6">
          {/* Soft radial backdrop behind the copy for readability */}
          <div
            className="absolute -inset-x-4 -inset-y-6 md:-inset-x-8 md:-inset-y-10 -z-10 pointer-events-none"
            aria-hidden
            style={{
              background:
                'radial-gradient(70% 60% at 40% 50%, rgba(243,233,215,0.85) 0%, rgba(243,233,215,0.5) 55%, rgba(243,233,215,0) 100%)',
            }}
          />

          <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6" data-hero-anim>
            <span className="h-px w-5 md:w-6 bg-gold" />
            <span className="eyebrow text-[0.6rem] md:text-[0.72rem]">
              Kramna · Figues séchées de Djebba
            </span>
            <span className="hidden md:inline h-px w-6 bg-gold" />
          </div>

          <h1
            className="font-serif font-bold text-plum leading-[1] md:leading-[0.98] tracking-[-0.025em]"
            style={{ fontSize: 'clamp(2.4rem, 8.5vw, 6.2rem)' }}
            data-hero-anim
          >
            Le goût{' '}
            <span className="italic font-semibold">authentique</span> de Djebba.
          </h1>

          <p
            className="mt-6 md:mt-8 max-w-md text-plum-dark/80 text-[0.95rem] md:text-[1.05rem] leading-relaxed"
            data-hero-anim
          >
            Des figues séchées, un terroir, une histoire. Une expérience
            inspirée des saveurs du terroir tunisien et de la richesse de
            Djebba.
          </p>

          <div
            className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-5 sm:gap-6 md:gap-8"
            data-hero-anim
          >
            <a href="#produits" className="btn-primary w-full sm:w-auto justify-center sm:justify-start">
              Découvrir Kramna <ArrowRight size={16} />
            </a>
            <a
              href="#story"
              className="group inline-flex items-center gap-3 text-plum text-[0.68rem] md:text-[0.72rem] tracking-[0.26em] md:tracking-[0.28em] uppercase self-start"
            >
              <span className="grid place-items-center h-9 w-9 rounded-full border border-plum/30 group-hover:bg-plum group-hover:text-ivory transition-colors duration-500">
                <Play size={12} className="ml-0.5 fill-current" />
              </span>
              Explorer notre histoire
            </a>
          </div>

          {/* Feature cards */}
          <div
            className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-3 max-w-2xl gap-3 md:gap-4"
            data-hero-anim
          >
            <FeatureCard icon={<Leaf size={20} />} label="Origine" hint="Djebba" />
            <FeatureCard icon={<Sun size={20} />} label="Nature" hint="Préservée" />
            <FeatureCard icon={<Heart size={20} />} label="Savoir-faire" hint="Authentique" />
          </div>
        </div>

        {/* Right spacer only on desktop */}
        <div className="hidden lg:block lg:col-span-5" />
      </div>

      {/* Mouse scroll indicator */}
      <div
        className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-plum/70"
        data-hero-anim
      >
        <Mouse size={20} strokeWidth={1.2} />
        <span className="text-[0.55rem] md:text-[0.6rem] tracking-[0.4em] uppercase">
          Scroller
        </span>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  label,
  hint,
}: {
  icon: React.ReactNode
  label: string
  hint: string
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-md px-4 py-5 md:px-5 md:py-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(75,23,74,0.5)] cursor-default"
      style={{
        background:
          'linear-gradient(180deg, rgba(249, 240, 214, 0.85) 0%, rgba(243, 233, 215, 0.9) 100%)',
        border: '1px solid rgba(181, 138, 67, 0.28)',
      }}
    >
      {/* Gold hairline top */}
      <span className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      {/* Corner ornament */}
      <span className="absolute top-3 right-3 h-1 w-1 rounded-full bg-gold/70" />

      <div className="flex items-start gap-3 md:gap-4">
        <span
          className="grid place-items-center h-10 w-10 md:h-11 md:w-11 rounded-full shrink-0 transition-colors duration-500 group-hover:bg-plum group-hover:text-gold-soft"
          style={{
            background: 'rgba(75, 23, 74, 0.06)',
            color: 'var(--color-gold)',
            border: '1px solid rgba(181, 138, 67, 0.3)',
          }}
        >
          {icon}
        </span>
        <div className="flex flex-col leading-tight">
          <span className="text-plum text-[0.68rem] md:text-[0.72rem] tracking-[0.28em] uppercase font-semibold">
            {label}
          </span>
          <span className="font-serif italic text-plum-dark/70 text-sm md:text-base mt-1.5">
            {hint}
          </span>
        </div>
      </div>
    </div>
  )
}

function CornerOrnaments() {
  return (
    <>
      <svg
        aria-hidden
        viewBox="0 0 200 300"
        className="absolute -top-4 -left-4 md:left-0 w-28 md:w-56 opacity-25 md:opacity-30 text-plum pointer-events-none"
      >
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M20 300 C 40 200, 80 140, 120 80" />
          <path d="M40 280 q 30 -40 55 -55" />
          <path
            d="M35 220 C 20 200, 22 170, 45 165 C 60 185, 55 210, 35 220 Z"
            fill="currentColor"
            fillOpacity="0.06"
          />
          <path
            d="M75 160 C 60 150, 55 120, 80 115 C 95 128, 92 152, 75 160 Z"
            fill="currentColor"
            fillOpacity="0.05"
          />
          <path
            d="M110 110 C 95 100, 92 78, 115 72 C 130 84, 128 104, 110 110 Z"
            fill="currentColor"
            fillOpacity="0.05"
          />
          <ellipse cx="50" cy="240" rx="6" ry="9" />
          <ellipse cx="90" cy="180" rx="5" ry="8" />
          <circle cx="128" cy="65" r="4" />
        </g>
      </svg>
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="absolute bottom-24 right-6 hidden lg:block w-28 opacity-20 text-gold pointer-events-none"
      >
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M180 20 C 140 80, 120 100, 60 140" />
          <ellipse cx="150" cy="70" rx="10" ry="18" transform="rotate(30 150 70)" />
          <ellipse cx="110" cy="110" rx="9" ry="16" transform="rotate(20 110 110)" />
          <circle cx="60" cy="140" r="5" />
        </g>
      </svg>
    </>
  )
}
