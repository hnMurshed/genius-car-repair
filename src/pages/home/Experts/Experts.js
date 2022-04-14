import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'Will Smith', img: expert1 },
    { id: 2, name: 'Shakib al hasan', img: expert2 },
    { id: 3, name: 'Tamim Iqbal', img: expert3 },
    { id: 4, name: 'Musfiqur Rahim', img: expert4 },
    { id: 5, name: 'Masrafi boss', img: expert5 },
    { id: 6, name: 'Nasrin Sultana', img: expert6 }
]

const Experts = () => {
    return (
        <div id='experts' className='container py-5'>
            <h2 className='text-primary text-center mb-4'>Our Experts</h2>
            <div className="experts row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;