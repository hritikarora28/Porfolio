import React from "react";

const Navbar = () => (
  <header style={styles.navbar}>
    <h2 style={styles.logo}>Hritik Arora</h2>
    <nav>
      {["home", "about", "projects", "skills", "contact"].map((id) => (
        <a key={id} href={`#${id}`} style={styles.link}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
      ))}
    </nav>
  </header>
);

const styles = {
  navbar: {
    background: "#0b3d91",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 999,
    color: "white"
  },
  logo: { margin: 0 },
  link: {
    color: "white",
    margin: "0 10px",
    textDecoration: "none",
    fontWeight: "bold"
  }
};

export default Navbar;
