import React from 'react';
import PersonPill from '../PersonPill';
function PeoplePicker({people, width, heigth}) {
    const personPills = people.map( (person) => 
        <PersonPill key={person.id} name={person.name} src={person.avatar} width={width} heigth={heigth}/>
    );
    return (
        <div className="people-picker">
            {personPills}
        </div>
    );
}

export default PeoplePicker;