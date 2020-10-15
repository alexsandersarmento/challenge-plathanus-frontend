import React from 'react';

import '../styles/what-we-do.css';

import Service from '../components/Service';

import service01 from '../images/service-01.jpg';
import service02 from '../images/service-02.jpg';
import service03 from '../images/service-03.jpg';

function WhatWeDo() {
    return (
        <div id="what-we-do">
            <div className="title">
                <h2>WHAT WE DO</h2>

                <hr />

                <p>Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor.</p>

            </div>

            <div className="services">
                <Service image={service01} title="Lorem Ipsum" description="Sed in turpis eget sapien pharetra consectetur. Vestibulum sit amet est ipsum. Vivamus non condimentum erat, quis aliquet tellus." />
                <Service image={service02} title="Lorem Ipsum" description="Sed in turpis eget sapien pharetra consectetur. Vestibulum sit amet est ipsum. Vivamus non condimentum erat, quis aliquet tellus." />
                <Service image={service03} title="Lorem Ipsum" description="Sed in turpis eget sapien pharetra consectetur. Vestibulum sit amet est ipsum. Vivamus non condimentum erat, quis aliquet tellus." />
            </div>
        </div>
    )
};

export default WhatWeDo;