import React, { useRef, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Slideshow from "./components/Slideshow";

function App() {
  const [selectedProject, setSelectedProject] = useState(0); // Manage selected project index
  const slideshowRef = useRef(null); // Ref for scrolling to the slideshow

  const handleProjectClick = (index) => {
    setSelectedProject(index); // Set the clicked project index
    slideshowRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to slideshow
  };

  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects onProjectClick={handleProjectClick} />
        <div ref={slideshowRef}>
          <Slideshow currentIndex={selectedProject} />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
