import React from 'react';
import useServices from '../../hooks/useServices';

const ManageService = () => {
    const [services, setServices] = useServices();

    const handleRemove = id => {
        const url =`https://protected-oasis-61800.herokuapp.com/service/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            const remaining = services.filter(service => service._id !== id);
            setServices(remaining);
        })
    }
    return (
        <div className='container my-5'>
            <h2 className='text-center'>Manage your service</h2>
            {
                services.map(service => <div 
                key={service._id}
                className='d-flex justify-content-between align-items-center my-3'
                >
                    <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                        <img style={{width: '100px'}} src={service.img} alt={service.name} />
                        <h4 className='m-0'>{service.name}</h4>
                        <span className='fs-4'>${service.price}</span>
                    </div>
                    <button onClick={ () => handleRemove(service._id)}>Remove</button>
                </div>)
            }
        </div>
    );
};

export default ManageService;