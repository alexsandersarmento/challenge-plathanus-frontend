import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Service from '../components/Service';

import '../styles/what-we-do.css';

function WhatWeDo() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        async function getServices() {
            await axios.get('http://localhost:3333/services')
                .then(res => {
                    setServices(res.data)
                });
        }

        getServices();
    }, []);

    return (
        <div id="what-we-do">
            <div className="title">
                <h2>WHAT WE DO</h2>

                <hr />

                <p>Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor.</p>

            </div>

            <div className="services">
                {services.map(service => {
                    return <Service image={service.image} title={service.title} description={service.description} />
                })}
            </div>
        </div>
    )
};

export default WhatWeDo;