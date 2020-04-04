import React from 'react';
import './Service.scss';


const Service = (props) => {
  return (
    <div className="service">
        <div className="service-intro">
            <div className="service-heading">{props.heading}</div>
            <div className="service-img-box">
                <img src={props.image} alt="Our Service" width="100%" />
            </div>
        </div>
        <div className="service-content">
            <div className="service-description">{props.description}</div>
            <button className="book-btn">BOOK AN APPOINTMENT</button>
        </div>
    </div>
  );
}

export default Service;