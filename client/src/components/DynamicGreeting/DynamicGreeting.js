import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './DynamicGreeting.css';

const DynamicGreeting = ({name}) => {
  const typedRef = useRef(null);
  const elementRef = useRef(null);

  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  useEffect(() => {
    const messages = [
      `${getTimeBasedGreeting()}, ${name}!`,
      'Welcome to RateMyCourse!',
    ];

    const options = {
      strings: messages,
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 1000,
      startDelay: 700,
      loop: true,
      showCursor: true,
      cursorChar: '_',
    };

    typedRef.current = new Typed(elementRef.current, options);

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, [name]);

  return (
    <div className="title-text">
      <h1>
        <span ref={elementRef}></span>
      </h1>
    </div>
  );
};

export default DynamicGreeting;