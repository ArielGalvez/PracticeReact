import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

import MaterialIcon from 'material-icons-react';

function Button({ onClick, disabled, text, icon, isLoading, type }) {
    // onClick, callback
    // disabled, bool
    // text, string
    // icon, string de material
    // isLoading, true,false -- es un spiner
    // type, string -- Primary, Secondary, Default
    const styleIcon = isLoading ? <span className="spinner"></span> : <MaterialIcon icon={icon} color="white" />;
    return (
        <button className={`Button ${type}`} onClick={onClick} disabled={disabled}>
            {styleIcon}
            <span>{text}</span>
        </button>
    );
}

Button.defaultProps = {
    // onClick:, 
    disabled:false, 
    text: '',
    icon: '', 
    isLoading: false,
    type: 'default'
}

Button.propTypes = {
    // onClick: ''
    disabled: PropTypes.bool,
    text: PropTypes.string,
    icon: PropTypes.string,
    isLoading: PropTypes.bool,
    type: PropTypes.string
}

export default Button;