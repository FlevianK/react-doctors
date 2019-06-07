import { FETCH_DOCTORS } from '../actions/doctorAction';

const initialState = {};

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_DOCTORS:
    return action.payload;
  default:
    return state;
  }
};

export default doctorReducer;
