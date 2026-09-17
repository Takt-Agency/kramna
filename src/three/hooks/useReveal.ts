import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Attaches a scroll-triggered reveal to the returned ref.
 * Selector-based inner reveals via `data-reveal="item"` children.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  opts: { y?: number; stagger?: number; start?: string } = {},
) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = el.querySelectorAll<HTMLElement>('[data-reveal]')
    if (!items.length) return
    const ctx = gsap.context(() => {
      gsap.from(items, {
        y: opts.y ?? 28,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: opts.stagger ?? 0.12,
        scrollTrigger: {
          trigger: el,
          start: opts.start ?? 'top 78%',
        },
      })
    }, el)
    return () => ctx.revert()
  }, [opts.y, opts.stagger, opts.start])
  return ref
}
