import { useState } from 'react'
import './FAQ.css'

const FAQS = [
  {
    id: 'faq-1',
    question: 'What types of projects do you specialize in?',
    answer:
      'I specialize in full-stack web applications, NFT marketplaces, SaaS platforms, ERP systems, B2B/B2C travel platforms, and Web3 dApps. My expertise spans from elegant React frontends to robust Laravel/Node.js backends and blockchain smart contracts.',
  },
  {
    id: 'faq-2',
    question: 'Are you available for freelance work?',
    answer:
      "Yes! I'm open to freelance opportunities and collaborations. Feel free to reach out via the contact form below or directly at my email. I'm always excited to hear about new challenges and innovative ideas.",
  },
  {
    id: 'faq-3',
    question: 'What is your development process like?',
    answer:
      'My process starts with understanding requirements through close collaboration with stakeholders. I then design an architecture, set up CI/CD pipelines early, develop iteratively with frequent demos, conduct thorough API testing with Postman, and ensure production-ready deployment with robust monitoring.',
  },
  {
    id: 'faq-4',
    question: 'What makes you different from other developers?',
    answer:
      'My unique combination of full-stack web expertise and machine learning knowledge lets me build both traditional and decentralized applications. I focus on scalable architecture, clean code, and measurable outcomes — like reducing deployment time by 60% and maintaining 80% uptime across production environments.',
  },
]

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`} id={faq.id}>
      <button
        className="faq-question"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{faq.question}</span>
        <span className="faq-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div className="faq-answer">
        <p>{faq.answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="section faq-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Q&amp;A</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Find answers to common questions</p>
        </div>
        <div className="faq-list">
          {FAQS.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
