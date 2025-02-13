import React, { useState } from "react";

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < pictures.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="slideshow">
      <div className="slide-container">
        <img
          src={pictures[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slide-image"
        />
        {pictures.length > 1 && (
          <>
            <button
              onClick={previousSlide}
              className={`arrow arrow-left ${
                currentIndex === 0 ? "hidden" : ""
              }`}
              aria-label="Previous slide"
            >
              <i className="fa-solid fa-chevron-left fa-2xl"></i>
            </button>
            <button
              onClick={nextSlide}
              className={`arrow arrow-right ${
                currentIndex === pictures.length - 1 ? "hidden" : ""
              }`}
              aria-label="Next slide"
            >
              <i className="fa-solid fa-chevron-right fa-2xl"></i>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Slideshow;
