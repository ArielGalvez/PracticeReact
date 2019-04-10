import React from 'react';
import './TeamForm.css';
import InputField from '../../../../components/InputField';
import PeoplePicker from '../../../../components/PeoplePicker';

function TeamForm ({people, activeMembers, onPeopleChange, onChangeNameTeam}) {
  return (
    <div className="TeamForm">
        <InputField key='111' onChange={onChangeNameTeam} autoFocus={false}  label={'Name Team'}/>
        <PeoplePicker people={people} activeMembers={activeMembers} width={'400px'} heigth={'80px'} onChange={onPeopleChange} />
    </div>
  );
}

export default TeamForm;
