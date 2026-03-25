import AboutMe from './AboutMe'
import Projects from './Projects'
import WorkExperience from './WorkExperience'
import SideScroll from './SideScroll'
import Techstack from './Techstack'
import Contact from './Contact'
import './App.css'

function App() {
  return (
    <div className="container-fluid m-0">
      <div className="row">
        <div className="col-auto g-0 d-none d-md-block">
          <SideScroll />
        </div>
        <div className="col g-0">
          <AboutMe />
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
