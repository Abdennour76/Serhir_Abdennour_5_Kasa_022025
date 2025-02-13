import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";
import data from "../data/data.json";

const Home = () => {
  return (
    <div className="page-container">
      <header className="header">
        <Navigation />
      </header>
      <main className="main-container">
        <Banner />
        <Card logement={data} /> {/* Passer les données des logements ici */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
