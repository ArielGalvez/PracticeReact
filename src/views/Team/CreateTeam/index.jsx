import React, { Component } from 'react';
import './CreateTeam.css';
import TeamForm from '../components/TeamForm';
import ActionForm from '../../../components/ActionForm';
import Navbar from '../../Navbar'; 

class CreateTeam extends Component {
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
      title: 'Create Team',
      iconsMaterial: [
        'person_add',
        'person',
        'people'
      ],
      actions: [
        {
          text: 'Register Member',
          onClick: this.onClickButton,
          type: 'primary',
          isLoading: false,
          icon: 'person_add'
        },
        {
          text: 'Create Team',
          onClick: this.onClickButtonCreateTeam,
          type: 'secondary',
          isLoading: false,
          icon: 'people'
        }
      ],
      person: {
        name: '',
        lastName: '',
        messageErrorName: '',
        messageErrorLastName: ''
      },
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
    // console.log(newMembers);
  }

  onClickButton = (event) =>{
    if(this.state.person.name && this.state.person.lastName){
      const newPeople = this.state.people;
      newPeople.push({
        id: `id${this.state.person.name[0]}per${this.state.person.lastName[0]}`,
        isActive: false,
        name: `${this.state.person.name} ${this.state.person.lastName}`
      })
      this.setState({
        people: newPeople
      });
      console.log(`person ${this.state.person.name} ${this.state.person.lastName} has registered..`);
    }
    else{
      const newPerson = this.state.person;
      newPerson.messageErrorName = newPerson.name? '': 'Name is missing!';
      newPerson.messageErrorLastName = newPerson.lastName? '': 'Last name is missing!';
      
      this.setState({
        ...this.state,
        person: newPerson,
      });
      console.log(`please complete the inputs`);
    }
  }

  onClickButtonCreateTeam = (event) =>{
    if(this.state.nameTeamValue){
      console.log(this.state.nameTeamValue);
      console.log(this.state.members);
    }
    else{
      console.log(`please complete the input of name team`);
    }
  }

  getName = (value) =>{
    const newPerson = this.state.person;
    let newMessageError= '';
    if(value)
      newMessageError = (value[0] !== value[0].toUpperCase())? `Name must start with mayus!`: '';
    newPerson.name = value;
    newPerson.messageErrorName = newMessageError;
    this.setState({
      ...this.state,
      person: newPerson
    });
  }

  getLastName = (value) =>{
    const newPerson = this.state.person;
    let newMessageError= '';
    if(value)
      newMessageError = (value[0] !== value[0].toUpperCase())? `L N must start with mayus!`: '';
    newPerson.lastName = value;
    newPerson.messageErrorLastName = newMessageError;
    this.setState({
      ...this.state,
      person: newPerson
    });
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
          <TeamForm people={this.state.people} activeMembers={this.state.members} onPeopleChange={this.handlePeople} onChangeName={this.getName} onChangeLastName={this.getLastName} onChangeNameTeam={this.getNameTeam}>
          </TeamForm>
        </ActionForm>
      </div>
    );
  }
}

export default CreateTeam;
