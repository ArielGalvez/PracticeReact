import React, { Component } from 'react';
// import './EditTeam.css';
import TeamForm from '../components/TeamForm';
import ActionForm from '../../../components/ActionForm';
import Navbar from '../../Navbar';
import { GetTeam } from '../../../services/Rest/TeamRest.jsx';
class EditTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          id: "1",
          name: "Gregory Frederickson",
          isActive: true,
          avatar: "https://lh3.googleusercontent.com/-8Y5l_IGCkc8/AAAAAAAAAAI/AAAAAAAAAAc/hP8pp2loX3I/s96-c/photo.jpg"
        },
        {
          id: "2",
          avatar: "https://lh4.googleusercontent.com/-Mq3J6qJaPdA/AAAAAAAAAAI/AAAAAAAAAAc/XRSfECwWYEA/s96-c/photo.jpg",
          email: "engageme.demo1@gmail.com",
          isActive: true,
          name: "Anthony Johnson"
        },
        {
          id: "3",
          isActive: false,
          name: "Akira Yamaoka"
        },
        {
          id: "4",
          isActive: false,
          name: "Moon Butterly"
        }
      ],
      formEdit: {
        members: [],
        nameTeamValue: '',
      }
    };
  }

  handlePeople = (id) => {
    const newMembers = [...this.state.formEdit.members];
    if (newMembers.includes(id)) {
      const index = newMembers.indexOf(id);
      newMembers.splice(index, 1);
    }
    else {
      newMembers.push(id);
    }
    const newFormEdit = this.state.formEdit;
    newFormEdit.members = newMembers;
    this.setState({
      formEdit: newFormEdit
    });
  }

  onClickButtonUpdateTeam = (event) => {
    if (this.state.formEdit.nameTeamValue && this.state.formEdit.members.length > 0) {
      console.log(this.state.formEdit);
    }
    else {
      console.log('please complete the input of name team');
    }
  }

  getNameTeam = (value) => {
    const newFormEdit = this.state.formEdit;
    newFormEdit.nameTeamValue = value;
    this.setState({
      formEdit: newFormEdit
    });
  }

  async componentDidMount() {
    const request = await GetTeam('1');
    this.setState({
      formEdit: request
    });
  }

  render() {
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
        onClick: () => {
          console.log('cancel is press')
        },
        type: 'secondary',
        isLoading: false,
        icon: 'cancel'
      }
    ];
    return (
      <div className="EditTeam">
        <Navbar></Navbar>
        <ActionForm title={'Edit Team'} actions={actions} >
          <TeamForm people={this.state.people} activeMembers={this.state.formEdit.members} onPeopleChange={this.handlePeople} onChangeNameTeam={this.getNameTeam} value={this.state.formEdit.nameTeamValue}>
          </TeamForm>
        </ActionForm>
      </div>
    );
  }
}

export default EditTeam;
