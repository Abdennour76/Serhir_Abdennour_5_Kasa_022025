import React from "react";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const location = useLocation();

  // Détecter la page actuelle
  const isAboutPage = location.pathname === "/about";

  return (
    <div className={isAboutPage ? "banner2" : "banner1"}>
      <h1>{isAboutPage ? "" : "Chez vous, partout et ailleurs"}</h1>
    </div>
  );
};

export default Banner;
