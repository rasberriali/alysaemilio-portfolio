import Aboutme from "./components/aboutme"
import Experience from "./components/experience"
import HeroSection from "./components/heroSection"
import Nabvar from "./components/nabvar"


function App() {

  return (
   <div className="bg-[#1A1A29] h-full">
    <Nabvar/>
    <HeroSection/>
    <Aboutme/>
    <Experience/>
   </div>
  )
}

export default App
