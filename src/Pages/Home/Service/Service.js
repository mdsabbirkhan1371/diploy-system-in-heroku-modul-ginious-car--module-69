import React from 'react';

const Service = ({ service }) => {

    const { name, img, description, price } = service;

    return (
        <div>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
        </div>
    );
};

export default Service;