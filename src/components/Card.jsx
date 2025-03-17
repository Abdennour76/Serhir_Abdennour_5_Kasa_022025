import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ logement }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/propriete/${id}`); // Redirige vers la page avec l'ID spécifique
  };

  return (
    <div className="card-container">
      {logement.map((item) => (
        <div key={item.id} className="card">
          <img
            src={item.cover}
            alt={item.title}
            className="card-image"
            onClick={() => handleClick(item.id)} // Passer l'ID de l'élément actuel
          />
          <div className="card-content">
            <h4 className="card-title" onClick={() => handleClick(item.id)}>
              {item.title}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
