import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <div className="page-container">
      <header className="header">
        <Navigation />
      </header>
      <main className="main-container">
        <h6>404</h6>
        <h3>Oups! La page que vous demandez n'existe pas.</h3>
        <a href="/">Retourner sur la page d'accueil</a>
      </main>
      <Footer />
    </div>
  );
};

export default Error;
