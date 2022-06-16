import './header.scss';

import React from 'react';

// import ME from '../../assets/me.png';
import CTA from './CTA';
import Socials from './Socials';

function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Oi, Eu sou o</h5>
        <h1>Gustavo da Silva</h1>
        <h5 className="text-ligth">Desenvolvedor FullStack Junior</h5>
        <CTA />
        <Socials />

        <div className="me">
          {/* <img src={ME} alt="Foto Minha" className="img" /> */}
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
