import { combineReducers } from 'redux';

import createTeam from '../views/Team/CreateTeam/reducer';
//import example from '../views/example/reducer'

const rootReducer = combineReducers({
	createTeam,
	//example,
});

export default rootReducer;