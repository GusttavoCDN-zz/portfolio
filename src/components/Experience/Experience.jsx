import './experience.scss';

import React from 'react';

import { backEndTecnologies, frontEndTecnologies } from './data';

function Experience() {
  const renderFrontTecnologies = () => {
    return frontEndTecnologies.map((tecnologie, i) => (
      <article className="experience__details" key={i}>
        <img
          src={tecnologie.image}
          alt={tecnologie.stack}
          className="experience__details-icon img"
        />

        <div>
          <h4>{tecnologie.stack}</h4>
        </div>
      </article>
    ));
  };

  const renderBackTecnologies = () => {
    return backEndTecnologies.map((tecnologie, i) => (
      <article className="experience__details" key={i}>
        <img
          src={tecnologie.image}
          alt={tecnologie.stack}
          className="experience__details-icon img"
        />

        <div>
          <h4>{tecnologie.stack}</h4>
        </div>
      </article>
    ));
  };

  return (
    <section id="experience">
      <h5>Minhas habilidades</h5>
      <h2>Tecnologias</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">{renderFrontTecnologies()}</div>
        </div>

        <div className="experience__backend">
          <h3>Backend e DevOps</h3>
          <div className="experience__content">{renderBackTecnologies()}</div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
