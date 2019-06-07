import { combineReducers } from 'redux';

import doctorReducer from './doctorReducer';

export default combineReducers({
  doctorsDetails: doctorReducer
});
