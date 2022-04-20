import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{position: 'absolute', top: '48%', left: '45%'}}>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
        </div>
    );
};

export default Loading;