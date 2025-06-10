import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <img src="/images/logo-profile.png" alt="Profile" />
        </div>

        <h1 className="hero-heading">
          Hello, I'm <strong>Vaibhava</strong>. <br />
          Empowering ideas <br />
          through code <br />
          and innovation.
        </h1>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Contact me here →</a>
          <a href="/cv.pdf" className="btn-secondary" download>Download CV ⬇</a>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/vaibhavakumarshrivastav" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/vaibhava-shrivastav" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
