import React from "react";
import "./Intro.css";

const tools = [
  { name: "Java", desc: "Programming Language", icon: "/images/java-icon.svg" },
  { name: "Python", desc: "Programming Language", icon: "/images/Python.svg" },
  { name: "React", desc: "Framework", icon: "/images/react.svg" },
  { name: "CSS", desc: "User Interface", icon: "/images/css3.svg" },
  { name: "JavaScript", desc: "Interaction", icon: "/images/javascript.svg" },
  { name: "NodeJS", desc: "Web Server", icon: "/images/nodejs.svg" },
  { name: "ExpressJS", desc: "Node Framework", icon: "/images/expressjs.svg" },
  { name: "MongoDB", desc: "Database", icon: "/images/mongodb.svg" },
  {
    name: "TailwindCSS",
    desc: "User Interface",
    icon: "/images/tailwindcss.svg",
  },
];

export default function Intro() {
  return (
    <div className="intro-container">
      <div className="intro-box">
        <p className="intro-text">
          Welcome! Hi, I’m Vaibhava Kumar Shrivastav I’m a passionate Software
          Developer and Web Developer who loves turning ideas into beautiful and
          functional digital experiences. With expertise in React, CSS, MongoDB,
          Java, Python, JavaScript, and Express.js, I build projects that solve
          problems and delight users. Take a look around to see my work, skills,
          and the stories behind my projects. Let’s create something amazing
          together!<br></br><br /> 🎓 Education Bachelor of Technology (B.Tech) in Computer
          Science and Engineering<br />  GLA University, Mathura <br /> Expected Graduation:
          2028<br />  Currently in 2nd year, focusing on full-stack development, cloud
          computing, DevOps, and data structures.
        </p>
        <div className="intro-stats">
          <div>
            <strong>1 & Counting</strong>
            <br />
            Projects done
          </div>
          <div>
            <strong>2nd-year BTech student</strong>
            <br />
            Years of experience
          </div>
        </div>
      </div>

      <div className="tools-section">
        <h2>Essential Tools I Use</h2>
        <p className="tools-subtitle">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div className="tool-card" key={index}>
              <img src={tool.icon} alt={tool.name} className="tool-icon" />
              <div className="tool-name">{tool.name}</div>
              <div className="tool-desc">{tool.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
