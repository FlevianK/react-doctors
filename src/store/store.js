import React from 'react';
import PropTypes from 'prop-types';

import { FETCHING_DOCTORS, FETCHED_DOCTORS } from '../constants/action.types';

export const Store = React.createContext();

const initialState = {
  doctorsDetails: {},
  loading: true
};

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCHING_DOCTORS:
    return { ...state, loading: true };
  case FETCHED_DOCTORS:
    return { ...state, doctorsDetails: action.payload, loading: false };
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
