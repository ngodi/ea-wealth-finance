import React from 'react';
import './Navigation.scss';


const Navigation = () => {
  return (
    <div className="navigation">
        <div className="logo">
            <span>AE</span>
            <span>Wealth Management & Personal Finance Consulting</span>
        </div>
        <div className="nav-menu">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">SERVICES</a>
            <a href="#">ACTIVITIES</a>
            <a href="#">CONTACT</a>
        </div>

    </div>
  );
}

export default Navigation;
