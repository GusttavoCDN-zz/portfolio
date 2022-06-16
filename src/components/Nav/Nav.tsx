import './nav.scss';

import React from 'react';

import { components } from '../../helpers';

interface NavProps {
  setActive: React.Dispatch<React.SetStateAction<string>>;
  active: string;
}

function Nav({ active, setActive }: NavProps) {
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
