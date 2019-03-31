import React from 'react';
import './Button.css';
import MaterialIcon from 'material-icons-react';

function Button({onClick, disabled, text, icon, isLoading, type}) {
    // onClick, callback
    // disabled, bool
    // text, string
    // icon, string de material
    // isLoading, true,false -- es un spiner
    // type, string -- Primary, Secondary, Default
    const styleIcon = isLoading? <span className="spinner"></span> : <MaterialIcon icon={icon} color="white"/>;
    // const styleType = type? 'default': type;    
    return (
        <button className={`Button ${type}`} onClick={onClick} disabled={disabled}>
            {styleIcon}
            <span>{text}</span>
        </button>
    );
}

export default Button;