import React, { useState } from 'react';
import './contact.css';

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500); // simulate a short loading feedback
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact me for <br /> collaboration</h2>
          <p>Reach out today to discuss your project needs and start collaborating on something amazing!</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/vaibhavakumarshrivastav"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/vaibhava-shrivastav"><i className="fab fa-github"></i></a>
            <a href="https://codepen.io/vaibhava-shrivastav"><i className="fab fa-codepen"></i></a>
            <a href="https://www.instagram.com/mr_vaibhavkumar/?hl=en"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <form
          className="contact-form"
          action="https://getform.io/f/ayvymppb"
          method="POST"
          onSubmit={handleSubmit}
        >
          {/* bot protection */}
          <input type="hidden" name="_gotcha" style={{ display: 'none' }} />

          {/* ✅ Each input has a unique name */}
          <div className="form-group">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <textarea
              name="user_message"
              rows="5"
              placeholder="Your Message"
              required
              disabled={loading}
            ></textarea>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>

      <div className="cta">
        <h1>Let's work <br /> together today!</h1>
      </div>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>Sitemap</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#contact">Contact me</a></li>
            </ul>
          </div>
          <div>
            <h4>Socials</h4>
            <ul>
              <li><a href="https://github.com/vaibhava-shrivastav">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/vaibhavakumarshrivastav">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/mr_vaibhavkumar/?hl=en">Instagram</a></li>
              <li><a href="https://codepen.io/vaibhava-shrivastav">CodePen</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">© 2025 vaibhavakumarshrivastav</div>
      </footer>
    </div>
  );
}
