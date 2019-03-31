import React from 'react';
import './InputField.css';

function InputField({onChange, autoFocus, errorMessage, label, placeHolder}) {

    const hanldeChange = (event) => {
        onChange(event.target.value);
    }
    const error = errorMessage? <p htmlFor={label}>{errorMessage}</p> : '';
    const styleError = errorMessage? 'borderError': '';
    return (     
        <div className={`InputField ${styleError}`}>
            <input type="text" id={label} required autoFocus={autoFocus} onChange={hanldeChange} /* placeholder={placeHolder} *//>
            <label htmlFor={label} >{label}</label>
            {error}
        </div>
    );
}

export default InputField;