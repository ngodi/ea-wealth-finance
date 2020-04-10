import React from 'react';
import './Navigation.scss';


const Navigation = () => {
  return (
  <div>
    <div className="navigation">
        <div className="logo">
            <span>AE</span>
            <span>Wealth & Financial Consulting</span>
        </div>
        <div className="nav-menu">
            <a className="home" href="#home">HOME</a>
            <a href="#services">SERVICES</a>
            <a href="#about">ABOUT</a>
            <a href="#activities">ACTIVITIES</a>
            <a href="#contact">CONTACT</a>
        </div>
        </div>
        <div className="navigation1">
          <input type="checkbox" className="navigation1__checkbox" id="navi-toggle" />
          <label htmlFor="navi-toggle" className="navigation1__button">
             <span className="navigation1__icon">&nbsp;</span>
          </label>
          <div className="navigation1__background">&nbsp;</div>

          <div className="navigation1__nav">
            <ul className="navigation1__list">
              <li className="navigation1__item"><a className="navigation1__link" href="#home">HOME</a></li>
              <li className="navigation1__item"><a className="navigation1__link" href="#services">SERVICES</a></li>
              <li className="navigation1__item"><a className="navigation1__link" href="#about">ABOUT</a></li>
              <li className="navigation1__item"><a className="navigation1__link" href="#activities">ACTIVITIES</a></li>
              <li className="navigation1__item"><a className="navigation1__link" href="#contact">CONTACT</a></li>
            </ul>
          </div>
        </div>

    </div>
  );
}

export default Navigation;
