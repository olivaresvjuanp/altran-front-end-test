import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { } from './features/sign-in/signInSlice';
import { } from './features/sign-in/signInSlice';
import { RootState } from './store';

export const thunkSignIn = (): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async dispatch => {
  };
};

export const thunkSignUp = (): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async dispatch => {
  };
};
