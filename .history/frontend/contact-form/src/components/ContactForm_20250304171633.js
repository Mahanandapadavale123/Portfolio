import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3033/api/send", formData);
      setResponseMessage("Email sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (error) {
      setResponseMessage("Error sending email. Try again.");
    }
  };

  return (
    <div style={{ width: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default ContactForm;
