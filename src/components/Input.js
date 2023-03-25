import React from 'react';
import '../styles/input.css';

function Input(props) {
    const { label, placeholder, getVal, setVal, type } = props;

    return (
        <>
            <label>
                <div className='label-text'>{label}</div>
                <input
                    className='input-general'
                    type={type}
                    placeholder={placeholder}
                    onChange={(e) => setVal(e.target.value)}
                    value={getVal}
                />
            </label>
        </>
    );
}

export default Input;
