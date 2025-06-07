import React from 'react';
import './Work.css';

const projects = [
  {
    title: 'My Portfolio',
    image: '/images/portfolio-work-coverpage.png',
    tags: ['React','CSS',  'Frontend Development'],
    link: '#'
  }
];

const Work = () => {
  return (
    <section className="work-section" id="work">
      <h2 className="section-title">My Portfolio Highlights</h2>
      <div className="work-grid">
        {projects.map((project, index) => (
          <div key={index} className="work-card">
            <img src={project.image} alt={project.title} className="work-image" />
            <h3 className="work-title">{project.title}</h3>
            <div className="work-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <a href={project.link} className="work-link" target="_blank" rel="noopener noreferrer">
              ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
