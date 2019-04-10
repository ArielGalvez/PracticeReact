import React, { Component } from 'react';
// import '. Navbar.css';
import Toolbar from '../../components/Toolbar';
import {withRouter} from 'react-router';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Teams',
      actions: [
        {
          onClick : () => {
            this.redirectTo('/teams/create');
          },
          position: 'left',
          icon: 'group_add',
          text: 'create team'
        },
        {
          onClick : ()=> {
            this.redirectTo('/teams/edit');
          },
          position: 'left',
          icon: 'edit',
          text: 'edit team'
        },
        {
          onClick : ()=> {
            this.redirectTo('/');
          },
          position: 'right',
          icon: 'home',
          text: 'home'
        }
      ],
    };
  }

  redirectTo = (path) => {
    this.props.history.push(path);
  }

  handleTitle = () => {
    this.redirectTo('/');
  }

  render() {
    return (
      <div className= "Navbar">
        <Toolbar title={this.state.title} actions={this.state.actions} onClick={this.handleTitle}/>
      </div>
    );
  }
}

export default withRouter(Navbar);
