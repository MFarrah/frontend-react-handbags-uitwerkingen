import React from 'react';
import './Button.css';


function Button({ text, disabled }) {
    return (
        <button
            onClick={() => console.log(text)}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default Button;


