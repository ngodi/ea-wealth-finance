import React from 'react';
import './About.scss';

import '../../styles/main.scss';

const About = () => {
  return (
    <div className="about">
      <div className="heading">
      <i class="fas fa-10x fa-book"></i>
            <span className="heading-text">ABOUT US</span>
      </div>
        <div className="about-content">
            <div className="about-left">
                <div className="about-mission">
                  <h2 className="heading-secondary">MISSION STATEMENT</h2>
                  <p>The mission is to be able to reach out to those who do not have adequate knowledge in managing their personal finance in terms of enlightening them, coaching as well as mentorship to those in need. Equally provides guidance to individuals who are hoping to start their own business.</p>
                </div>
                <div className="about-vision">
                    <h2 className="heading-secondary">OUR VISION</h2>
                    <ul>
                        <li>To provide basic and free knowledge to every individual concerning their personal finance.</li>
                        <li>To coach and direct others to achieve their live goals and long term aspirations.</li>
                        <li>To mentor individuals within the financial services.</li>
                    </ul>
                </div>
            </div>
            <div className="about-right">
            <h2 className="heading-secondary">MEET THE FOUNDER</h2>
            <img src="https://images.pexels.com/photos/935943/pexels-photo-935943.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="CEO" width="100%" />
            <p>Neville Erambo is a financial planner, coach, mentor and entrepreneur. He hails from a town in the South West region of Cameroon, studied in South Africa and currently lives in the United Kingdom. He has over 10 years of experience within the financial services industry working as a financial planner. He is a member of the personal finance society in London which is arguably the best organisation in terms of personal finance.
                From humble beginnings and having made his way through life in what most people will call ‘a miracle’, he believes he has a lot to offer based on his wealth of experience and insight.
             </p>
            </div>
        </div>
    </div>
  );
}

export default About;

