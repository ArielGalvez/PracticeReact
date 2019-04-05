import React, { Component } from 'react';
import './CreateTeam.css';
import Form from '../../components/Form';
import ActionForm from '../../components/ActionForm';

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
          text: 'Register',
          onClick: this.onClickButton,
          type: 'primary',
          isLoading: false,
          icon: 'person_add'
        },
        {
          text: 'Reset',
          onClick: this.onClickButton,
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
      }
    };
  }

  onClickButton = (event) =>{
    /* if(this.state.person.name && this.state.person.lastName)
      console.log(`person ${this.state.person.name} ${this.state.person.lastName} has registered..`);
    else{
      const newPerson = this.state.person;
      newPerson.messageErrorName = newPerson.name? '': 'Name is missing!';
      newPerson.messageErrorLastName = newPerson.lastName? '': 'Last name is missing!';
      this.setState({
        ...this.state,
        person: newPerson
      }); */
      console.log(`please complete the inputs`);
    // }
  }

  render() {
    return (
      <div className="CreateTeam">
        <ActionForm title={this.state.title} actions={this.state.actions}>
          <Form /* onChange ={this.handleChange} */>
          </Form>
        </ActionForm>
      </div>
    );
  }
}

export default CreateTeam;
