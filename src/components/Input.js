import React from 'react';
import '../styles/input.css';

function Input(props) {
    const { label, placeholder, getVal, setVal } = props;

    return (
        <>
            <label>
                <div className='label-text'>{label}</div>
                <input
                    className='input-general'
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
