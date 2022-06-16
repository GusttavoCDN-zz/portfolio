import './footer.scss';

import React from 'react';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import { components } from '../../helpers';

interface FooterProps {
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

function Footer({ setActive }: FooterProps) {
  const renderPermaLinks = () => {
    return components.map(({ name }, i) => (
      <li key={i}>
        <a href={`#${name}`} onClick={() => setActive(`#${name}`)}>
          {name}
        </a>
      </li>
    ));
  };

  return (
    <footer>
      <ul className="permalinks">{renderPermaLinks()}</ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/gusttavocdn/">
          <FaInstagram className="footer__socials-icon" />
        </a>
        <a href="https://www.linkedin.com/in/gustavocdn/">
          <FaLinkedinIn className="footer__socials-icon" />
        </a>
        <a href="https://twitter.com/GusttavoCDN">
          <FaTwitter className="footer__socials-icon" />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Desenvolvido por Gustavo da Silva</small>
      </div>
    </footer>
  );
}

export default Footer;
