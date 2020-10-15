import React from 'react';

import '../styles/service.css';

import Button from '../components/Button';

function Service(props) {
    return (
        <div className="service">
            <img className="image-service" src={props.image} />

            <h2>{props.title}</h2>

            <p className="description-service">{props.description}</p>

            <Button text="Learn more" />
        </div>
    )
};

export default Service;