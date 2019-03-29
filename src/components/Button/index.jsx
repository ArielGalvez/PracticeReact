import React from 'react';
import './ImputField.css';

function ImputField({onClick, disabled, text, icon, isLoading, type}) {
    // onClick, callback
    // disabled, bool
    // text, string
    // icon, string de material
    // isLoading, true,false -- es un spiner
    // type, string -- Primary, Secondary, Default
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