import React, { useEffect, useState } from "react";
import "./App.css"; 

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`success-container ${isVisible ? 'fade-in' : 'fade-out'}`}>
      <div className="success-circle">
        <svg
          className="tick-mark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="success-text">Registered Successfully!</p>
    </div>
  );
};

export default Home;
