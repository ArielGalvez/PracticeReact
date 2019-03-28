import React, { Component } from 'react';
import './Form.css';
// import Avatar from './components/Avatar';
import PeoplePicker from '../PeoplePicker';

class Form extends Component {
  constructor(props){
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
                isActive: true,
                name: "Akira Yamaoka"
            }
        ],
        members: [],
        personPillConfig: {
            width: '400px',
            heigth: '80px'
        }
    };

    this.handlePeople = (id) => {
        // console.log('algo', id);
        const newMembers = [...this.state.members];
        newMembers.push(id);
        this.setState({
            ...this.state,
            members: newMembers
        });
        console.log(this.state.members)
    }
  }

  render() {
    return (
      <div className="Form-component">
        <h1>{'Form component'}</h1>
        {/* <PersonPill name={this.state.people[1].name} src={this.state.people[1].avatar}></PersonPill> */}
        <PeoplePicker people={this.state.people} activeMembers={this.state.members} width={this.state.personPillConfig.width} heigth={this.state.personPillConfig.heigth} onChange={this.handlePeople} />
      </div>
    );
  }
}

export default Form;
