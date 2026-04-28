import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import FAQ from './components/FAQ/FAQ'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
