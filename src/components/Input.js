import React from 'react';

function Input(props) {
    const { label, placeholder, getVal, setVal } = props;

    return (
        <>
            <label>
                <div className='text-md mb-2 font-bold text-gray-700 dark:text-gray-300'>
                    {label}
                </div>
                <input
                    className='input-general w-full dark:border-0 dark:bg-gray-600 dark:placeholder-gray-200'
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
