import './nav.scss';

import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineMessage, AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

function Nav() {
  const [active, setActive] = useState('#');

  return (
    <nav>
      {' '}
      <a
        href="#header"
        className={active === '#' ? 'active' : ''}
        onClick={() => setActive('#')}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={active === '#about' ? 'active' : ''}
        onClick={() => setActive('#about')}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={active === '#experience' ? 'active' : ''}
        onClick={() => setActive('#experience')}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        className={active === '#portfolio' ? 'active' : ''}
        onClick={() => setActive('#portfolio')}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={active === '#contact' ? 'active' : ''}
        onClick={() => setActive('#contact')}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
}

export default Nav;
