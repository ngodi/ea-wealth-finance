import React from 'react';
import './Footer.scss';

import '../../styles/main.scss';

const Footer = () => {
  let year = new Date();
  return (
    <div className="footer">
       <div className="footer-left">
          <h4>MISSION STATEMENT</h4>
          <p>The mission is to be able to reach out to those who do not have adequate knowledge in managing their personal finance in terms of enlightening them, coaching as well as mentorship to those in need. Equally provides guidance to individuals who are hoping to start their own business.</p>
       </div>
       <div className="footer-center">
          <h4>OUR VISION</h4>
            <ul>
              <li>To provide basic and free knowledge to every individual concerning their personal finance.</li>
              <li>To coach and direct others to achieve their live goals and long term aspirations.</li>
              <li>To mentor individuals within the financial services.</li>
            </ul>
    </div>
    <div className="footer-right">
           <h4>CONNECT WITH US</h4>
          <div className="footer-contact">
          <span><i class="fas fa-2x fa-phone-square-alt"></i>&nbsp;+44 7958 431532</span>
           <span><i class="fas fa-2x fa-at"></i>&nbsp; nevilleerambo@yahoo.com</span>
          </div>
           <div className="copyright">&copy;{year.getFullYear()}&nbsp;AE Wealth & Financial Consulting</div>
    </div>
  </div>
  );
}

export default Footer;