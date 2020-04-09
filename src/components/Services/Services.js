import React from 'react';
import './Services.scss';

import Service from '../Service/Service';


const Services = () => {
  return (
    <div className="services">
        <div className="heading">
        <i class="fas fa-10x fa-chart-pie"></i>
            <span className="heading-text">OUR SERVICES</span>
        </div>
       <div className="service-content-box">
       <Service heading="Financial Planning" book="https://calendly.com/albertngodi/financial-planning" image="https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" description="10+ years of experience within the financial service space, it is time to start giving back to the society through his wealth of expeience and insight.
        10+ years of experience within the financial service space, it is time to start giving back to the society through his wealth of expeience and insight. "/>
         <Service heading="Coaching & Mentoring" book="https://calendly.com/albertngodi/financial-planning" image="https://images.pexels.com/photos/3797/black-and-white-sport-fight-boxer.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" description="Through my insight, I support individuals to achieve their specific personal or professional goal by providing training and guidance. The process is developmental and gradual as individuals get to master the process."/>

         <Service heading="Entrepreneurship" book="https://calendly.com/albertngodi/financial-planning" image="https://images.pexels.com/photos/3197389/pexels-photo-3197389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" description="As a child, I was brought up with the entrepreneurial spirit, brought up to sell ‘corn’ and ‘groundnut’ in Cameroon. My grandmother was a ‘puff puff’ maker and I had to trek to sell it on a daily basis, equally sold ‘okra’ and brooms. In South Africa, I did pitching to pay for my fees and to get life going. However, still a businessman till date. It is time to pass over 25 years of selling and share my experience. “In a nutshell, I was born to sell and believe in sales."/>
        
       </div>
    </div>
  );
}

export default Services;
