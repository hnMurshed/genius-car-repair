import React from 'react';
import './Expert.css';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className="col">
            <div className='expert border'>
                <img className='w-100' src={img} alt={name} />
                <div className="body">
                    <h4 className='mt-3'>{name}</h4>
                </div>
            </div>
        </div>
    );
};

export default Expert;