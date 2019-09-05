import React from 'react';
import PropTypes from 'prop-types';

import { FETCH_DOCTORS } from '../actions/doctorAction';

export const Store = React.createContext();

const initialState = {
  doctorsDetails: {}
};

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_DOCTORS:
    return { ...state, doctorsDetails: action.payload };
  default:
    return state;
  }
};

export default doctorReducer;

export const StoreProvider = (props) => {
  const [state, dispatch] = React.useReducer(doctorReducer, initialState);
  const value = { state, dispatch };
  return (<Store.Provider value={value}>{props.children}
  </Store.Provider>);
};

StoreProvider.propTypes = {
  children: PropTypes.object
};
