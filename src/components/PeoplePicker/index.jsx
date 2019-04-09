import React from 'react';
import PersonPill from '../PersonPill';
import './PeoplePicker.css';
import PropTypes from 'prop-types';

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

PeoplePicker.defaultProps = {
    people: [],
    activeMembers: [],
    width: '50px',
    heigth: '100px'
}

PeoplePicker.propTypes = {
    people: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            avatar: PropTypes.string,
            width: PropTypes.string,
            heigth: PropTypes.string,
            onChange: PropTypes.func,
        })
    ),
    errorMessage: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func
}

export default PeoplePicker;