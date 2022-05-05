import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../../hooks/useServiceDetails';

const ServiceDetail = () => {
    const { serviceId } = useParams();

    const [service] = useServiceDetails(serviceId);

    const { name, img, description, price, _id } = service;

    return (
        <div className='my-5 container'>
            <div className="service-details row">
                <div className="img-container col-12 col-md-7">
                    <img className='w-100' src={img} alt={name} />
                </div>
                <div className="details col-12 col-md-5">
                    <h2>{name}</h2>
                    <span className='fs-4'>${price}</span>
                    <del className='fs-4 ms-2'>${19+parseFloat(price)}</del>

                    <button className='btn btn-info w-100 mt-2'>Add to Card</button>
                    <Link to={`/checkout/${_id}`} className='btn btn-primary w-100 mt-2'>Confirm Booking</Link>
                    <hr />
                    <h3 className='text-center'>DESCRIPTION</h3>
                    <p>{description}</p>
                </div>
            </div>
            
        </div>

    );
};

export default ServiceDetail;