import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";

function App() {
  return (
    //Height of layout will be the total height of the screen size
    <div className="min-h-screen overflow-x-hidden">
      <NavBar>
        <Hero />
        <About />
        <Projects />
        <Experience />
      </NavBar>
    </div>
  )
}

export default App; 
