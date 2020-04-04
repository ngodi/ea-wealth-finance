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
        <Service heading="Financial Planning" image="https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" description="10+ years of experience within the financial service space, it is time to start giving back to the society through his wealth of expeience and insight.
        10+ years of experience within the financial service space, it is time to start giving back to the society through his wealth of expeience and insight. "/>
    </div>
  );
}

export default Services;
