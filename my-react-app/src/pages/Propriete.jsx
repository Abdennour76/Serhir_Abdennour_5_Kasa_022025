import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Error from "./Error";
import Slideshow from "../components/Slideshow";

const Propriete = () => {
  const { id } = useParams(); // Récupérer l'ID depuis l'URL
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return <Error />;
  }

  return (
    <div className="page-container">
      <header className="header">
        <Navigation />
      </header>
      <main className="main-container">
        <Slideshow logement={logement} />
      </main>
      <Footer />
    </div>
  );
};

export default Propriete;
