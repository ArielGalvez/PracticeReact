import React from 'react';
import './ActionForm.css';
import Button from '../Button';

function ActionForm({actions, title, children}) {
    const child = React.Children.only(children);// renderiza formulario dentro de este action form, es mas limpio
    const buttons = actions.map( (button, index) => <Button key={index} onClick={button.onClick} text={button.text} icon={button.icon} type={button.type} isLoading={button.isLoading}></Button>);
    return (
        <div className="ActionForm">
            <h1>{title}</h1>
            {child}
            {buttons}
        </div>
    );
}

export default ActionForm;