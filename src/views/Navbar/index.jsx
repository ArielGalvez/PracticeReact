import React, { Component } from 'react';
// import '. Navbar.css';
import Toolbar from '../../components/Toolbar';
import {withRouter} from 'react-router';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Services',
      actions: [
        {
          onClick : () => {
            this.redirectTo('/teams/create');
          },
          position: 'left',
          icon: 'group_add'
        },
        {
          onClick : ()=> {
            this.redirectTo('/teams/edit');
          },
          position: 'left',
          icon: 'edit'
        },
        {
          onClick : ()=> {
            this.redirectTo('/teams/edit');
          },
          position: 'right',
          icon: 'local_cafe'
        }
      ],
    };
  }

  redirectTo = (path) => {
    this.props.history.push(path);
  }

  render() {
    return (
      <div className= "Navbar">
        <Toolbar title={this.state.title} actions={this.state.actions}/>
      </div>
    );
  }
}
//instalar slide

// export default Navbar;
export default withRouter(Navbar);
