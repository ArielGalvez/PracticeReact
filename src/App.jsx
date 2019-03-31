import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import Form from './components/Form';
import InputField from './components/InputField';
import Button from './components/Button';

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
      iconsMaterial: [
        'person_add',
        'person',
        'people'
      ],
      person: {
        name: '',
        lastName: '',
        messageErrorName: '',
        messageErrorLastName: ''
      }
    };
    this.getName = (value) =>{
      // console.log(value);
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
    this.getLastName = (value) =>{
      // console.log(value);
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
    this.onClickButton = (event) =>{
      if(this.state.person.name && this.state.person.lastName)
        console.log(`person ${this.state.person.name} ${this.state.person.lastName} has registered..`);
      else{
        const newPerson = this.state.person;
        newPerson.messageErrorName = newPerson.name? '': 'Name is missing!';
        newPerson.messageErrorLastName = newPerson.lastName? '': 'Last name is missing!';
        this.setState({
          ...this.state,
          person: newPerson
        });
        console.log(`please complete the inputs`);
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Toolbar title={this.state.title} actions={this.state.actions}/>
        <Form  />
        <InputField key='1' onChange={this.getName} autoFocus={true} errorMessage={this.state.person.messageErrorName} label={'name'} placeHolder={''}/>
        <InputField key='2' onChange={this.getLastName } autoFocus={false} errorMessage={this.state.person.messageErrorLastName} label={'last name'} placeHolder={'Enter Last Name'}/>
        
        <Button onClick={this.onClickButton} text={'Register'} icon={this.state.iconsMaterial[0]} type={'primary'} disabled={false} ></Button>
        <Button text={'Secondary'} icon={this.state.iconsMaterial[2]} type={'secondary'} disabled={true}></Button>
        <Button text={'Default'} icon={this.state.iconsMaterial[1]} type={'default'} isLoading={true}></Button>
      </div>
    );
  }
}

export default App;
