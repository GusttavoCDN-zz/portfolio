import About from 'components/About';
import Experience from 'components/Experience';
import Header from 'components/Header';
import Nav from 'components/Nav';
import React from 'react';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <About />
      <Experience />
    </React.Fragment>
  );
}
