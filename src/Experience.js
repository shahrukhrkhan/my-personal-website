// src/Experience.js
import React from 'react';
import './App.css';  // Use App.css for styling or create a new CSS file if needed

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Job Experience</h2>
      <div className="experience-list">

        {/* RTX (Raytheon Technologies) Experience */}
        <div className="job">
          <h3>Software Engineer (Secret Clearance)</h3>
          <p><strong>Company:</strong> RTX (Raytheon Technologies), Tucson, AZ</p>
          <p><strong>Duration:</strong> January 2023 – Present</p>
          <p>
            <strong>Responsibilities:</strong>
            <ul>
              <li>Developed and implemented embedded systems using emulated hardware architectures using VxWorks real-time operating system (RTOS).</li>
              <li>Configured and optimized emulated hardware environments and provided technical support for clients.</li>
              <li>Designed, developed, and tested embedded software using VxWorks real-time operating system (RTOS), integrating it with hardware emulation for seamless functionality.</li>
              <li>Utilized Java to develop a program for advanced simulation technology, contributing to RTX product modeling.</li>
              <li>Developed a ground-up advanced GUI using JavaFX, performed debugging, front-end/back-end development, and extensive data analysis on program.</li>
              <li>Created comprehensive documentation and collaborated with cross-functional teams to ensure successful project delivery.</li>
              <li>Successfully developed and deployed embedded systems for high-profile clients, enhancing their operational capabilities.</li>
              <li>Experienced with Linux development on Red Hat Enterprise Linux (RHEL), ensuring robust and efficient system performance.</li>
            </ul>
          </p>
          <p><strong>Technologies:</strong> Java, JavaFX, RHEL, Linux, Embedded Systems, AI/ML</p>
        </div>

        {/* Ellis Color Supply Experience */}
        <div className="job">
          <h3>Marketing Manager</h3>
          <p><strong>Company:</strong> Ellis Color Supply</p>
          <p><strong>Duration:</strong> September 2019 – January 2023</p>
          <p>
            <strong>Responsibilities:</strong>
            <ul>
              <li>Enhanced website appearance and functionality, significantly boosting conversion rates.</li>
              <li>Developed targeted advertisements, increasing conversion rates by 30%.</li>
              <li>Managed and updated all social media platforms daily, driving traffic and client engagement.</li>
              <li>Created targeted social media posts to engage specific audiences effectively.</li>
              <li>Produced high-quality photography, videography, and cinematography for social media, websites, and ads.</li>
            </ul>
          </p>
          <p><strong>Technologies:</strong> Social Media Management, Digital Marketing, Web Design, Photography, Videography</p>
        </div>

        {/* SoftSages Tech Experience */}
        <div className="job">
          <h3>Full Stack Developer (Intern)</h3>
          <p><strong>Company:</strong> SoftSages Tech</p>
          <p><strong>Duration:</strong> June 2022 – August 2022</p>
          <p>
            <strong>Responsibilities:</strong>
            <ul>
              <li>Managed and maintained database servers with Microsoft SQL Server using Spring Boot.</li>
              <li>Performed CRUD operations on client databases efficiently using Microsoft SQL Server.</li>
              <li>Reduced downtime by 25% by resolving errors and handling status codes promptly.</li>
              <li>Ensured timely execution of GET, POST, PUT, and DELETE requests.</li>
              <li>Secured and maintained network servers to ensure continuous operation.</li>
            </ul>
          </p>
          <p><strong>Technologies:</strong> Spring Boot, Microsoft SQL Server, Full Stack Development, Networking</p>
        </div>

      </div>
    </section>
  );
}

export default Experience;
