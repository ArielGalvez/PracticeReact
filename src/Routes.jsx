import React from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import CreateTeam from './views/Team/CreateTeam';

function Routes() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/teams/create" component={CreateTeam} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>

  );
}

export default Routes;