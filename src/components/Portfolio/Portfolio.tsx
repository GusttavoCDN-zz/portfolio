import './portfolio.scss';

import React from 'react';

import projects from './data';

function Portfolio() {
  const renderProjects = () => {
    return projects.map((project) => (
      <article className="portfolio__item" key={project.id}>
        <div className="portfolio__item-image">
          <img src={project.image} alt={project.title} className="img" />
        </div>
        <h3>{project.title}</h3>
        <div className="portfolio__item-cta">
          <a href={project.github} className="btn" target="_blank" rel="noreferrer">
            Github
          </a>
          <a
            href={project.preview}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>
      </article>
    ));
  };

  return (
    <section id="portfolio">
      <h5>Meus projetos recentes</h5>
      <h2>Portfolío</h2>

      <div className="container portfolio__container">{renderProjects()}</div>
    </section>
  );
}

export default Portfolio;
