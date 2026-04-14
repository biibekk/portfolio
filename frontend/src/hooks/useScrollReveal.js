import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to a container ref.
 * Every direct child with class `reveal` gets `.visible` added
 * with a staggered delay based on its index.
 */
export default function useScrollReveal(containerRef, deps = []) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const targets = container.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const siblings = [...entry.target.parentElement.children]
          const idx = siblings.indexOf(entry.target)
          setTimeout(() => entry.target.classList.add('visible'), idx * 80)
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12 }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
