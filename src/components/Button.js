import React from 'react';

import '../styles/button.css';

function Button(props) {
    return (
        <button className="button-component" style={props}>
            {props.text}
        </button>
    )
};

export default Button;