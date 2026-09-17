import { useState } from 'react'
import { Mail, MessageCircle, Instagram, Send } from 'lucide-react'
import { useReveal } from '../../three/hooks/useReveal'

export default function Contact() {
  const ref = useReveal<HTMLElement>()
  const [state, setState] = useState<'idle' | 'submitted'>('idle')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // NOTE: front-end only. Wire to a real backend before enabling in production.
    setState('submitted')
  }

  return (
    <section
      id="contact"
      ref={ref as any}
      className="relative py-32 md:py-40"
      style={{
        background:
          'linear-gradient(180deg, #e9dabf 0%, var(--color-ivory) 60%, #f4ead6 100%)',
      }}
    >
      <div className="container-x grid lg:grid-cols-12 gap-16">
        {/* Left */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-5" data-reveal>
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow">Contact</span>
          </div>
          <h2 className="display leading-[1.02]" data-reveal>
            Faites entrer le goût<br />
            de <span className="display-italic">Djebba</span> chez vous.
          </h2>
          <div className="rule-gold my-8 max-w-[200px]" data-reveal />
          <p className="text-plum-dark/80 text-lg leading-relaxed" data-reveal>
            Vous souhaitez découvrir Kramna, obtenir plus d’informations sur nos
            produits ou discuter d’une collaboration ? Notre équipe est à votre
            écoute.
          </p>

          <div className="mt-10 space-y-4 text-plum-dark/85">
            <div className="flex items-center gap-3" data-reveal>
              <Mail size={16} className="text-gold" />
              <span className="italic text-plum/50">contact@kramna — placeholder</span>
            </div>
            <div className="flex items-center gap-3" data-reveal>
              <MessageCircle size={16} className="text-gold" />
              <span className="italic text-plum/50">WhatsApp — placeholder</span>
            </div>
            <div className="flex items-center gap-3" data-reveal>
              <Instagram size={16} className="text-gold" />
              <span className="italic text-plum/50">@kramna — placeholder</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7" data-reveal>
          <form
            onSubmit={onSubmit}
            className="card-paper p-8 md:p-10 relative"
          >
            <div className="paper-grain absolute inset-0" />
            <div className="relative grid md:grid-cols-2 gap-6">
              <Field label="Nom" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <div className="md:col-span-2">
                <label className="block text-[0.62rem] tracking-[0.32em] uppercase text-plum/60 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full bg-transparent border border-plum/20 focus:border-plum/60 rounded-sm px-4 py-3 text-plum outline-none transition-colors"
                />
              </div>
              <div className="md:col-span-2 flex flex-wrap items-center gap-6 justify-between">
                {state === 'submitted' ? (
                  <div className="text-plum">
                    <span className="font-serif italic">Merci.</span>
                    <span className="ml-2 text-plum-dark/70">
                      Votre message est bien noté (formulaire en placeholder).
                    </span>
                  </div>
                ) : (
                  <button type="submit" className="btn-primary">
                    Envoyer <Send size={14} />
                  </button>
                )}
                <span className="text-[0.6rem] tracking-[0.3em] uppercase text-plum/40">
                  Formulaire non connecté · backend à configurer
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label className="block text-[0.62rem] tracking-[0.32em] uppercase text-plum/60 mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border border-plum/20 focus:border-plum/60 rounded-sm px-4 py-3 text-plum outline-none transition-colors"
      />
    </div>
  )
}
