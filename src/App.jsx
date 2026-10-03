import { NavBar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Certs } from "./components/sections/Certs";
import { useCallback, useRef, useState } from "react";
import { ContactModal } from "./components/contact/ContactModal";

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const contactTrigger = useRef(null);
  const openContact = (event) => {
    contactTrigger.current = event.currentTarget;
    setContactOpen(true);
  };
  const closeContact = useCallback(() => setContactOpen(false), []);

  return (
    //Height of layout will be the total height of the screen size
    <div className="min-h-screen overflow-x-hidden">
      <NavBar onContactClick={openContact} />
      <main>
        <Hero onContactClick={openContact} />
        <About />
        <Certs />
        <Projects />
        <Experience />
      </main>
      <ContactModal open={contactOpen} onClose={closeContact} triggerRef={contactTrigger} />
    </div>
  )
}

export default App; 
