import React, { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "work", "contact"];

    const handleScroll = () => {
      let current = "home";
      const offsetThreshold = 150;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= offsetThreshold && rect.bottom > offsetThreshold) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial set
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav>
        <a href="#home" className={activeSection === "home" ? "active" : ""}>
          Home
        </a>
        <a href="#about" className={activeSection === "about" ? "active" : ""}>
          About
        </a>
        <a href="#work" className={activeSection === "work" ? "active" : ""}>
          Work
        </a>
      </nav>
      <div>
        <a
          href="#contact"
          className={`contact-btn ${activeSection === "contact" ? "active" : ""}`}
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
