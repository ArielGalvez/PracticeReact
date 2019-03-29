import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import Form from './components/Form';
import ImputField from './components/ImputField';

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
      // dataLabel={
      //   onChange:, autoFocus, errorMessage, label, placeHolder
      // }
    };
    this.getValue=(value)=>{
      console.log(value);
    }
  }

  render() {
    return (
      <div className="App">
        <Toolbar title={this.state.title} actions={this.state.actions}/>
        <Form  />
        <ImputField onChange={this.getValue} autoFocus={true} errorMessage={'ocurrio un error'} label={'nombre:'} placeHolder={'input con error'}/>
        <ImputField onChange={this.getValue} autoFocus={true} label={'apellido:'} placeHolder={'input sin error'}/>
      </div>
    );
  }
}

export default App;
