import React from 'react'
import MaterialIcon from 'material-icons-react';
import './toolbar.css';


function ToolBar({title, actions}) {
    return (
        <div className="toolBar">
            <label className={actions.position}>{title} </label>

            {( () => {
                let container = [];
                actions.forEach((action, index) => {
                    container.push(
                    <button key={index} onClick={action.onClick} className={action.position}>
                        <MaterialIcon icon={action.icon} color="white" />
                    </button>)
                });
                return container;
            })()}
        </div>
    );
}


export default ToolBar;