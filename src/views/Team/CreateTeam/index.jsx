import React, { Component } from 'react';
import './CreateTeam.css';
import TeamForm from '../components/TeamForm';
import ActionForm from '../../../components/ActionForm';
import Navbar from '../../Navbar';

class CreateTeam extends Component {
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
      members: [],
      nameTeamValue: '',
      title: 'Create Team',
      actions: [
        {
          text: 'Register',
          onClick: this.onClickButtonCreateTeam,
          type: 'primary',
          isLoading: false,
          icon: 'add_circle'
        },
        {
          text: 'Cancel',
          onClick: () => {
            console.log('cancel is press');
          },
          type: 'secondary',
          isLoading: false,
          icon: 'cancel'
        }
      ],
    };
  }

  handlePeople = (id) => {
    const newMembers = [...this.state.members];
    if (newMembers.includes(id)) {
      const index = newMembers.indexOf(id);
      newMembers.splice(index, 1);
    }
    else {
      newMembers.push(id);
    }
    this.setState({
      ...this.state,
      members: newMembers,
    });
  }

  onClickButtonCreateTeam = (event) => {
    if (this.state.nameTeamValue && this.state.members.length > 0) {
      console.log(this.state.nameTeamValue);
      console.log(this.state.members);
    }
    else {
      console.log('please select members and insert name team');
    }
  }

  getNameTeam = (value) => {
    this.setState({
      nameTeamValue: value
    });
  }

  render() {
    return (
      <div className="CreateTeam">
        <Navbar></Navbar>
        <ActionForm title={this.state.title} actions={this.state.actions} >
          <TeamForm people={this.state.people} activeMembers={this.state.members} onPeopleChange={this.handlePeople} onChangeNameTeam={this.getNameTeam}>
          </TeamForm>
        </ActionForm>
      </div>
    );
  }
}

export default CreateTeam;
