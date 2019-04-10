import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

import MaterialIcon from 'material-icons-react';

function Button({ onClick, disabled, text, icon, isLoading, type }) {

  const styleIcon = isLoading ? <span className="spinner"></span> : <MaterialIcon icon={icon} color="white" />;
  return (
    <button className={`Button ${type}`} onClick={onClick} disabled={disabled}>
      {styleIcon}
      <span>{text}</span>
    </button>
  );
}

Button.defaultProps = {
  onClick: () => {
    console.log('button is press');
  },
  disabled: false,
  text: '',
  icon: '', // must be: name of material react icons
  isLoading: false,
  type: 'default'// must be: primary, secondary, default
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.string, 
  isLoading: PropTypes.bool,
  type: PropTypes.string
}

export default Button;