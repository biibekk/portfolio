import { useRef } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'
import './Skills.css'

const SKILL_CATEGORIES = [
  {
    id: 'skill-languages',
    icon: '⚙️',
    title: 'Languages & Frameworks',
    skills: ['JavaScript', 'PHP', 'React.js', 'Next.js', 'Node.js', 'Express.js'],
  },
  {
    id: 'skill-ui',
    icon: '🎨',
    title: 'UI & Animation Libraries',
    skills: ['Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'skill-databases',
    icon: '🗄️',
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    id: 'skill-ml',
    icon: '🤖',
    title: 'Data Science & ML',
    skills: ['Machine Learning', 'Python', 'Scikit-Learn'],
  },
  {
    id: 'skill-tools',
    icon: '🛠️',
    title: 'Tools & Platforms',
    skills: ['Git', 'Postman', 'Figma', 'VS Code'],
  },
]

export default function Skills() {
  const gridRef = useRef(null)
  useScrollReveal(gridRef)

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">My Skillset</h2>
          <p className="section-subtitle">Technologies I work with every day</p>
        </div>

        <div className="skills-grid" ref={gridRef}>
          {SKILL_CATEGORIES.map((cat) => (
            <div className="skill-category reveal" key={cat.id} id={cat.id}>
              <div className="skill-category-header">
                {/* <div className="skill-category-icon">{cat.icon}</div> */}
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-pills">
                {cat.skills.map((skill) => (
                  <span className="skill-pill" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
