import React, { useState } from "react";
import "./contact.css"; 

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${name}`);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>
    </div>
  );
}
