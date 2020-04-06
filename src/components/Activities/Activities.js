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
                  <div className="card">
                    <div className="front">
                      <div className="activity-name">Facebook-live Talk on Credit management</div>
                      <div className="activity-date">Saturday 05 APRIL</div>
                    </div>
                    <div className="back">
                      <button className="activity-link">About...</button>
                    </div>
               </div>
            
            </div>
        </div>
    </div>
  );
}

export default Activities;
