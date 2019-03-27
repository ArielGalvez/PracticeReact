import React, { Component } from 'react';
import './App.css';
import ToolBar from './components/toolbar';
// import Avatar from './components/Avatar';
// import PersonPill from './components/PersonPill';
import PeoplePicker from './components/PeoplePicker';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Services',
      actions: [
        {
          onClick : ()=> {
            console.log('work action');
          },
          position: 'right',
          icon: 'work'
        },
        {
          onClick : ()=> {
            console.log('pets action');
          },
          position: 'left',
          icon: 'pets'
        },
        {
          onClick : ()=> {
            console.log('local cafe action');
          },
          position: 'right',
          icon: 'local_cafe'
        }
      ],
      people: [
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
          name: "Anthony Johnson"
        },
        {
          id: "7c965aad-9986-4eb5-b80b-12f1d5ae2123",
          name: "Akira Yamaoka"
        }
      ],
      personPillConfig: {
        width: '500px',
        heigth: '100px'
      }
    };
  }

  render() {
    return (
      <div className="App">
        <ToolBar title={this.state.title} actions={this.state.actions}/>
        {/* <PersonPill name={this.state.people[1].name} src={this.state.people[1].avatar}></PersonPill> */}
        <PeoplePicker people={this.state.people} width={this.state.personPillConfig.width} heigth={this.state.personPillConfig.heigth}></PeoplePicker>
      </div>
    );
  }
}

export default App;
