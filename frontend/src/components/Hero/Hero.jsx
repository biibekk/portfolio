import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const TYPED_WORDS = [
  'Software Engineer',
  'Web Developer',
  'Problem Solver',
  'ML Engineer',
]

const STATS = [
  { id: 'stat-projects', number: 20, suffix: '+', label: 'Projects Delivered' },
  { id: 'stat-uptime',   number: 80, suffix: '%', label: 'Uptime Achieved'    },
  { id: 'stat-speed',    number: 60, suffix: '%', label: 'Faster Deployments' },
]

const SOCIALS = {
  github:   'https://github.com/biibekk',
  linkedin: 'https://www.linkedin.com/in/bibek-shrestha-b95a422aa/',
  email:    'bibek.srestha20@gmail.com',
}

/* ── Typed text hook ── */
function useTyped(words) {
  const [text, setText] = useState('')
  const state = useRef({ wordIdx: 0, charIdx: 0, deleting: false })

  useEffect(() => {
    let timer
    function tick() {
      const { wordIdx, charIdx, deleting } = state.current
      const word = words[wordIdx]

      if (deleting) {
        setText(word.slice(0, charIdx - 1))
        state.current.charIdx--
      } else {
        setText(word.slice(0, charIdx + 1))
        state.current.charIdx++
      }

      let delay = deleting ? 60 : 100

      if (!deleting && state.current.charIdx === word.length) {
        delay = 1800
        state.current.deleting = true
      } else if (deleting && state.current.charIdx === 0) {
        state.current.deleting = false
        state.current.wordIdx = (wordIdx + 1) % words.length
        delay = 400
      }

      timer = setTimeout(tick, delay)
    }
    timer = setTimeout(tick, 600)
    return () => clearTimeout(timer)
  }, [words])

  return text
}

/* ── Stat count-up ── */
function StatCard({ stat }) {
  const [displayed, setDisplayed] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || animated.current) return
      animated.current = true
      const duration = 1400
      const step = 16
      const increment = stat.number / (duration / step)
      let current = 0
      const iv = setInterval(() => {
        current += increment
        if (current >= stat.number) { current = stat.number; clearInterval(iv) }
        setDisplayed(Math.round(current))
      }, step)
    }, { threshold: 0.5 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [stat.number])

  return (
    <div className="stat-card" id={stat.id} ref={ref}>
      <span className="stat-number">{displayed}{stat.suffix}</span>
      <span className="stat-label">{stat.label}</span>
    </div>
  )
}

/* ── Hero ── */
export default function Hero() {
  const typedText = useTyped(TYPED_WORDS)

  // Mouse parallax for orbs
  useEffect(() => {
    const orbs = [
      document.querySelector('.hero-orb-1'),
      document.querySelector('.hero-orb-2'),
      document.querySelector('.hero-orb-3'),
    ]
    const multipliers = [20, -15, 10]

    function onMouseMove(e) {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      orbs.forEach((orb, i) => {
        if (orb) orb.style.transform = `translate(${x * multipliers[i]}px, ${y * multipliers[i]}px)`
      })
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="hero-container">
        {/* Left */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for opportunities
          </div>

          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">Bibek Shrestha</h1>

          <div className="hero-title-wrapper" aria-label={`Full Stack ${typedText}`}>
            <span className="hero-title-prefix">Full Stack&nbsp;</span>
            <span className="hero-title-typed">{typedText}</span>
            <span className="cursor-blink" aria-hidden="true">|</span>
          </div>

          <p className="hero-description">
            I craft scalable web applications and software systems —
            from high-performance SaaS platforms to cutting-edge Web solutions.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary" id="get-in-touch-btn">
              <span>Get in Touch</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#projects" className="btn btn-outline" id="view-work-btn">
              <span>View Work</span>
            </a>
          </div>

          <div className="hero-socials">
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer"
               className="social-link" id="github-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer"
               className="social-link" id="linkedin-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href={`mailto:${SOCIALS.email}`} className="social-link" id="email-link" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="hero-visual">
          <div className="avatar-wrapper">
            <div className="avatar-ring" />
            <div className="avatar-ring avatar-ring-2" />
            <div className="avatar-circle">
              <div className="avatar-initials">BS</div>
            </div>
            <div className="floating-tag tag-1"><span className="tag-icon"></span> React</div>
            <div className="floating-tag tag-2"><span className="tag-icon"></span> Node.js</div>
            <div className="floating-tag tag-3"><span className="tag-icon"></span> Express.js</div>
            <div className="floating-tag tag-4"><span className="tag-icon"></span> JavaScript</div>
            <div className="floating-tag tag-5"><span className="tag-icon"></span> Machine Learning</div>
            <div className="floating-tag tag-6"><span className="tag-icon"></span> DSA</div>
          </div>

          <div className="stat-cards">
            {STATS.map((stat) => <StatCard key={stat.id} stat={stat} />)}
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-dot" />
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
