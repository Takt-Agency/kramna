import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import Wordmark from '../ui/Wordmark'
import { nav } from '../../data/site'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-plum/10 shadow-[0_10px_30px_-20px_rgba(75,23,74,0.35)]' : ''
      }`}
      style={{
        background: scrolled ? 'var(--color-ivory)' : 'transparent',
      }}
    >
      <div className="container-x flex items-center justify-between py-3.5 md:py-5">
        <Wordmark small={true} />

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative font-serif text-[1.02rem] font-semibold tracking-tight text-plum/85 hover:text-plum transition-colors"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-serif text-[0.95rem] font-semibold transition-colors duration-500 text-ivory"
          style={{ background: 'var(--color-plum)' }}
        >
          Nous contacter
          <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-ivory/15">→</span>
        </a>

        <button
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-plum border border-plum/15 bg-ivory/60 active:bg-ivory transition-colors"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[64px] bottom-0 overflow-y-auto transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'var(--color-ivory)' }}
      >
        <div className="container-x py-10 flex flex-col gap-6">
          {nav.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="font-serif text-3xl font-bold text-plum active:text-gold transition-colors border-b border-plum/10 pb-4"
              style={{
                transitionDelay: open ? `${i * 60}ms` : '0ms',
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(12px)',
              }}
            >
              {n.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary self-start mt-2"
          >
            Nous contacter <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </header>
  )
}
