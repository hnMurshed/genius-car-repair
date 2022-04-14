import { Button } from 'bootstrap';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className='my-5 container'>
            <h2 className='text-center'>Welcome to Serice Detail</h2>
            <h3>We are seeing now the details for service no. {serviceId}</h3>
            <Link to='/shipment' className='btn btn-primary'>Confirm Booking</Link>
        </div>

    );
};

export default ServiceDetail;