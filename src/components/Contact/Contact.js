import React from 'react';
import './Contact.scss';

import '../../styles/main.scss';

import ContactUs from '../ContactUs/ContactUs';

const Contact = () => {
  return (
    <div className="contact">
         <div className="heading">
         <i class="fas fa-10x fa-home"></i>
           <span className="heading-text">REACH US</span>
        </div>
       <div className="contact-content">
           <div className="contact-inner">
            <div className="contact-top">
              <span><i class="fas fa-3x fa-phone-square-alt"></i>&nbsp;+44 7958 431532</span>
              <span><i class="fas fa-3x fa-at"></i>&nbsp; nevilleerambo@yahoo.com</span>
            </div>
            <div className="contact-form">
              <ContactUs />
            </div>
           </div>
       </div>

    </div>
  );
}

export default Contact;

