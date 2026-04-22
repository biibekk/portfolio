import { useState, useRef } from 'react'
import './Contact.css'

const SOCIALS = [
  {
    id: 'email',
    label: 'Email',
    value: 'bibek.srestha20@gmail.com',
    href: 'mailto:bibek.srestha20@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    )
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/biibekk',
    href: 'https://github.com/biibekk',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    )
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/bibek-shrestha',
    href: 'https://www.linkedin.com/in/bibek-shrestha-b95a422aa/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  }
]

const ErrorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)

const FormGroup = ({ label, id, name, type = "text", value, onChange, error, placeholder, rows }) => (
  <div className={`form-group ${error ? 'has-error' : ''}`}>
    <label htmlFor={id}>{label}</label>
    {type === 'textarea' ? (
      <textarea id={id} name={name} rows={rows} placeholder={placeholder} value={value} onChange={onChange} />
    ) : (
      <input type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    )}
    {error && (
      <span className="form-error-msg">
        <ErrorIcon />
        {error}
      </span>
    )}
  </div>
)

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [currentStep, setCurrentStep] = useState('')
  const formRef = useRef(null)

  const validate = () => {
    const newErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validate()) {
      if (formRef.current) {
        formRef.current.style.animation = 'none'
        void formRef.current.offsetWidth
        formRef.current.style.animation = 'shake 0.4s ease'
      }
      return
    }

    setSending(true)
    
    try {
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      const data = await response.json()
      
      if (data.success) {
        for (const step of data.steps) {
          setCurrentStep(step)
          await new Promise(resolve => setTimeout(resolve, 800))
        }

        setFormData({ name: '', email: '', subject: '', message: '' })
        setErrors({})
        setSending(false)
        setCurrentStep('')
        setSent(true)
        setTimeout(() => setSent(false), 5000)
      } else {
        throw new Error('Server error')
      }
    } catch (err) {
      console.error('Submission error:', err)
      setCurrentStep('Failed to connect to server. Please try again.')
      setTimeout(() => {
        setSending(false)
        setCurrentStep('')
      }, 3000)
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Let's Talk</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's build something great together</p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-wrapper">
            <h3>Send a Message</h3>
            <form className="contact-form" id="contact-form" onSubmit={handleSubmit} ref={formRef} noValidate>
              <FormGroup 
                label="Full Name" 
                id="contact-name" 
                name="name" 
                placeholder="Full Name" 
                value={formData.name} 
                onChange={handleChange} 
                error={errors.name} 
              />

              <FormGroup 
                label="Email Address" 
                id="contact-email" 
                name="email" 
                type="email" 
                placeholder="username@example.com" 
                value={formData.email} 
                onChange={handleChange} 
                error={errors.email} 
              />

              <FormGroup 
                label="Subject (Optional)" 
                id="contact-subject" 
                name="subject" 
                placeholder="Project Inquiry" 
                value={formData.subject} 
                onChange={handleChange} 
              />

              <FormGroup 
                label="Message" 
                id="contact-message" 
                name="message" 
                type="textarea" 
                rows="5" 
                placeholder="Tell me about your project..." 
                value={formData.message} 
                onChange={handleChange} 
                error={errors.message} 
              />

              <button type="submit" className="btn btn-primary btn-full" id="submit-contact" disabled={sending}>
                <span>{sending ? 'Sending…' : 'Send Message'}</span>
                {!sending && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                )}
              </button>
              
              {sending && currentStep && (
                <div className="form-process">
                  <div className="process-spinner"></div>
                  <span>{currentStep}</span>
                </div>
              )}
              
              {sent && (
                <div className="form-success" role="alert">
                  Message received! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          <div className="contact-info">
            <h3>Or reach out directly</h3>
            <div className="contact-items">
              {SOCIALS.map(link => (
                <a key={link.id} href={link.href} target={link.id !== 'email' ? "_blank" : undefined} rel={link.id !== 'email' ? "noopener noreferrer" : undefined} className="contact-item" id={`contact-${link.id}-link`}>
                  <div className="contact-item-icon">{link.icon}</div>
                  <div>
                    <span className="contact-item-label">{link.label}</span>
                    <span className="contact-item-value">{link.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="availability-card">
              <div className="availability-indicator">
                <span className="avail-dot" />
                Currently Available
              </div>
              <p>Open to full-time roles, freelance projects, and exciting collaborations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
