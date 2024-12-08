import React from 'react';
import './Timeline.css';
import TimelineEvent from '../TimelineEvent/TimelineEvent';
import events from './events';



const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timeline-vertical-line"></div>
      <div className="timeline-content">
        {events.map((event, index) => (
          <TimelineEvent key={index} {...event} index={index} />
        ))}
      </div>
      
    </div>
  );
};

export default Timeline;
