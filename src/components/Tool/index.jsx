import React from 'react';
import MaterialIcon from 'material-icons-react';
import './Tool.css';

function Tool({props}) {
  return (
    <button className={'tool '+props.position} onClick={props.onClick}>
      <MaterialIcon icon={props.icon} color="white"/>
    </button>
  );
}
export default Tool;