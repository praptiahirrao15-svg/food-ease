import { useState } from "react";
import { Footer } from "../assets/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <style>{`
        .contact-page {
          min-height: 100vh;
          padding: 60px 40px;
          background: linear-gradient(135deg, #111 0%, #1a1a1a 100%);
          color: white;
        }
        .contact-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .contact-page h1 {
          font-size: 42px;
          text-align: center;
          margin-bottom: 50px;
          color: #7CFC00;
        }
        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }
        .info-card {
          background: #222;
          padding: 25px;
          border-radius: 12px;
          text-align: center;
        }
        .info-card h3 {
          color: #7CFC00;
          margin-bottom: 10px;
          font-size: 20px;
        }
        .info-card p {
          color: #ddd;
          margin: 0;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #7CFC00;
          font-weight: bold;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 8px;
          background: #222;
          color: white;
          font-size: 16px;
          font-family: Arial, sans-serif;
        }
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #888;
        }
        .submit-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(45deg, #7CFC00, #FFA500);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }
        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 25px #7CFC00;
        }
      `}</style>

      <div className="contact-page">
        <div className="contact-container">
          <h1>Get In Touch</h1>

          <div className="contact-info">
            <div className="info-card">
              <h3>📍 Address</h3>
              <p>123 Food Street, Restaurant District, City 12345</p>
            </div>
            <div className="info-card">
              <h3>📞 Phone</h3>
              <p>+91 9876543210</p>
            </div>
            <div className="info-card">
              <h3>📧 Email</h3>
              <p>info@foodease.com</p>
            </div>
            <div className="info-card">
              <h3>⏰ Hours</h3>
              <p>10 AM - 11 PM, Daily</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
