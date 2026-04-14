import { useRef } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'
import './Experience.css'

const EXPERIENCES = [
  {
    id: 'exp-smartb',
    company: 'SmartB Solutions',
    role: 'Software Engineer',
    initials: 'SB',
    current: true,
    achievements: [],
    tech: ['React.js', 'Node.js', 'Next.js', 'TypeScript'],
  },
  {
    id: 'exp-hashtag',
    company: 'Hashtag Web',
    role: 'Software Engineer',
    initials: 'HW',
    current: false,
    achievements: [
      'Delivered 20+ diverse, high-impact projects including NFT Marketplaces, B2B/B2C Travel Platforms, SaaS solutions, and ERP systems',
      'Built scalable full-stack applications using React.js, Node.js, Next.js, Laravel, achieving 80% uptime across production environments',
      'Designed and implemented robust RESTful APIs with comprehensive testing using Postman',
      'Applied blockchain expertise in Solidity and NFT development, implementing ERC721, ERC721A standards',
      'Implemented CI/CD pipelines, reducing deployment time by 60%',
      'Collaborated with cross-functional teams to exceed client expectations',
    ],
    tech: ['React.js', 'Laravel', 'Solidity', 'ERC721', 'CI/CD'],
  },
  {
    id: 'exp-datalines',
    company: 'DataLines',
    role: 'Associate Software Engineer',
    initials: 'DL',
    current: false,
    achievements: [
      'Built responsive and visually engaging frontends for NFT-based projects',
      'Integrated blockchain APIs with frontend applications',
    ],
    tech: ['React.js', 'Web3.js', 'NFT APIs'],
  },
  {
    id: 'exp-billions',
    company: 'Billions Health',
    role: 'Associate Software Engineer',
    initials: 'BH',
    current: false,
    achievements: [
      'Developed secure data handling solutions implementing advanced hashing techniques',
      'Created unique NFT metadata generation system ensuring data integrity',
      'Developed neumorphic UI components using React for medical professionals',
    ],
    tech: ['React.js', 'Blockchain', 'Neumorphic UI'],
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
