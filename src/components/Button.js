import React from 'react';
import '../styles/button.css';

function Button(props) {
    const { action, text, type } = props;

    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                action(e);
            }}
            className={`button button-${type}`}>
            {text}
        </button>
    );
}

export default Button;
