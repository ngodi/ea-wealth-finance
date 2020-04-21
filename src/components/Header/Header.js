import React from 'react';
import './Header.scss';

import '../../styles/main.scss';

const Header = () => {
  return (
    <div  className="header">
       <div className="contact-info">
          <span className="phone"><i class="fas fa-2x fa-phone-square-alt"></i>&nbsp;+44 7958 431532</span>
          <span className="email"><i class="fas fa-2x fa-at"></i>&nbsp; nevilleerambo@yahoo.com</span>
       </div>
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
