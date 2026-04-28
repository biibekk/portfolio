import { useRef } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'
import './Experience.css'

const EXPERIENCES = [
  {
    id: 'exp-movenleap',
    company: 'Move N Leap',
    role: 'Freelance Web Developer',
    initials: 'ML',
    current: false,
    achievements: [
      'Developed and deployed a mobile-first landing page using React, improving accessibility and user engagement',
      'Built RESTful APIs with Node.js and Express, integrated MongoDB Atlas, and implemented email automation using Resend API',
      'Generated 30–50 qualified enquiries from 50–100 visits, contributing to increased student enrollments',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Resend API'],
  },
]

export default function Experience() {
  const listRef = useRef(null)
  useScrollReveal(listRef)

  return (
    <section id="experience" className="section experience-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Career</span>
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">Building products that make a difference</p>
        </div>

        <div className="timeline" ref={listRef}>
          {EXPERIENCES.map((exp) => (
            <div className="timeline-item reveal" key={exp.id} id={exp.id}>
              <div className="timeline-marker">
                <div className="marker-dot" />
              </div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div className="timeline-company-info">
                    <div className="company-icon">{exp.initials}</div>
                    <div>
                      <h3 className="timeline-company">{exp.company}</h3>
                      <p className="timeline-role">{exp.role}</p>
                    </div>
                  </div>
                  {exp.current && (
                    <span className="timeline-badge current">Current</span>
                  )}
                </div>

                {exp.achievements.length > 0 && (
                  <ul className="timeline-achievements">
                    {exp.achievements.map((a, i) => <li key={i}>{a}</li>)}
                  </ul>
                )}

                <div className="timeline-tech">
                  {exp.tech.map((t) => (
                    <span className="tech-pill" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
