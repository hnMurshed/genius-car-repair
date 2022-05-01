import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price, _id } = service;

    const navigate = useNavigate();

    return (
        <div className='service'>
            <img src={img} alt={name} />
            <div className="body">
                <h3>{name}</h3>
                <span>Price: ${price}</span>
                <p>{description}</p>
                <button onClick={ () => navigate(`/services/${_id}`)} className='or-btn mt-4 w-100 border rounded-3 py-2'>Book Now</button>
            </div>
        </div>
    );
};

export default Service;