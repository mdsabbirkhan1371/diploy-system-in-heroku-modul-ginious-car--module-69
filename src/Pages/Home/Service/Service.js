import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Service.css'
const Service = ({ service }) => {

    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const seeProductInfo = id => {
        navigate(`/service/${id}`)
    }

    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => seeProductInfo(id)} className='btn btn-info'>Book: {name}</button>
        </div>
    );
};

export default Service;