import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

import Home from './Home';
import WhatWeDo from './WhatWeDo';

import moveScrollTo from '../utilities/moveScrollTo';

function Landing(props) {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        moveScrollTo();
    }, []);

    return (
        <div className="App">
            <Home imageBackground={props.location.state} />
            <WhatWeDo />
        </div>
    );
}

export default Landing;

