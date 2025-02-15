import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import Collapse from "./Collapse";

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex === pictures.length - 1) {
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

const Information = ({ logement }) => {
  return (
    <div className="information-container">
      <div className="information-slideshow">
        <Slideshow pictures={logement.pictures} />
      </div>

      <div className="information-main">
        <div className="information-details">
          <h1 className="information-title">{logement.title}</h1>
          <p className="information-location">{logement.location}</p>
          <div className="information-tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="information-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="information-host-rating">
          <div className="information-host">
            <p className="host-name">{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="host-picture"
            />
          </div>
          <div className="information-rating">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={index < logement.rating ? solidStar : solidStar}
                className={`star-icon ${
                  index < logement.rating ? "filled" : "empty"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="information-section">
        <Collapse
          title="Description"
          content={logement.description}
          className="collapse-description"
        />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((equip, index) => (
                <li key={index}>{equip}</li>
              ))}
            </ul>
          }
          className="collapse-equipements"
        />
      </div>
    </div>
  );
};

export default Information;
