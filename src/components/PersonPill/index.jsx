import React from 'react';
import Avatar from '../Avatar';
import './PersonPill.css';

function PersonPill({id, src, name, width, heigth, onChange}) {
    // console.log(width, heigth)
    let stylePersonPill = {
        width: width,
        heigth: heigth,
        borderRadius: '50px'
    };
    const onPersonClick = () => {
        console.log(id)
        onChange(id);
    }
    return (
        <div className="person-pill" style={stylePersonPill} onClick= {onPersonClick}>
            <Avatar src={src} name={name} size={heigth} />
            <div className="content-pill">
                <h3>{name}</h3>
                <p>{"I am person!"}</p>
            </div>
        </div>
    );
}

export default PersonPill;