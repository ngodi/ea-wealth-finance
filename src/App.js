import React from 'react';
import './App.scss';

import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import About from './components/About/About';
import Activities from './components/Activities/Activities';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Services />
      <About />
      <Activities />
    </div>
  );
}

export default App;
