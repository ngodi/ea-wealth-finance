import React from 'react';
import './App.scss';

import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import About from './components/About/About';
import Activities from './components/Activities/Activities';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div id="home"></div>
      <Navigation />
      <div id="services"></div>
      <Header />
      <div id="about"></div>
      <Services />
      <div id="activities"></div>
      <About />
      <div id="contact"></div>
      <Activities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
