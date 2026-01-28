import { NavBar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";

function App() {
  return (
    //Height of layout will be the total height of the screen size
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
      </main>
    </div>
  )
}

export default App; 
