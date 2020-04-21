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
            <div className="contact-form">
              <ContactUs />
            </div>
       </div>

    </div>
  );
}

export default Contact;

