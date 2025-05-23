import React from "react";

const Projects = () => (
  <section id="projects" style={styles.section}>
    <h2>Projects</h2>
    <ul style={styles.list}>
      <li>
        <a href="https://github.com/hritikarora28/shop" target="_blank" rel="noopener noreferrer" style={styles.link}>
          E-Commerce Website
        </a> – Built a robust full-stack e-commerce platform using Django as the backend
framework and HTML, CSS, Bootstrap, and Vanilla JavaScript for the
frontend. Designed and implemented features such as user registration,
product catalog, shopping cart, and order processing. Utilized SQLite for
database management and Git for version control throughout the
development process. The platform followed RESTful API principles for
efficient data exchange between frontend and backend components.
Integrated authentication mechanisms for secure user access and applied
modular coding practices to ensure scalability. Employed unit testing to
validate critical functionalities and maintain code quality.
      </li>
      <li>
        <a href="https://github.com/hritikarora28/Myfinbank-backend" target="_blank" rel="noopener noreferrer" style={styles.link}>
          Banking System
        </a> – Developed a full-stack banking application using React.js, HTML, and CSS for
the frontend, and Node.js with Express.js for the backend. The application
utilized MongoDB and MongoDB Atlas for secure and scalable data storage.
Implemented RESTful APIs to handle core banking operations such as user
authentication, account management, and transactions. Integrated JWT
authentication to ensure secure user sessions and enforce role-based access
control. Applied Git for version control and followed CI/CD principles to
streamline development and deployment. Additionally, conducted unit
testing on key backend modules to maintain reliability and catch potential
issues early in the development cycle.
      </li>
    </ul>
  </section>
);

const styles = {
  section: {
    padding: "60px 20px",
    maxWidth: "800px",
    margin: "auto",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    fontWeight: "bold",
    color: "#0b3d91",
    textDecoration: "none",
  },
};

export default Projects;
