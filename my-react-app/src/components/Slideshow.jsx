import React, { useState } from "react";

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    if (currentIndex === 0) {
      // Si on est sur la première image, revenir à la dernière
      setCurrentIndex(pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex === pictures.length - 1) {
      // Si on est sur la dernière image, revenir à la première
      setCurrentIndex(0);
    } else {
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
            {/* Flèche gauche */}
            <button
              onClick={previousSlide}
              className="arrow arrow-left"
              aria-label="Previous slide"
            >
              ❮
            </button>

            {/* Flèche droite */}
            <button
              onClick={nextSlide}
              className="arrow arrow-right"
              aria-label="Next slide"
            >
              ❯
            </button>

            {/* Indicateur de position */}
            <div className="indicator">
              {currentIndex + 1} / {pictures.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Slideshow;
