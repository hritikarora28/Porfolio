import React from "react";

const Skills = () => (
  <section id="skills" style={styles.section}>
    <h2>Skills</h2>
    <ul style={styles.list}>
      <li><strong>Programming Languages:</strong> Python, JavaScript</li>
      <li><strong>Web Development:</strong> HTML, CSS, Node.js, Express.js</li>
      <li><strong>Frameworks:</strong> React.js, Django</li>
      <li><strong>Database:</strong> SQL, NoSQL</li>
      <li><strong>Software Development:</strong> OOD principles, Design Patterns, Data Structures, Algorithms</li>
      <li><strong>DevOps & Tools:</strong> Git, Linux, Unix, Agile Methodology</li>
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
    lineHeight: "1.8",
  },
};

export default Skills;
