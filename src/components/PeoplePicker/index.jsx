import React from 'react';
import PersonPill from '../PersonPill';
function PeoplePicker({people, activeMembers, width, heigth, onChange}) {
    // let selectedMembers = []
    // const isActive = (id) => {
    //     // console.log('aqui ',activeMembers)
    //     selectedMembers =  people.map(person => {
    //         return (activeMembers.includes(id))? true: false;
    //     });
    //     onChange(id);
    // }

    // const isSelected = (id) => {
    //     return (activeMembers.includes(id))? true: false;
    // };
    // const activeIs= true;
    const personPills = people.map( (person) => 
        <PersonPill key={person.id} active={(activeMembers.includes(person.id))? true: false} id={person.id} name={person.name} src={person.avatar} width={width} heigth={heigth} onChange={onChange}/>
    );
    // onChange();
    return (
        <div className="people-picker">
            {personPills}
        </div>
    );
}

export default PeoplePicker;