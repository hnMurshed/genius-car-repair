import React from 'react';
import { Helmet } from 'react-helmet-async';

const RouteWithTitle = ({ title, children }) => {
    return (
        <div>
            <Helmet>
                <title>{title} - Genius Car Repair</title>
            </Helmet>
            {children}
        </div>
    );
};

export default RouteWithTitle;