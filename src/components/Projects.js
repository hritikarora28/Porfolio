import React from "react";

const Projects = () => (
  <section id="projects" style={styles.section}>
    <h2>Projects</h2>
    <ul style={styles.list}>
      <li>
        <a href="https://github.com/hritikarora28/shop" target="_blank" rel="noopener noreferrer" style={styles.link}>
          E-Commerce Website
        </a> – Built with Django, HTML, CSS, Bootstrap, JavaScript.
      </li>
      <li>
        <a href="https://github.com/hritikarora28/Myfinbank-backend" target="_blank" rel="noopener noreferrer" style={styles.link}>
          Banking System
        </a> – MERN stack app with MongoDB, Express, React, Node.js.
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
