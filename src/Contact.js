// src/Contact.js
import React from 'react';
import './App.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>
        I'm always open to new opportunities and collaborations. Feel free to reach out to me via email or connect on my socials!
      </p>
      
      <div className="contact-info">
        {/* Email Link */}
        <a href="mailto:your.email@example.com" className="contact-link">
          shahrukh189@yahoo.com
        </a>

        {/* Social Media Links */}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/shahrukh--khan"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/shahrukhrkhan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
