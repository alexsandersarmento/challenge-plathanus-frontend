import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import BackgroundChange from './pages/BackgroundChange';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/background-change" exact component={BackgroundChange} />
        </BrowserRouter>
    );
}

export default Routes;