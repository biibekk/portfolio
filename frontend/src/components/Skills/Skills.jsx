import { useRef } from 'react'
import './Skills.css'

const TECHNICAL_INTERESTS = [
  {
    title: 'Scalable Systems',
    description: 'Designing and building systems that can grow and adapt',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="8" height="8" rx="2" />
        <rect x="14" y="2" width="8" height="8" rx="2" />
        <rect x="2" y="14" width="8" height="8" rx="2" />
        <rect x="14" y="14" width="8" height="8" rx="2" />
      </svg>
    ),
    color: '#1e1b4b'
  },
  {
    title: 'Application Development',
    description: 'Creating robust and user-friendly web applications',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-laptop"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path></svg>
    ),
    color: '#064e3b'
  },
  {
    title: 'New Technologies',
    description: 'Exploring and implementing cutting-edge tech solutions',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
    ),
    color: '#4c1d35'
  },
  {
    title: 'AI Applications',
    description: 'Building intelligent solutions using AI and ML technologies',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
    ),
    color: '#451a03'
  }
]

const NON_TECHNICAL_INTERESTS = [
  {
    title: 'Martial Arts & Gymnastics',
    description: 'Training and coaching in Taekwondo, discipline, technique, and physical fitness',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fist"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path><path d="M14 10V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path></svg>
    ),
    color: '#2a1111'
  },
  {
    title: 'Outdoor Sports',
    description: 'Playing volleyball, badminton, and other team sports',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volleyball w-6 h-6"><path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4"></path><path d="M12 12a12.6 12.6 0 0 1-8.7 5"></path><path d="M16.8 13.6a16.55 16.55 0 0 1-9 7.5"></path><path d="M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10"></path><path d="M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5"></path><circle cx="12" cy="12" r="10"></circle></svg>
    ),
    color: '#064e3b'
  },
  {
    title: 'Anime & Movies',
    description: 'Exploring storytelling through animation and global cinema',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tv w-6 h-6"><rect width="20" height="15" x="2" y="7" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
    ),
    color: '#1e1b4b'
  }
  // {
  //   title: 'Personal Finance',
  //   description: 'Learning about investments and financial planning',
  //   icon: (
  //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coins"><circle cx="8" cy="8" r="6"></circle><path d="M18 8a6 6 0 0 0-12 0"></path><circle cx="18" cy="16" r="6"></circle><path d="M8 10a6 6 0 0 0 12 0"></path></svg>
  //   ),
  //   color: '#2a112a'
  // },
  // {
  //   title: 'Tech News',
  //   description: 'Staying updated with latest technology trends and updates',
  //   icon: (
  //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-newspaper"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6Z"></path></svg>
  //   ),
  //   color: '#11222a'
  // }
]

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    skills: [
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', color: '#17263dff' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#1e293b' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#332b00' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', color: '#17263dff' },
    ]
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#111827' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#064e3b' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: '#3b558dff' },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#32243dff' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#1e1b4b' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#064e3b' },
    ]
  },
  {
    title: 'Data Science & ML',
    skills: [
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: '#2a1a11' },
      { name: 'Scikit-Learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg', color: '#111827' },
      { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', color: '#1e1b4b' },
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', color: '#603646ff' },
    ]
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#2a1111' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#acacc9ff' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', color: '#2a1a11' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: '#2a112a' },
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <div className="section-header fade-in">
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">My Skillset</h2>
          <p className="section-subtitle">Technologies and interests I explore every day</p>
        </div>

        {/* Row 1: Tech Stack */}
        <div className="skills-stack-row">
          <h2 className="row-title fade-in">Tech Stack</h2>
          <div className="stack-categories-grid">
            {SKILL_CATEGORIES.map((category, idx) => (
              <div
                className="stack-category-card animate-on-load"
                key={idx}
                style={{ '--delay': `${idx * 0.1}s` }}
              >
                <h3>{category.title}</h3>
                <div className="category-skills-grid">
                  {category.skills.map((skill, sIdx) => (
                    <div className="tech-item" key={sIdx}>
                      <div className="tech-icon-box" style={{ backgroundColor: skill.color || '#0f172a' }}>
                        <img src={skill.icon} alt={skill.name} loading="lazy" />
                      </div>
                      <span className="tech-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Interests (Combined Technical and Non-Technical) */}
        <div className="skills-interests-combined-row">
          <div className="interests-column">
            <h2 className="row-title fade-in">Technical Interests</h2>
            <div className="interests-vertical-grid">
              {TECHNICAL_INTERESTS.map((interest, idx) => (
                <div
                  className="interest-card animate-on-load"
                  key={idx}
                  style={{ '--card-bg': interest.color, '--delay': `${(idx + 5) * 0.1}s` }}
                >
                  <div className="interest-icon-wrapper">
                    {interest.icon}
                  </div>
                  <div className="interest-content">
                    <h3>{interest.title}</h3>
                    <p>{interest.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="interests-column">
            <h2 className="row-title fade-in">Non-Technical Interests</h2>
            <div className="interests-vertical-grid">
              {NON_TECHNICAL_INTERESTS.map((interest, idx) => (
                <div
                  className="interest-card animate-on-load"
                  key={idx}
                  style={{ '--card-bg': interest.color, '--delay': `${(idx + 9) * 0.1}s` }}
                >
                  <div className="interest-icon-wrapper">
                    {interest.icon}
                  </div>
                  <div className="interest-content">
                    <h3>{interest.title}</h3>
                    <p>{interest.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
