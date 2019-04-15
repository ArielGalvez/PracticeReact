import React from 'react';
import PersonPill from '../PersonPill';
// import './PeopleView.css';
import PropTypes from 'prop-types';

function PeopleView({ people, activeMembers, width, heigth, onChange }) {

  const personPills = people.map((person) =>
    <PersonPill key={person.id} active={(activeMembers.includes(person.id))} id={person.id} name={person.name} src={person.avatar} width={width} heigth={heigth} onChange={onChange} />
  );
  return (
    <div className="people-picker">
      {personPills}
    </div>
  );
}

PeopleView.defaultProps = {
  people: [],
  activeMembers: [],
  width: '400px',//must end with: px
  heigth: '80px' //must end with: px
}

PeopleView.propTypes = {
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

export default PeopleView;