import React from 'react';
import '../styles/input.css';

function Input(props) {
    const { label, placeholder, getVal, setVal } = props;

    return (
        <>
            <label>
                <div class='label-text'>{label}</div>
                <input
                    class='input-general'
                    type='text'
                    placeholder={placeholder}
                    onChange={(e) => setVal(e.target.value)}
                    value={getVal}
                />
            </label>
        </>
    );
}

export default Input;
