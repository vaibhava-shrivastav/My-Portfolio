import React from "react";
import "./HeroSection.css";


const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <div className="hero-availability">
          <span>Available for work</span>
        </div>

        <h1>
          Building Scalable <br />
          Modern Websites <br />
          for the Future
        </h1>

        <div className="hero-buttons">
          <a href="/cv.pdf" className="btn-primary" download>
            Download CV ⬇
          </a>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/vaibhavakumarshrivastav"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/vaibhava-shrivastav"><i className="fab fa-github"></i></a>
            <a href="https://codepen.io/vaibhava-shrivastav"><i className="fab fa-codepen"></i></a>
            <a href="https://www.instagram.com/mr_vaibhavkumar/?hl=en"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/CSC_0005.JPG" alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
