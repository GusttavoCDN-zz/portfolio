import './nav.scss';

import React from 'react';

import { components } from '../../helpers';


function Nav({ active, setActive }) {
  const renderNavIcons = () => {
    return components.map(({ name, Icon }, i) => (
      <a
        key={i}
        href={`#${name}`}
        className={active === `#${name}` ? 'active' : ''}
        onClick={() => setActive(`#${name}`)}
      >
        <Icon />
      </a>
    ));
  };

  return <nav>{renderNavIcons()}</nav>;
}

export default Nav;
