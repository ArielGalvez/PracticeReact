import React from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import CreateTeam from './views/Team/CreateTeam';
import EditTeam from './views/Team/EditTeam';
import Navbar from './views/Navbar';
function Routes() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/teams/create" component={CreateTeam} />
          <Route exact path="/teams/edit" component={EditTeam} />
          <Route path="/" component={Navbar} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>

  );
}

export default Routes;