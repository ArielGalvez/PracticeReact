import React from 'react';
import MaterialIcon from 'material-icons-react';
import './Tool.css';
import PropTypes from 'prop-types';

function Tool({onClick, icon, position, text}) {
  return (
    <button className={`tool ${position}`} onClick={onClick}>
      <div className="tooltip">
        <MaterialIcon icon={icon} color="white"/>
        <span className="tooltiptext">{text}</span>
      </div>
    </button>
  );
}

Tool.defaultProps = {
  onClick: () => {
    console.log('tool is clicked');
  },
  position: 'left', // must to be: left or right
}

Tool.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
  position: PropTypes.string,
  text: PropTypes.string
}

export default Tool;