import React from 'react';
import './Header.scss';

import '../../styles/main.scss';

const Header = () => {
  return (
    <div  className="header">
        <div className="company-name">
           AE WEALTH
        </div>
        <div className="slogan">
        Financial Consulting.  Let Us Do the Math.
        </div>
        <a href="#services"><button className="btn-primary btn-moveup">DISCOVER OUR SERVICES</button></a>
    </div>
  );
}

export default Header;
