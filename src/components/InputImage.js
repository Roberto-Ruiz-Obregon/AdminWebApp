import React from 'react';
import '../styles/input.css';

function Input(props) {
    const { label, getVal, setVal } = props;

    return (
        <>
            <label>
                <div className='label-text'>{label}</div>
                <input
                    className='input-general'
                    type='file'
                    onChange={(e) => setVal(e.target.files[0])}
                />
                <p>{getVal && `${getVal.name} - ${getVal.type}`}</p>
            </label>
        </>
    );
}

export default Input;
