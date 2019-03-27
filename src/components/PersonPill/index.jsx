import React from 'react';
import Avatar from '../Avatar';
import './PersonPill.css';

function PersonPill({src, name, width, heigth}) {
    // console.log(width, heigth)
    const stylePersonPill = {
        width: width,
        heigth: heigth,
        borderRadius: '50px'
    };
    return (
        <div className="person-pill" style={stylePersonPill}>
            <Avatar src={src} name={name} size={heigth} />
            <p>{name}</p>
        </div>
    );
}

export default PersonPill;