import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './actions';
import TeamForm from '../components/TeamForm';
import ActionForm from '../../../components/ActionForm';
import Navbar from '../../Navbar';
// import { GetTeam } from '../../../services/Rest/TeamRest.jsx';

class EditTeam extends Component {

  render() {
    const {people, formEdit} = this.props;
    // console.log('edit:',formEdit)
    const actions = [
      {
        text: 'Update',
        onClick: this.onClickButtonUpdateTeam,
        type: 'primary',
        isLoading: false,
        icon: 'check_circle'
      },
      {
        text: 'Cancel',
        onClick: this.onClickButtonCancel,
        type: 'secondary',
        isLoading: false,
        icon: 'cancel'
      }
    ];
    return (
      <div className="EditTeam">
        <Navbar></Navbar>
        <ActionForm title={'Edit Team'} actions={actions} >
          <TeamForm people={people} activeMembers={formEdit.members} onPeopleChange={this.handlePeople} onChangeNameTeam={this.changeNameTeam} value={formEdit.nameTeamValue}>
          </TeamForm>
        </ActionForm>
      </div>
    );
  }

  handlePeople = (id) => {
    this.props.updatePeople(id);
  }

  onClickButtonUpdateTeam = (event) => {
    this.props.addTeam();
  }

  onClickButtonCancel = () => {
    this.props.restoreForm();
  }

  changeNameTeam = (value) => {
    this.props.updateForm({
      nameTeamValue: value
    });
  }

  /* async componentDidMount() {
    // const request = await GetTeam('1');
    // this.setState({
    //   formEdit: request
    // });
    const request = await GetTeam('1');
    this.props.updateForm({
      nameTeamValue: request.nameTeamValue
    });
    request.members.forEach(id => {
      this.props.updatePeople(id);
    });
  } */
}

const mapStatesToProps = (state) => {
  console.log(state);
  
  return {
		people: state.editTeam.people,
		formEdit: state.editTeam.formEdit,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
		addTeam: () => dispatch(actions.ADD_TEAM()),
		restoreForm: () => dispatch(actions.RESTORE_FORM()),
    updatePeople: (payload) => dispatch(actions.UPDATE_PEOPLE(payload)),
		updateForm: (payload) => dispatch(actions.UPDATE_FORM(payload))
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(EditTeam);
