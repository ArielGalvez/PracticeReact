import React from 'react';
import './ImputField.css';

function ImputField({onChange, autoFocus, errorMessage, label, placeHolder}) {
    // let stylePersonPill = {
    //     width: width,
    //     heigth: heigth,
    //     borderRadius: '50px'
    // };
    const hanldeChange = (event) => {
        onChange(event.target.value);
    }
    const error= errorMessage? <p htmlFor="">{errorMessage}</p> : '';
    return (
        <div className="ImputField">
            <label htmlFor="">{label}</label>
            <input type="text" className="value" placeholder={placeHolder} onChange={hanldeChange} autoFocus={autoFocus}/>
            {error}
        </div>
    );
}

export default ImputField;