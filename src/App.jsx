import { useEffect, useState, useRef } from 'react'
import AboutMe from './AboutMe'
import Projects from './Projects'
import WorkExperience from './WorkExperience'
import SideScroll from './SideScroll'
import Techstack from './Techstack'
import Contact from './Contact'
import './App.css'

const sectionIds = ['About', 'Projects', 'Work', 'Techstack', 'Contact']

function App() {
  const aboutRef = useRef(null)
  const [activeSection, setActiveSection] = useState('About')

  useEffect(() => {
    let rafId = 0

    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight / 2

      let bestId = sectionIds[0]
      let bestDistance = Infinity

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue

        const rect = el.getBoundingClientRect()
        const elementCenter = rect.top + rect.height / 2
        const distance = Math.abs(elementCenter - viewportCenter)

        if (distance < bestDistance) {
          bestDistance = distance
          bestId = id
        }
      }

      setActiveSection(bestId)
    }

    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="container-fluid m-0 main-bg">
      <div className="row">
        <div className="col-auto g-0 d-none d-md-block">
          <SideScroll activeSection={activeSection} />
        </div>
        <div className="col g-0">
          <AboutMe aboutRef={aboutRef} />
          <Projects />
          <WorkExperience />
          <Techstack />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App