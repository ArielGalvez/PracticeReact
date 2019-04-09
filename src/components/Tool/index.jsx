import React from 'react';
import MaterialIcon from 'material-icons-react';
import './Tool.css';
// import PropTypes from 'prop-types';

function Tool({props}) {
  return (
    <button className={'tool '+props.position} onClick={props.onClick}>
      <MaterialIcon icon={props.icon} color="white"/>
    </button>
  );
}

/* Tool.defaultProps = {
  width: '400px',
  heigth: '80px',
  active: false
}

Tool.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
  width: PropTypes.string,
  heigth: PropTypes.string,
  onChange: PropTypes.func,
  active: PropTypes.bool
} */

export default Tool;