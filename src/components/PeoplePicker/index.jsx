import React from 'react';
import PersonPill from '../PersonPill';
function PeoplePicker({people, activeMembers, width, heigth, onChange}) {
    // const isSelected = (id) => {
    //     return activeMembers.includes(person.id);
    // };
    const personPills = people.map( (person) => 
        <PersonPill key={person.id} active={(activeMembers.includes(person.id))} id={person.id} name={person.name} src={person.avatar} width={width} heigth={heigth} onChange={onChange}/>
    );

    return (
        <div className="people-picker">
            {personPills}
        </div>
    );
}

export default PeoplePicker;