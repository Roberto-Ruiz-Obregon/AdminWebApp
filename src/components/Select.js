import React from 'react';
import '../styles/input.css';

function Select(props) {
    const { label, getVal, setVal, options } = props;

    return (
        <div>
            <label>
                <div className='label-text'>{label}</div>
                <select
                    name='modality'
                    className='input-general'
                    value={getVal}
                    onChange={(e) => setVal(e.target.value)}>
                    <option key='no selected' value=''>
                        Selecciona una opción
                    </option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
}

export default Select;
