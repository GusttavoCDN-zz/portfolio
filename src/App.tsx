import About from 'components/About';
import Contact from 'components/Contact';
import Experience from 'components/Experience';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Nav from 'components/Nav';
import Portfolio from 'components/Portfolio';
import React, { useState } from 'react';

export default function App() {
  const [active, setActive] = useState('#');

  return (
    <React.Fragment>
      <Header />
      <Nav setActive={setActive} active={active} />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer setActive={setActive} />
    </React.Fragment>
  );
}
