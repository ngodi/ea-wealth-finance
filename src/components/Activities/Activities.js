import React from 'react';
import './Activities.scss';

import '../../styles/main.scss';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const Activities = () => {
  const slides = [
    { title: 'Advice on credit management', date: '04 March 2020', location:'Online', image:'', link:''},
    { title: 'Asset Management Coaching',  date: 'Upcoming', location:'Online', image:'', link:''}
  ];
  return (
    <div className="activities">
        <div className="heading">
        <i class="fas fa-10x fa-hourglass-end"></i>
           <span className="heading-text">RECENT ACTIVITIES</span>
        </div>
        <div className="activities-content">
        <Slider>
        {slides.map((slide, index) => <div key={index}  style={{backgroundImage:`url(${slide.image})`}}>
          <h2>{slide.title}</h2>
          <div>{slide.date}</div>
          <span>Location: {slide.location}</span>
          <button><a href={slide.link}>VIEW MORE</a></button>
        </div>)}
      </Slider>
        </div>
    </div>
  );
}

export default Activities;
