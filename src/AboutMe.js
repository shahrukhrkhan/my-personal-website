// src/components/AboutMe.js
import React from 'react';
import './App.css';  // Import a CSS file for styling this component

function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <div className="about-me-container">
        <img src="IMG_1024.jpeg" alt="Shahrukh Khan" className="profile-pic" />
        <div className="about-me-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm Shahrukh Khan, a passionate and dedicated Software Engineer with a focus on building efficient, scalable solutions. 
			With a strong background in embedded systems development, 
			front-end/back-end development, and advanced software solutons. Skilled in configuring and 
			optimizing hardware environments, developing and integrating embedded software, and leveraging 
			development skills to build software projects. Proficient in many languages including Java, C++, Javascript, HTML, etc., 
			and various scripting languages such as Bash, Python, etc.. Demonstrated expertise in creating advanced 
			programs for clients and exceeded expectations. Proven ability to collaborate effectively with cross-functional 
			teams to deliver 
			high-quality products and enhance client capabilities. Recognized for technical support, performance 
			optimization, and innovative problem-solving. Dedicated to continuous learning and applying best practices 
			in technology development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;