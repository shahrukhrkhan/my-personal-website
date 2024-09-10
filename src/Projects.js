// src/Projects.js
import React from 'react';
import './App.css';

function Projects() {
  const projects = [
    {
      name: 'Personal Website',
      description: 'A personal website built using React to showcase my portfolio and skills.',
      githubLink: 'https://github.com/yourgithubusername/personal-website', // Replace with actual link
      technologies: ['React', 'JavaScript', 'CSS'],
    },
    {
      name: 'Snake-Game',
      description: 'A classic snake game implemented in Java, with score tracking and increasing difficulty.',
      githubLink: 'https://github.com/shahrukhrkhan/Snake-game-', // Replace with actual link
      technologies: ['Java', 'OOP'],
    },
    {
      name: 'Amortization Schedule Program',
      description: 'A Java application that calculates the amortization schedule for loans.',
      githubLink: 'https://github.com/shahrukhrkhan/Amortization-Visual-Schedule', // Replace with actual link
      technologies: ['Java'],
    },
    {
      name: 'Resume using HTML and CSS',
      description: 'A digital resume built using HTML and CSS, focusing on clean design and responsiveness.',
      githubLink: 'https://github.com/shahrukhrkhan/Resume-Website-HTML-CSS-', // Replace with actual link
      technologies: ['HTML', 'CSS'],
    },
  ];

  return (
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>

        {/* Link to the full GitHub profile */}
        <div className="github-profile">
          <p>Check out all of my projects on GitHub:</p>
          <a
            href="https://github.com/shahrukhrkhan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            Visit My GitHub Profile
          </a>
        </div>
      </section>
    );
  }

export default Projects;
