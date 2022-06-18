import './about.scss';

import React from 'react';
import { AiOutlineLaptop } from 'react-icons/ai';
import { VscFolderLibrary } from 'react-icons/vsc';

import ME from '../../assets/me.png';

function About() {
  return (
    <section id="about">
      <h5>Me conheça melhor</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Sobre Mim Imagem" className="img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <AiOutlineLaptop className="about__icon" />
              <h5>Engenharia de Software</h5>
              <small>
                <a href="https://www.42sp.org.br/" target="_blank" rel="noreferrer">
                  at 42SP
                </a>
              </small>
            </article>
            <article className="about__card">
              <AiOutlineLaptop className="about__icon" />
              <h5>Desenvolvimento Web FullStack</h5>
              <small>
                <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">
                  at Trybe
                </a>
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed </small>
            </article>
          </div>

          <p>
            Tenho 23 anos e atualmente em inicio na área de tecnologia. Moro em São Paulo,
            e estudo Desenvolvimento de software e Desenvolvimento Web Fullstack
            respectivamente nas escolas 42SP e Trybe.
            <br /> <br />
            Sou uma pessoa extremamente curiosa e dedicada em tudo que faço, desde os
            esportes que amo praticar (basquete e games) até nos estudos.
            <br /> <br />
            Tenho muita facilidade em aprender qualquer coisa, e com pouco tempo de
            adaptação me sinto a vontade para trabalhar com qualquer tecnologia.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contato
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
