import React, { useEffect, useRef } from 'react';
import './HandwrittenText.css';

const HandwrittenText = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll('span');
    letters.forEach((letter, i) => {
      letter.style.animationDelay = `${i * 0.1}s`;
    });
  }, [text]);

  return (
    <div className="handwritten-text" ref={textRef}>
      {text.split('').map((char, index) => (
        <span key={index} className="letter">
          {char}
        </span>
      ))}
    </div>
  );
};

export default HandwrittenText;
