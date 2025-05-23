import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "service_g77kixj",
      "template_uexm47f",
      formData,
      "TVbhQBLDxoYJhM7F2"
    )
    .then(() => {
      setStatus("SUCCESS");
      setFormData({ name: "", email: "", message: "" });
    }, () => setStatus("ERROR"));
  };

  return (
    <section id="contact" style={styles.section}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={styles.input} />
        <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required style={styles.input} />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows={5} required style={styles.input} />
        <button type="submit" style={styles.button}>Send</button>
        {status === "SUCCESS" && <p style={{ color: "green" }}>Message sent!</p>}
        {status === "ERROR" && <p style={{ color: "red" }}>Something went wrong.</p>}
      </form>
    </section>
  );
};

const styles = {
  section: { padding: "60px 20px", maxWidth: "600px", margin: "auto" },
  form: { display: "flex", flexDirection: "column" },
  input: { margin: "10px 0", padding: "10px", fontSize: "16px" },
  button: { padding: "10px", background: "#0b3d91", color: "white", border: "none", fontSize: "16px", cursor: "pointer" }
};

export default Contact;
