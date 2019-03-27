import React from 'react';
import './Avatar.css';
function Avatar({src, name, size}) {
    // console.log(size)
    const getInitials = userName => {
        const initials = userName.split(' ');
        const firstName= initials[0][0];
        const LastName= initials[1][0];
        return firstName+' '+LastName;
    };

    const text = <div className="circle"><label>{getInitials(name)}</label></div>
    
    const img= <img src={src} alt={name} size={size} style={{width: size, height: size, borderRadius: '50%'}}/>
    let content = img;
    if(!src){
        content = text;
    }
    return (
        <div className="avatar" style={{width: size, height: size}}>
            {content}
        </div>
    );
}

export default Avatar;