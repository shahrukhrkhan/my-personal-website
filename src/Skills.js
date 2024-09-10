// src/Skills.js
import React from 'react';
import './App.css';  // Using the same CSS file for consistent styling

function Skills() {
  const skills = [
    'Java', 'JavaFX', 'HTML', 'CSS', 'JavaScript', 'C#', 'ASP.NET', 'C++', 'SQL', 'Bash Scripting',
    'Linux Development', 'Red Hat Enterprise Linux (RHEL)', 'Jira', 'Git', 'Spring', 'SQL', 'Networking', 'Agile Development', 'SDLC',
    'RESTful API', 'Front-End Development', 'Back-End Development', 'Embedded Development', 'Debugging'
  ];

  return (
    <section id="skills" className="skills">
      <h2>Core Strengths</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
