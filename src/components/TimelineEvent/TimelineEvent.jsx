import React, { useRef, useEffect, useState } from 'react';
import './TimelineEvent.css';

const TimelineEvent = ({ date, title, imageUrl, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Klasa dynamiczna na podstawie indeksu, dla naprzemiennego wyświetlania
  const alignmentClass = index % 2 === 0 ? 'left' : 'right';

  return (
    <div ref={ref} className={`timeline-event ${isVisible ? 'visible' : ''} ${alignmentClass}`}>
      <div className={`event-content ${isVisible ? 'visible' : ''} ${alignmentClass}`}>
        <img src={imageUrl} alt={title} className="event-image" />
        <div className="event-text">
          <h3>{date}</h3>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineEvent;
