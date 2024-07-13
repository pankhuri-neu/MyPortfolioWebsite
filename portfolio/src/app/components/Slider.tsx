// components/Slider.tsx
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
        Previous
      </button>
      <div className="testimonial-card">{testimonials[currentIndex]}</div>
      <button className="next-button" onClick={nextSlide}>
        Next
      </button>

      <style jsx>{`
        .slider-container {
          display: flex;
          align-items: center;
        }
        .testimonial-card {
          flex: 1;
          padding: 1rem;
        }
        .prev-button,
        .next-button {
          background-color: #81b72fff;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          cursor: pointer;
          margin: 0 1rem;
        }
        .prev-button:hover,
        .next-button:hover {
          background-color: #5a9b5e;
        }
      `}</style>
    </div>
  );
};

export default Slider;
