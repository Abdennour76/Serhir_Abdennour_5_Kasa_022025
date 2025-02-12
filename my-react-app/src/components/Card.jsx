import React from 'react';
import data from '../data/data.json'

const Card = () => {
    
    return (
        <div className="card-container">
        {data.map((item) => (
            <div key={item.id} className="card">
                <img src={item.cover} alt={item.title} className="card-image" />
                <div className="card-content">
                    <h4 className="card-title">{item.title}</h4>
                </div>
            </div>
        ))}
    </div>
    );
};

export default Card;