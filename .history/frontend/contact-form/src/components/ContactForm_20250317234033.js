import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css"; // Import CSS file
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3033/api/send", formData);
      setResponseMessage("✅ Email sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (error) {
      setResponseMessage("❌ Error sending email. Try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="contact-card" id="aboutMey">
      <h2 className='heading'>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </div>
    </motion.div>
  );
};

export default ContactForm;
