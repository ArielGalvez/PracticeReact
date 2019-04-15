import { combineReducers } from 'redux';

import createTeam from '../views/Team/CreateTeam/reducer';
import editTeam from '../views/Team/EditTeam/reducer';
//import example from '../views/example/reducer'

const rootReducer = combineReducers({
	createTeam,
	// editTeam
});

export default rootReducer;