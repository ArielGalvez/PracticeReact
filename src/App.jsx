import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import Routes from './Routes';

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
    };
  }

  render() {
    return (
      <div className="App">
        <Toolbar title={this.state.title} actions={this.state.actions}/>
        <Routes></Routes>
      </div>
    );
  }
}

export default App;
