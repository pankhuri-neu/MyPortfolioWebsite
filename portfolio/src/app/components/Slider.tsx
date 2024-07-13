"use client";

import React, { useState } from "react";

interface SliderProps {
  testimonials: React.ReactNode[];
}

const Slider: React.FC<SliderProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="slider-container flex justify-center mt-16 w-full">
      <button className="prev-button" onClick={prevSlide}>
        &lt;
      </button>
      <div className="testimonial-card">{testimonials[currentIndex]}</div>
      <button className="next-button" onClick={nextSlide}>
        &gt;
      </button>

      <style jsx>{`
        .slider-container {
          display: flex;
          align-items: center;
        }
        .testimonial-card {
          flex: 1;
          padding: 1rem;
          max-width: 100%;
          text-align: center;
        }
        .prev-button,
        .next-button {
          background-color: #81b72fff;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          cursor: pointer;
          margin: 0 1rem;
          flex-shrink: 0;
        }
        .prev-button:hover,
        .next-button:hover {
          background-color: #5a9b5e;
        }
        @media (max-width: 768px) {
          .testimonial-card {
            padding: 0.5rem;
            text-align: left;
          }
          .prev-button,
          .next-button {
            padding: 0.25rem 0.5rem;
            margin: 0 0.5rem;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Slider;
