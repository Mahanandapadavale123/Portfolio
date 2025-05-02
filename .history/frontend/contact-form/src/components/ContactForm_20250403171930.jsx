import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setResponseMessage("❌ Error sending email. Try again.");
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} viewport={{ once: true }}>
      <div className="contact-container">
        <div className="contact-card" id="contact">
          <h2 className="heading">Contact Me</h2>
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

        {/* Direct Contact Details Moved Below Form */}
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <FontAwesomeIcon icon={faPhone} />
              <span className="contact-text phone">
                <a href="tel:9175226646" title="Give me a call">+91-9175226646</a>
              </span>
            </li>
            <li className="list-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="contact-text gmail">
                <a href="mailto:mahanandapadavale252@gmail.com" title="Send me an email">mahanandapadavale252@gmail.com</a>
              </span>
            </li>
          </ul>
          <hr />
          <ul className="social-media-list">
            <li>
              <a href="https://www.facebook.com" target="_blank" className="contact-icon" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" className="contact-icon" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" className="contact-icon" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
