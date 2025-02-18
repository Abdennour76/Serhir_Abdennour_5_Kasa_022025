import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import Collapse from "./Collapse";
import Carrousel from "./Carrousel";

const Information = ({ logement }) => {
  return (
    <div className="information-container">
      <Carrousel pictures={logement.pictures} />

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
                icon={solidStar}
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
