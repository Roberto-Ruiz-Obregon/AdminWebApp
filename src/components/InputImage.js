import React from 'react';
import '../styles/input.css';

function Input(props) {
    const { label, getVal, setVal } = props;

    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setVal(undefined);
            return;
        }
        setVal(e.target.files[0]);
    };

    return (
        <>
            <label>
                <div className='label-text'>{label}</div>
                <input className='input-general' type='file' onChange={onSelectFile} />
                <p>{getVal && `${getVal.name} - ${getVal.type}`}</p>
            </label>
        </>
    );
}

export default Input;
