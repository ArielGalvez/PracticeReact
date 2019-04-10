import React from 'react'
import './Toolbar.css';
import Tool from '../Tool';
import PropTypes from 'prop-types';

function Toolbar({ title, actions, onClick }) {
  const tools = actions.map((action, index) => <Tool key={index} onClick={action.onClick} icon={action.icon} position={action.position} text={action.text}/>);
  return (
    <div className="toolBar">
      <label className={actions.position} onClick={onClick}>{title}</label>
      {tools}
    </div>
  );
}

Toolbar.defaultProps = {
  actions: [],
  onClick: () => {
    console.log('title on toolbar has clicked');
  },
}

Toolbar.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      onClick: PropTypes.func,
      icon: PropTypes.string,
      position: PropTypes.string,
      text: PropTypes.string
    })
  ),
  onClick: PropTypes.func
}

export default Toolbar;