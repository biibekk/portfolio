import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'FAQs',       href: '#faq' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    function onScroll() {
      setScrolled(window.scrollY > 30)
      let current = ''
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav id="navbar" className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          <span className="logo-bracket">&lt;</span>BS<span className="logo-bracket">/&gt;</span>
        </a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map(({ label, href }) => {
            const section = href.replace('#', '')
            return (
              <li key={label}>
                <a
                  href={href}
                  className={`nav-link${activeSection === section ? ' active' : ''}`}
                  onClick={handleLinkClick}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          id="hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
