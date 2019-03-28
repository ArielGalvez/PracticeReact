import React from 'react';
import './Avatar.css';
function Avatar({src, name, size}) {
    // console.log(size)
    const getInitials = userName => {
        const initials = userName.split(' ');
        const firstName= initials[0][0];
        const lastName= initials[1][0];
        return firstName+' '+lastName;
    };

    // const getNumSize = () => {
    //     const strSize = size.substring(0, size.length-2);
    //     return parseInt(strSize, 10);
    // };

    const styleSize = {
        width: size, 
        height: size,
        borderRadius: '50%'
    };
    
    const fakeImg = <div className="circle" style={styleSize} ><label>{getInitials(name)}</label></div>
    const img= <img src={src} alt={name} /* size={size} */ style={styleSize}/>
    let content = src? img: fakeImg;
    // getNumSize();
    return (
        <div className="avatar">
            {content}
        </div>
    );
}

export default Avatar;