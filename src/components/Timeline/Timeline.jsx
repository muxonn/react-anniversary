import React from 'react';
import './Timeline.css';
import TimelineEvent from '../TimelineEvent/TimelineEvent';


const events = [
  {
    date: '2023-11-01',
    title: 'Wyjście do kina',
    imageUrl: require('../../assets/img/1.png'),
  },
  {
    date: '2023-12-15',
    title: 'Wakacje w górach',
    imageUrl: require('../../assets/img/3.png'),
  },
  {
    date: '2023-12-15',
    title: 'Wakacje w górach',
    imageUrl: require('../../assets/img/2.png'),
  },
  {
    date: '2023-12-15',
    title: 'Wakacje w górach',
    imageUrl: require('../../assets/img/2.png'),
  },
  {
    date: '2023-12-15',
    title: 'Wakacje w górach',
    imageUrl: require('../../assets/img/2.png'),
  },
  {
    date: '2023-12-15',
    title: 'Wakacje w górach',
    imageUrl: require('../../assets/img/2.png'),
  },
  {
    date: '2023-12-15',
    title: 'Wakacje w górach',
    imageUrl: require('../../assets/img/2.png'),
  },
  // Dodaj więcej wydarzeń, jak potrzebujesz
];

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
