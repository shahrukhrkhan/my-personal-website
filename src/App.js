// src/App.js
import React from 'react';
import './App.css';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Awards from './Awards';
import Certifications from './Certifications';  // Import the Certifications component
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Awards />
      <Certifications />  {/* Add the Certifications section */}
      <Contact />
    </div>
  );
}

export default App;
