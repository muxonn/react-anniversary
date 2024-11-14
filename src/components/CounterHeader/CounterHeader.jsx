import React, { useEffect, useState, useRef } from "react";
import './CounterHeader.css';

const CounterHeader = ({ targetValue, text, imgUrl, isEven }) => {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  const counterRef = useRef(null); // Create a reference for the section

  useEffect(() => {
    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is in the viewport, start the counter
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    // Start observing the element
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // Clean up the observer when the component is unmounted
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const incrementCounters = () => {
        setCounter(prevCounter => {
          let newCounter = prevCounter;
          let reachedTarget = true;

          if (newCounter < targetValue) {
            newCounter += Math.floor(targetValue / 100); // Tempo inkrementacji
            if (newCounter > targetValue) {
              newCounter = targetValue; // Zatrzymanie na docelowej wartości
            }
            reachedTarget = false;
          }

          if (reachedTarget) {
            clearInterval(interval);
          }

          return newCounter;
        });
      };

      // Start the interval when the component becomes visible
      const interval = setInterval(incrementCounters, 30);

      return () => clearInterval(interval); // Clean up interval on unmount
    }
  }, [isVisible, targetValue]);

  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight, // Scroll by the height of the viewport
      behavior: 'smooth', // Smooth scrolling
    });
  };

  return (
    <section
      className={`header ${isEven ? "even" : ""}`} // Conditionally add 'even' class
      ref={counterRef}
    >
      <video className="background-video" autoPlay loop muted>
        <source src={imgUrl} type="video/mp4" />
      </video>

      <div className="video-overlay"></div>

      <div className={`content ${isEven ? "even" : ""}`}> {/* Conditionally add 'even' class */}
        <div className="counter">
          <p className="counter-text">
            {counter} {text}
          </p>
        </div>
        <div className={`content-divider ${isEven ? "even" : ""}`}></div>
        
      </div>

      {/* Arrow button to scroll to the next section */}
      <div className="scroll-arrow" onClick={handleScroll}>
        <div className="arrow-icon">&#8595;</div> {/* Down arrow */}
      </div>

      <div className="scroll-arrow" onClick={handleScroll}>
        <div className="arrow-icon">&#8595;</div> {/* Down arrow */}
      </div>
    </section>
  );
};

export default CounterHeader;
