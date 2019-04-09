import React from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import CreateTeam from './views/Team/CreateTeam';
import Navbar from './views/Navbar';
function Routes() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/teams/create" component={CreateTeam} />
          <Route path="/" component={Navbar} >
            {/* <Navbar></Navbar> */}
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>

  );
}

export default Routes;