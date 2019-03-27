import React from 'react'
import './Toolbar.css';
import Tool from '../Tool';


function Toolbar({title, actions}) {
    const tools = actions.map((action, index) => <Tool key={index} props={action} />);
    return (
        <div className="toolBar">
            <label className={actions.position}>{title}</label>
            {tools}
        </div>
    );
}


export default Toolbar;