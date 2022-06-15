/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import CV from '../../assets/my_cv.pdf';

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contato
      </a>
    </div>
  );
}

export default CTA;
