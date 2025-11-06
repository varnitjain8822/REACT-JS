import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields before submitting.");
      return;
    }

    setStatus("Thank you! Your message has been sent successfully.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mt-5 mb-5" id="contact">
      <div
        className="card shadow-sm border-0 mx-auto p-4"
        style={{ maxWidth: "600px", borderRadius: "12px", transition: "0.3s" }}
      >
        <h2 className="text-success fw-bold text-center mb-3">📩 Contact Us</h2>
        <p className="text-muted text-center mb-4">
          We’d love to hear from you! Please fill out the form below and we’ll get in touch soon.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control shadow-sm"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control shadow-sm"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Message</label>
            <textarea
              name="message"
              className="form-control shadow-sm"
              rows="4"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success px-5 py-2 fw-semibold">
              Send Message
            </button>
          </div>
        </form>

        {status && (
          <div
            className={`alert mt-4 text-center ${
              status.startsWith("Thank") ? "alert-success" : "alert-danger"
            }`}
          >
            {status}
          </div>
        )}
      </div>
    </div>
  );
}
