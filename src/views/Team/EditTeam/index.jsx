import React, { Component } from 'react';
// import './EditTeam.css';
import TeamForm from '../components/TeamForm';
import ActionForm from '../../../components/ActionForm';
import Navbar from '../../Navbar'; 

class EditTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people : [
        {
            id: "7c965aad-9986-4eb5-b80b-98f1d5ae2456",
            name: "Gregory Frederickson", 
            isActive: true,
            avatar: "https://lh3.googleusercontent.com/-8Y5l_IGCkc8/AAAAAAAAAAI/AAAAAAAAAAc/hP8pp2loX3I/s96-c/photo.jpg"
        },
        {
            id: "7c965aad-9986-4eb5-b80b-98f1d5ae2123",
            avatar: "https://lh4.googleusercontent.com/-Mq3J6qJaPdA/AAAAAAAAAAI/AAAAAAAAAAc/XRSfECwWYEA/s96-c/photo.jpg",
            email: "engageme.demo1@gmail.com",
            isActive: true,
            name: "Anthony Johnson"
        },
        {
            id: "7c965aad-9986-4eb5-b80b-12f1d5ae2123",
            isActive: false,
            name: "Akira Yamaoka"
        }
      ],
      members: [],
      title: 'Edit Team',
      actions: [
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
      ],
      nameTeamValue: ''
    };
  }

  handlePeople = (id) => {
    const newMembers = [...this.state.members];
    if(newMembers.includes(id)){
        const index = newMembers.indexOf(id);
        newMembers.splice(index, 1);
    }
    else{
        newMembers.push(id);
    }
    this.setState({
      ...this.state,
      members: newMembers,
    });
  }


  onClickButtonUpdateTeam = (event) =>{
    if(this.state.nameTeamValue){
      console.log(this.state.nameTeamValue);
      console.log(this.state.members);
    }
    else{
      console.log('please complete the input of name team');
    }
  }

  getNameTeam = (value) => {
    this.setState({
      nameTeamValue: value
    });
  }  

  render() {
    return (
      <div className="EditTeam">
        <Navbar></Navbar> 
        <ActionForm title={this.state.title} actions={this.state.actions} >
          <TeamForm people={this.state.people} activeMembers={this.state.members} onPeopleChange={this.handlePeople} onChangeName={this.getName} onChangeLastName={this.getLastName} onChangeNameTeam={this.getNameTeam}>
          </TeamForm>
        </ActionForm>
      </div>
    );
  }
}

export default EditTeam;
