import React from 'react';
import Benner from '../Benner/Benner';
import Services from '../Services/Services';
import Experts from '../Experts/Experts';

const Home = () => {
    return (
        <div>
            <Benner></Benner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;