import React from 'react';
import './Navigation.scss';


const Navigation = () => {
  return (
    <div className="navigation">
        <div className="logo">
            <span>AE</span>
            <span>Wealth & Financial Consulting</span>
        </div>
        <div className="nav-menu">
            <a href="#home">HOME</a>
            <a href="#services">SERVICES</a>
            <a href="#about">ABOUT</a>
            <a href="#activities">ACTIVITIES</a>
            <a href="#contact">CONTACT</a>
        </div>

    </div>
  );
}

export default Navigation;
