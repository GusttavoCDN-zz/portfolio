import './footer.scss';

import React from 'react';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

interface FooterProps {
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

function Footer({ setActive }: FooterProps) {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#header" onClick={() => setActive('#')}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setActive('#about')}>
            About
          </a>
        </li>
        <li>
          <a href="#experience" onClick={() => setActive('#experience')}>
            Experience
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => setActive('#portfolio')}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setActive('#contact')}>
            Contact
          </a>
        </li>
      </ul>
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
