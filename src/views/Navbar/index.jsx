import React, { Component } from 'react';
// import '. Navbar.css';
import Toolbar from '../../components/Toolbar';
import { withRouter } from 'react-router';

class Navbar extends Component {

  render() {
    const actions = [
      {
        onClick: () => {
          this.redirectTo('/teams/create');
        },
        position: 'left',
        icon: 'group_add',
        text: 'create team'
      },
      {
        onClick: () => {
          this.redirectTo('/teams/edit');
        },
        position: 'left',
        icon: 'edit',
        text: 'edit team'
      },
      {
        onClick: () => {
          this.redirectTo('/');
        },
        position: 'right',
        icon: 'home',
        text: 'home'
      }
    ];
    return (
      <div className="Navbar">
        <Toolbar title={'Teams'} actions={actions} onClick={this.handleTitle} />
      </div>
    );
  }

  redirectTo = (path) => {
    this.props.history.push(path);
  }

  handleTitle = () => {
    this.redirectTo('/');
  }

}

export default withRouter(Navbar);
