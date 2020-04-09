import React from 'react';
import './Service.scss';


const Service = (props) => {
  return (
    <div className="service-container">
        <div className="service">
        <div className="service-intro">
            <div className="service-heading">{props.heading}</div>
            <div className="service-img-box">
                <img src={props.image} alt="Our Service" width="100%" />
            </div>
        </div>
        <div className="service-content">
            <div className="service-description">{props.description}</div>
            <a target="_blank" href="https://calendly.com/albertngodi/financial-planning"><button className="book-btn">BOOK SESSION</button></a>
        </div>
    </div>
    </div>
  );
}

export default Service;