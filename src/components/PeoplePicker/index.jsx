import React from 'react';
import PersonPill from '../PersonPill';
function PeoplePicker({people, activeMembers, width, heigth, onChange}) {
    const isActive = (id) => {
        
    }
    const personPills = people.map( (person) => 
        <PersonPill key={person.id} active={isActive(person.id)} id={person.id} name={person.name} src={person.avatar} width={width} heigth={heigth} onChange={onChange}/>
    );
    // onChange();
    return (
        <div className="people-picker">
            {personPills}
        </div>
    );
}

export default PeoplePicker;