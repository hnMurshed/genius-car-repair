import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='services' className="container py-5">
            <h2 className='page-title text-primary mb-4'>Our Services</h2>
            <div className='services'>
                {
                    // services.map(service => <Service
                    //     key={service.id}
                    //     service={service}
                    // ></Service>)
                    services.map(service => <Service 
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;