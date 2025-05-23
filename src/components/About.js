import React from "react";
import hritikImage from "../assets/hritik.jpg"; // Adjust path if your file is elsewhere

const About = () => (
  <section id="about" style={styles.section}>
    <h2>About Me</h2>
    <div style={styles.container}>
      <img src={hritikImage} alt="Hritik Arora" style={styles.image} />
      <p style={styles.text}>
        Full-stack software engineer with strong proficiency in Python and JavaScript.
Experienced in developing scalable web applications using the MERN stack and Django.
Adept at solving complex problems, collaborating across teams, and translating business
needs into technical solutions.
      </p>
    </div>
  </section>
);

const styles = {
  section: {
    padding: "60px 20px",
    maxWidth: "900px",
    margin: "auto",
  },
  container: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    flexWrap: "wrap",
  },
  image: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  text: {
    flex: 1,
    fontSize: "16px",
    lineHeight: "1.6",
  },
};

export default About;
