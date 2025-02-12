import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Error = () => {
    return (
        <div>
            <Navigation />
            <h6>404</h6>
            <h3>Oups! La page que vous demandez n'existe pas.</h3>
            <a href="/">Retourner sur la page d'accueil</a>
            <Footer />
        </div>
    );
};

export default Error;