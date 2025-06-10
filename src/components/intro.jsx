import React from "react";
import "./intro.css";

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
          Welcome! Hi, I’m Vaibhava Kumar Shrivastav, a second-year B.Tech
          student in Computer Science and Engineering at GLA University,
          Mathura. I’m expected to graduate in 2028 and currently focusing on
          full-stack development, cloud computing, DevOps, and data structures.
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
