import { useEffect } from 'react'
import { X } from 'lucide-react'

type Kind = 'mentions' | 'confidentialite'

interface Props {
  kind: Kind | null
  onClose: () => void
}

export default function LegalDialog({ kind, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = kind ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [kind, onClose])

  if (!kind) return null

  const content = kind === 'mentions' ? mentions : confidentialite

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-title"
    >
      {/* Backdrop */}
      <button
        aria-label="Fermer"
        onClick={onClose}
        className="absolute inset-0 bg-plum-dark/70 cursor-default"
      />

      {/* Panel */}
      <div
        className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-sm bg-ivory shadow-[0_40px_100px_-30px_rgba(50,16,47,0.6)]"
        style={{ border: '1px solid rgba(181, 138, 67, 0.35)' }}
      >
        {/* Gold hairline */}
        <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

        {/* Header */}
        <div className="flex items-start justify-between px-8 md:px-12 pt-10 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-6 bg-gold" />
              <span className="eyebrow">Kramna · Légal</span>
            </div>
            <h2
              id="legal-title"
              className="font-serif font-bold text-plum text-2xl md:text-3xl leading-tight"
            >
              {content.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Fermer"
            className="grid place-items-center h-10 w-10 rounded-full border border-plum/20 text-plum hover:bg-plum hover:text-ivory transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="rule-gold mx-8 md:mx-12" />

        {/* Body */}
        <div className="px-8 md:px-12 py-6 overflow-y-auto" style={{ maxHeight: 'calc(85vh - 200px)' }}>
          {content.blocks.map((b, i) => (
            <div key={i} className="mb-8">
              <h3 className="font-serif font-bold text-plum text-lg md:text-xl mb-3">
                {b.heading}
              </h3>
              {b.paragraphs.map((p, j) => (
                <p
                  key={j}
                  className="text-[1rem] leading-[1.75] mb-3 font-normal"
                  style={{ color: 'var(--color-plum-dark)' }}
                >
                  {p}
                </p>
              ))}
              {b.list && (
                <ul className="mt-3 space-y-2.5">
                  {b.list.map((item, k) => (
                    <li
                      key={k}
                      className="flex items-start gap-3 text-[1rem] leading-relaxed font-normal"
                      style={{ color: 'var(--color-plum-dark)' }}
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <p
            className="text-xs italic mt-10 pb-4"
            style={{ color: 'rgba(75, 23, 74, 0.55)' }}
          >
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>
    </div>
  )
}

/* ----------------------------- Content ----------------------------- */

const mentions = {
  title: 'Mentions légales',
  blocks: [
    {
      heading: 'Éditeur du site',
      paragraphs: [
        'Le site kramna.com est édité par la marque Kramna, dédiée à la valorisation des figues séchées de Djebba, Tunisie.',
      ],
      list: [
        'Marque : Kramna',
        'Origine : Djebba, Tunisie',
        'Contact : contact@kramna.com',
        'WhatsApp : +216 55 331 023',
      ],
    },
    {
      heading: 'Hébergement',
      paragraphs: [
        'Le site est hébergé sur une infrastructure sécurisée. Les informations complètes de l’hébergeur peuvent être fournies sur demande écrite à contact@kramna.com.',
      ],
    },
    {
      heading: 'Propriété intellectuelle',
      paragraphs: [
        'L’ensemble des contenus présents sur ce site (textes, illustrations, photographies, logos, identité visuelle) est la propriété exclusive de la marque Kramna ou de ses partenaires. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est strictement interdite.',
      ],
    },
    {
      heading: 'Responsabilité',
      paragraphs: [
        'Les informations diffusées sur ce site sont présentées à titre indicatif. Kramna s’efforce d’assurer l’exactitude des contenus mais ne peut être tenue responsable des erreurs, omissions ou de l’indisponibilité temporaire du site.',
      ],
    },
    {
      heading: 'Contact',
      paragraphs: [
        'Pour toute question relative au site ou à la marque : contact@kramna.com — WhatsApp +216 55 331 023.',
      ],
    },
  ],
}

const confidentialite = {
  title: 'Politique de confidentialité',
  blocks: [
    {
      heading: 'Préambule',
      paragraphs: [
        'La présente politique décrit la manière dont Kramna collecte, utilise et protège les données personnelles des visiteurs du site kramna.com.',
      ],
    },
    {
      heading: 'Données collectées',
      paragraphs: [
        'Kramna ne collecte que les données strictement nécessaires à la réponse à vos demandes ou à l’amélioration de votre expérience.',
      ],
      list: [
        'Nom et adresse email lorsque vous nous contactez.',
        'Contenu de vos messages via email ou WhatsApp.',
        'Données techniques anonymes de navigation (statistiques d’audience).',
      ],
    },
    {
      heading: 'Utilisation des données',
      paragraphs: [
        'Vos données sont utilisées uniquement pour :',
      ],
      list: [
        'Répondre à vos demandes de renseignements ou de commande.',
        'Améliorer la qualité du site et de nos services.',
        'Vous informer de nos actualités si vous en avez fait la demande explicite.',
      ],
    },
    {
      heading: 'Partage et conservation',
      paragraphs: [
        'Kramna ne vend ni ne loue vos données personnelles à des tiers. Les informations sont conservées pour la durée strictement nécessaire à leur finalité, puis supprimées ou anonymisées.',
      ],
    },
    {
      heading: 'Vos droits',
      paragraphs: [
        'Conformément à la réglementation applicable, vous disposez d’un droit d’accès, de rectification, de suppression et d’opposition sur vos données. Pour exercer ces droits, contactez-nous à contact@kramna.com.',
      ],
    },
    {
      heading: 'Cookies',
      paragraphs: [
        'Le site peut utiliser des cookies techniques nécessaires à son bon fonctionnement et, éventuellement, des cookies de mesure d’audience anonymisés. Aucun cookie publicitaire n’est déposé sans votre consentement.',
      ],
    },
  ],
}
