import React, { useEffect } from 'react';
import { useTitle } from '../shared/TitleProvider/TitleProvider';

const About = () => {

    /* const {setTitle} = useTitle();
    useEffect(() => {
        setTitle('About')
      }, []) */

    return (
        <div>
            <h2>This is about us page</h2>
        </div>
    );
};

export default About;