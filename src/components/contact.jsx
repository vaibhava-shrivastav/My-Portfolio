import React, { useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = 'service_e7h9o4s';
    const templateID = 'template_fzdr1ar';
    const publicKey = 'GtrOpbfFGGMv9Fguo';

    emailjs.send(serviceID, templateID, form, publicKey)
      .then(() => {
        alert('✅ Message sent!');
        setForm({ name: '', email: '', message: '' });
        setLoading(false);
      }, (error) => {
        console.error('Failed to send message:', error);
        alert('❌ Failed to send message. Try again later.');
        setLoading(false);
      });
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

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              disabled={loading}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Submit'}</button>
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
              <li><a href="work">Work</a></li>
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
