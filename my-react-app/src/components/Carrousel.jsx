import React, { useState } from "react";

const Carrousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
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
              className="arrow arrow-left"
              aria-label="Previous slide"
            >
              ❮
            </button>

            <button
              onClick={nextSlide}
              className="arrow arrow-right"
              aria-label="Next slide"
            >
              ❯
            </button>

            <div className="indicator">
              {currentIndex + 1} / {pictures.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Carrousel;
