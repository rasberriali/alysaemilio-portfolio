import Aboutme from "./components/aboutme"
import Experience from "./components/experience"
import HeroSection from "./components/heroSection"
import Nabvar from "./components/nabvar"
import Projects from "./components/projects"
import Testimonial from "./components/testimonial"
import Contact from "./components/contact"

function App() {

  return (

    <div id="home">
   <div className="bg-[#1A1A29] h-max bg-grid-pattern bg-grid-size ">
    <Nabvar/>
    <HeroSection/>
    <div id="about">
        <Aboutme />
      </div>
    <Experience/>
    <div id="project">
    <Projects/></div>
    <Testimonial/>
    <div id="contact">
    <Contact/></div>
   </div>
   </div>
  )
}

export default App
