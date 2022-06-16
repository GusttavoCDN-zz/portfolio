import About from 'components/About';
import Contact from 'components/Contact';
import Experience from 'components/Experience';
import Header from 'components/Header';
import Nav from 'components/Nav';
import Portfolio from 'components/Portfolio';
import React from 'react';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </React.Fragment>
  );
}
