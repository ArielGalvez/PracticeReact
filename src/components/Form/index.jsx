import React, { Component } from 'react';
import './Form.css';
import InputField from '../InputField';
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
                isActive: false,
                name: "Akira Yamaoka"
            }
        ],
        members: [],
        personPillConfig: {
            width: '400px',
            heigth: '80px'
        },
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
    console.log(newMembers);
  }

  render() {
    // const {...} = this.props;
    return (
      <div className="Form">
        <InputField key='77' /* onChange={this.getName} */ autoFocus={true} errorMessage={""} label={'name'}/>
        {/* <InputField key='99' onChange={this.getLastName } autoFocus={false} errorMessage={this.state.person.messageErrorLastName} label={'last name'}/> */}
        <PeoplePicker people={this.state.people} activeMembers={this.state.members} width={this.state.personPillConfig.width} heigth={this.state.personPillConfig.heigth} onChange={this.handlePeople} />
      </div>
    );
  }
}

export default Form;
