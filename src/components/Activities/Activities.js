import React from 'react';
import './Activities.scss';

import '../../styles/main.scss';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const Activities = () => {
  const slides = [
    { title: 'Credit Card usage', date: '04 March 2020', location:'Online', image:'./images/facebook1.png', link:''},
    { title: 'Asset Management',  date: 'Upcoming', location:'Online', image:'', link:''},
    { title: 'Asset Management',  date: 'Upcoming', location:'Online', image:'', link:''}
  ];
  return (
    <div className="activities">
        <div className="heading">
        <i class="fas fa-10x fa-hourglass-end"></i>
           <span className="heading-text">RECENT ACTIVITIES</span>
        </div>
        <Slider autoplay>
        {slides.map((slide, index) => <div key={index} className="slide" style={{backgroundImage:`url(${slide.image})`}}> 
          <h2>{slide.title}</h2>
          <span className="slide-date">{slide.date}</span>
          <span className="slide-location">Location: {slide.location}</span>
          <button><a href={slide.link}>PREVIEW</a></button>
        </div>)}
      </Slider>
    </div>
  );
}

export default Activities;
