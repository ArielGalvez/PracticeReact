import React from 'react';
import './TeamForm.css';
import InputField from '../../../../components/InputField';
import PeoplePicker from '../../../../components/PeoplePicker';
import PropTypes from 'prop-types';


function TeamForm({ people, activeMembers, onPeopleChange, onChangeNameTeam, value }) {
  return (
    <div className="TeamForm">
      <InputField key='111' onChange={onChangeNameTeam} autoFocus={false} label={'Name Team'} value={value} />
      <PeoplePicker people={people} activeMembers={activeMembers} width={'400px'} heigth={'80px'} onChange={onPeopleChange} />
    </div>
  );
}

TeamForm.defaultProps = {
  people: [],
  activeMembers: []
}

TeamForm.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string,
      name: PropTypes.string,
      onChange: PropTypes.func,
      active: PropTypes.bool
    })
  ),
  activeMembers: PropTypes.arrayOf(
    PropTypes.string
  ),
}

export default TeamForm;
