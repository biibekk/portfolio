import { useState } from 'react'
import './FAQ.css'

const FAQS = [
  {
    id: 'faq-1',
    question: 'What types of projects do you specialize in?',
    answer:
      'I specialize in building full-stack applications and intelligent AI-driven systems. My expertise ranges from developing high-performance React frontends and Node.js backends to engineering complex machine learning pipelines and algorithmic simulations. I focus on creating scalable, data-centric solutions that solve real-world problems.',
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
      'What makes me unique is my ability to seamlessly integrate  Machine Learning into production-ready full-stack architectures. I don’t just build interfaces; I engineer intelligent systems with measurable impact. I bridge the gap between complex algorithmic research and user-centric deployment.',
      // 'What makes me unique is my ability to seamlessly integrate  Machine Learning into production-ready full-stack architectures. I don’t just build interfaces; I engineer intelligent systems with measurable impact—like achieving 98% accuracy in predictive models for agriculture or driving a 50 conversion rate in lead generation for business platforms. I bridge the gap between complex algorithmic research and user-centric deployment.',
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
