import { useReveal } from '../../three/hooks/useReveal'
import storyImg from '../../assets/image notre histoire.png'

export default function Story() {
  const ref = useReveal<HTMLElement>()
  return (
    <section
      id="story"
      ref={ref as any}
      className="relative py-14 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* LEFT — image */}
        <div className="lg:col-span-6" data-reveal>
          <div className="relative w-full max-w-[560px] mx-auto lg:mx-0 aspect-[4/5] overflow-hidden rounded-sm">
            {/* Gold frame */}
            <div className="absolute inset-0 border border-gold/50 pointer-events-none z-10" />
            <div className="absolute inset-2 border border-plum/15 pointer-events-none z-10" />
            <img
              src={storyImg}
              alt="Notre histoire — femme présentant les figues séchées Kramna dans le paysage de Djebba"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT — text */}
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3 mb-6" data-reveal>
            <span className="h-px w-6 bg-gold" />
            <span className="eyebrow">Notre histoire</span>
          </div>

          <h2
            className="font-serif font-bold text-plum leading-[1.05] tracking-[-0.025em]"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)' }}
            data-reveal
          >
            Une histoire née<br />
            au <span className="italic font-semibold">cœur</span> de la Tunisie.
          </h2>

          <div className="rule-gold my-8 max-w-[180px]" data-reveal />

          <p
            className="text-plum-dark/80 text-[1rem] md:text-[1.05rem] leading-[1.8] max-w-xl"
            data-reveal
          >
            Kramna est une marque dédiée à la figue séchée tunisienne, inspirée
            par la richesse du terroir de Djebba et par le savoir-faire associé
            à ce fruit emblématique.
          </p>
          <p
            className="mt-5 text-plum-dark/80 text-[1rem] md:text-[1.05rem] leading-[1.8] max-w-xl"
            data-reveal
          >
            Nous souhaitons valoriser une origine authentique et présenter la
            figue sous un regard contemporain, tout en conservant le lien avec
            la terre, la nature et la culture tunisienne.
          </p>
        </div>
      </div>
    </section>
  )
}
