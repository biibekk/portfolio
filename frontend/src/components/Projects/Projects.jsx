import { useRef } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'
import './Projects.css'

const PROJECTS = [
  {
    id: 'project-krishimitra',
    icon: '🌱',
    name: 'KrishiMitra - Smart Farming Assistant',
    description:
      'An AI-powered decision support system providing personalized crop recommendations using real-time soil data, weather forecasts, and market trends. Integrates satellite data, IoT, and ML models for yield insights.',
    tech: ['React.js', 'Node.js', 'Python', 'ML', 'Satellite APIs', 'MongoDB'],
    github: 'https://github.com/Shiv-rm/KrishiMitra',
    live: '#',
  },
  {
    id: 'project-movenleap',
    icon: '🚀',
    name: 'MovenLeap – Lead Capture & Automation Platform',
    description:
      'A full-stack lead management platform designed to capture and streamline client enquiries efficiently. Implements REST APIs, form validation, and cloud-based data storage with Google Sheets integration.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Google Sheets API', 'Render'],
    github: '#',
    live: '#',
  },
  {
    id: 'project-network-modeling',
    icon: '🌐',
    name: 'Computer Networks Modeling & Analysis',
    description:
      'An interactive platform for simulating and analyzing computer network structures. Visualizes network topologies, routing paths, and performance metrics using graph-based models.',
    tech: ['React.js', 'Node.js', 'Cytoscape.js', 'Graph Theory', 'Graph Algorithms', 'REST APIs'],
    github: '#',
    live: '#',
  },
]

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)
const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

export default function Projects() {
  const gridRef = useRef(null)
  useScrollReveal(gridRef)

  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my notable work</p>
        </div>

        <div className="projects-grid" ref={gridRef}>
          {PROJECTS.map((proj) => (
            <article className="project-card reveal" key={proj.id} id={proj.id}>
              <div className="project-card-glow" />
              <div className="project-header">
                {/* <div className="project-icon">{proj.icon}</div> */}
                <div className="project-links">
                  <a href={proj.github} className="project-link" aria-label="View source">
                    <GithubIcon />
                  </a>
                  <a href={proj.live} className="project-link" aria-label="Live demo">
                    <ExternalIcon />
                  </a>
                </div>
              </div>
              <h3 className="project-name">{proj.name}</h3>
              <p className="project-description">{proj.description}</p>
              <div className="project-tech">
                {proj.tech.map((t) => (
                  <span className="tech-tag" key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
