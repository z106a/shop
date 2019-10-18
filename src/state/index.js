import { useReducer } from 'react';
import initialState from './init';

const reducer = (state, { type, ...rest }) => {
  // eslint-disable-next-line no-console
  console.group(type);
  // eslint-disable-next-line no-console
  console.log(rest);
  // eslint-disable-next-line no-console
  console.groupEnd();

  switch (type) {
  case 'set_overview_data':
    return { ...state, ...rest };
  case 'set_month_data':
    return { ...state, ...rest };
  default: throw new Error(`unknown action type: ${type}`);
  }
};

export const useValue = () => useReducer(reducer, initialState);
