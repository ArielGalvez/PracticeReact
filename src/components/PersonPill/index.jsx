import React from 'react';
import Avatar from '../Avatar';
import './PersonPill.css';

function PersonPill({id, src, name, width, heigth, onChange, active}) {
    // console.log(width, heigth)
    const calculateRadius = () => {
        const number = (parseInt(heigth.substring(0, heigth.length), 10)/2)+10;
        return number;
    }

    let stylePersonPill = {
        width: width,
        heigth: heigth,
        borderRadius: calculateRadius()+'px'
    };
    const onPersonClick = () => {
        onChange(id);
    }

    const classPill = !active ? 'hasOpacity' : '';
    return (
        <div className={`${classPill} person-pill`} style={stylePersonPill} onClick= {onPersonClick}>
            <Avatar src={src} name={name} size={heigth}/>
            <div className="content-pill">
                <h3>{name}</h3>
                <p>{"I am person!"}</p>
            </div>
        </div>
    );
}

export default PersonPill;