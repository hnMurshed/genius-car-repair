import React, { useEffect } from 'react';
import Benner from '../Benner/Benner';
import Services from '../Services/Services';
import Experts from '../Experts/Experts';
import { useTitle } from '../../shared/TitleProvider/TitleProvider';

const Home = () => {

    /* const {setTitle} = useTitle();
    useEffect(() => {
        setTitle('Home')
      }, []) */

    return (
        <div>
            <Benner></Benner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;