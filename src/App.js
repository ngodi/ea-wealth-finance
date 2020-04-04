import React from 'react';
import './App.scss';

import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Services />
    </div>
  );
}

export default App;
