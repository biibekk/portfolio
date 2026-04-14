import { useRef } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'
import './Education.css'

const EDUCATION = [
  {
    id: 'edu-btech',
    institution: 'Jaypee Institute of Information Technology, Noida',
    degree: 'Bachelor of Technology in Computer Science',
    duration: '2022 — Present',
    score: 'CGPA: 8.4/10',
    details: [
      'Specialized in Web Technologies and Data Structures',
      'Relevant Coursework: DBMS, Operating Systems, Computer Networks, Software Engineering',
      'Active member of the Coding Club and Open Source Community'
    ],
    initials: 'BT'
  },
  {
    id: 'edu-hsc',
    institution: 'The Millennium School, Noida - XII',
    degree: 'Science (PCM)',
    duration: '2021 — 2023',
    score: '96%',
    details: [
      'Completed Higher Secondary Education with a focus on Mathematics and Science',
      'Achieved distinction in Mathematics and Physics'
    ],
    initials: 'HS'
  },
  {
    id: 'edu-ssc',
    institution: 'The Millennium School, Noida - X',
    degree: 'Class 10 (SSC)',
    duration: '2019 — 2021',
    score: '98.2%',
    details: [
      'Completed Secondary Education with distinction',
      'Awarded for academic excellence and extra-curricular participation'
    ],
    initials: 'SS'
  }
]

export default function Education() {
  const listRef = useRef(null)
  useScrollReveal(listRef)

  return (
    <section id="education" className="section education-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Learning</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic foundations and certifications</p>
        </div>

        <div className="edu-timeline" ref={listRef}>
          {EDUCATION.map((edu) => (
            <div className="edu-item reveal" key={edu.id}>
              <div className="edu-marker">
                <div className="marker-dot" />
              </div>
              <article className="edu-card">
                <div className="edu-header">
                  <div className="edu-institution-info">
                    <div className="edu-icon">{edu.initials}</div>
                    <div>
                      <h3 className="edu-name">{edu.institution}</h3>
                      <p className="edu-degree">{edu.degree}</p>
                    </div>
                  </div>
                  <div className="edu-meta">
                    <span className="edu-duration">{edu.duration}</span>
                    <span className="edu-score">{edu.score}</span>
                  </div>
                </div>

                <ul className="edu-details">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
