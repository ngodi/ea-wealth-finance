import React from 'react';
import './Activities.scss';

import '../../styles/main.scss';

const Activities = () => {

  return (
    <div className="activities">
        <div className="heading">
        <i class="fas fa-10x fa-hourglass-end"></i>
           <span className="heading-text">RECENT ACTIVITIES</span>
        </div>
        <div className="activities-content">
            <div className="activity">
                <div className="activity-name">Facebook-live Talk on Credit</div>
                <div className="activity-date">Saturday 05 APRIL</div>
                <button className="activity-link">More...</button>
            </div>
        </div>
    </div>
  );
}

export default Activities;