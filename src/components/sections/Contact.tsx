import { Mail, ArrowUpRight } from 'lucide-react'
import { useReveal } from '../../three/hooks/useReveal'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export default function Contact() {
  const ref = useReveal<HTMLElement>()
  return (
    <section
      id="contact"
      ref={ref as any}
      className="relative py-14 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="container-x">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-6" data-reveal>
            <span className="h-px w-6 bg-gold" />
            <span className="eyebrow">Contactez-nous</span>
            <span className="h-px w-6 bg-gold" />
          </div>
          <h2
            className="font-serif font-bold text-plum leading-[1.05] tracking-[-0.025em]"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)' }}
            data-reveal
          >
            Faites entrer le goût<br />
            de <span className="italic font-semibold">Djebba</span> chez vous.
          </h2>
          <div className="rule-gold my-6 mx-auto max-w-[180px]" data-reveal />
          <p
            className="text-plum-dark/80 text-[1rem] md:text-[1.05rem] leading-[1.8]"
            data-reveal
          >
            Une question, une commande, une collaboration ? Écrivez-nous —
            notre équipe est à votre écoute.
          </p>
        </div>

        {/* Channels grid — WhatsApp + Email only */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto">
          <a
            href="https://wa.me/21655331023?text=Bonjour%20Kramna%2C%20je%20souhaite%20vous%20contacter."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 md:p-8 rounded-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(75,23,74,0.45)]"
            style={{
              background:
                'linear-gradient(180deg, rgba(249, 240, 214, 0.95) 0%, rgba(243, 233, 215, 0.95) 100%)',
              border: '1px solid rgba(181, 138, 67, 0.35)',
            }}
          >
            <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <span
                  className="grid place-items-center h-14 w-14 rounded-full shrink-0 text-gold transition-colors duration-500 group-hover:bg-plum group-hover:text-gold-soft"
                  style={{
                    background: 'rgba(75, 23, 74, 0.06)',
                    border: '1px solid rgba(181, 138, 67, 0.35)',
                  }}
                >
                  <WhatsAppIcon />
                </span>
                <div className="flex flex-col">
                  <span className="text-[0.62rem] tracking-[0.32em] uppercase text-plum/60 font-semibold">
                    WhatsApp
                  </span>
                  <span className="font-serif italic text-plum text-xl md:text-2xl mt-2 leading-tight">
                    +216 55 331 023
                  </span>
                  <span className="text-plum-dark/70 text-sm mt-2">
                    Réponse rapide, message pré-rempli.
                  </span>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-plum/50 group-hover:text-plum group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0"
              />
            </div>
          </a>

          <a
            href="mailto:contact@kramna.com"
            className="group relative p-6 md:p-8 rounded-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(75,23,74,0.45)]"
            style={{
              background:
                'linear-gradient(180deg, rgba(249, 240, 214, 0.95) 0%, rgba(243, 233, 215, 0.95) 100%)',
              border: '1px solid rgba(181, 138, 67, 0.35)',
            }}
          >
            <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <span
                  className="grid place-items-center h-14 w-14 rounded-full shrink-0 text-gold transition-colors duration-500 group-hover:bg-plum group-hover:text-gold-soft"
                  style={{
                    background: 'rgba(75, 23, 74, 0.06)',
                    border: '1px solid rgba(181, 138, 67, 0.35)',
                  }}
                >
                  <Mail size={22} />
                </span>
                <div className="flex flex-col">
                  <span className="text-[0.62rem] tracking-[0.32em] uppercase text-plum/60 font-semibold">
                    Email
                  </span>
                  <span className="font-serif italic text-plum text-xl md:text-2xl mt-2 leading-tight break-all">
                    contact@kramna.com
                  </span>
                  <span className="text-plum-dark/70 text-sm mt-2">
                    Pour toute demande ou collaboration.
                  </span>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-plum/50 group-hover:text-plum group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
