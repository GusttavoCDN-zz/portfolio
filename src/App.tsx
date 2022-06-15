import About from 'components/About';
import Header from 'components/Header';
import Nav from 'components/Nav';
import React from 'react';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Nav />
    </React.Fragment>
  );
}
