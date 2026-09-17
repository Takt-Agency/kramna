import { useState } from 'react'
import { Instagram, Facebook, Mail } from 'lucide-react'
import logoWhite from '../../assets/logo white.png'
import LegalDialog from '../ui/LegalDialog'

type Legal = 'mentions' | 'confidentialite' | null

const nav = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Notre histoire', href: '#story' },
  { label: 'Djebba', href: '#djebba' },
  { label: 'Produits', href: '#produits' },
  { label: 'Savoir-faire', href: '#savoir-faire' },
]

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export default function Footer() {
  const [legal, setLegal] = useState<Legal>(null)
  return (
    <footer
      id="contact"
      className="relative text-ivory pt-16 md:pt-20 pb-8 overflow-hidden"
      style={{
        background:
          'linear-gradient(160deg, var(--color-plum-dark) 0%, var(--color-plum) 60%, #5a1e58 100%)',
      }}
    >
      {/* Gold top rule */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-soft to-transparent" />

      {/* Gold glow */}
      <div
        aria-hidden
        className="absolute -top-24 -left-24 h-[400px] w-[400px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(217,182,118,0.18) 0%, rgba(217,182,118,0) 70%)',
        }}
      />

      <div className="container-x relative grid lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Brand block */}
        <div className="lg:col-span-5">
          <img
            src={logoWhite}
            alt="Kramna"
            className="h-14 md:h-16 w-auto object-contain"
          />
          <p className="mt-6 max-w-md text-ivory/75 font-serif italic text-lg leading-relaxed">
            « Le goût authentique de la Tunisie. »
          </p>
          <p className="mt-4 max-w-md text-ivory/60 text-sm leading-relaxed">
            Kramna — Figues séchées de Djebba, cultivées avec soin dans le
            respect d’un terroir singulier.
          </p>

          {/* Socials */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="grid place-items-center h-10 w-10 rounded-full border border-ivory/25 text-ivory/80 hover:bg-ivory/10 hover:text-gold-soft transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="grid place-items-center h-10 w-10 rounded-full border border-ivory/25 text-ivory/80 hover:bg-ivory/10 hover:text-gold-soft transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://wa.me/21655331023"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid place-items-center h-10 w-10 rounded-full border border-ivory/25 text-ivory/80 hover:bg-ivory/10 hover:text-gold-soft transition-colors"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="lg:col-span-3">
          <div className="text-[0.62rem] tracking-[0.35em] uppercase text-gold-soft mb-5">
            Navigation
          </div>
          <ul className="space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="font-serif text-ivory/85 hover:text-gold-soft transition-colors"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-4">
          <div className="text-[0.62rem] tracking-[0.35em] uppercase text-gold-soft mb-5">
            Contact
          </div>
          <ul className="space-y-3.5 text-ivory/80">
            <li>
              <a
                href="https://wa.me/21655331023?text=Bonjour%20Kramna%2C%20je%20souhaite%20commander%20les%20Figues%20S%C3%A9ch%C3%A9es%20de%20Djebba."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 hover:text-gold-soft transition-colors"
              >
                <span className="grid place-items-center h-8 w-8 rounded-full bg-ivory/5 border border-ivory/15">
                  <WhatsAppIcon />
                </span>
                <span className="font-serif">+216 55 331 023</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@kramna.com"
                className="inline-flex items-center gap-3 hover:text-gold-soft transition-colors"
              >
                <span className="grid place-items-center h-8 w-8 rounded-full bg-ivory/5 border border-ivory/15">
                  <Mail size={14} />
                </span>
                <span className="font-serif italic">contact@kramna.com</span>
              </a>
            </li>
            <li className="text-ivory/60 text-sm pt-2">
              Djebba, Tunisie
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-x mt-14 pt-6 border-t border-ivory/15 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.72rem] text-ivory/50">
        <div>© {new Date().getFullYear()} Kramna. Tous droits réservés.</div>
        <div className="flex items-center gap-6 text-xs">
          <button
            onClick={() => setLegal('mentions')}
            className="italic hover:text-gold-soft transition-colors"
          >
            Mentions légales
          </button>
          <button
            onClick={() => setLegal('confidentialite')}
            className="italic hover:text-gold-soft transition-colors"
          >
            Politique de confidentialité
          </button>
        </div>
      </div>

      <LegalDialog kind={legal} onClose={() => setLegal(null)} />
    </footer>
  )
}
