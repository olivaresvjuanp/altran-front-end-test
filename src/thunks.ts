import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios, { AxiosError } from 'axios';

import config from './config.json';
import {
  setCount,
  setGnomes
} from './features/gnomeList/gnomeListSlice';
import { } from './features/sign-in/signInSlice';
import { } from './features/sign-in/signInSlice';
import {
  startLoading,
  stopLoading
} from './features/system/systemSlice';
import { RootState } from './store';

/**
 * // TODO
 */
export const thunkSignIn = (): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async () => {
  };
};

/**
 * // TODO
 */
export const thunkSignUp = (): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async () => {
  };
};

/**
 * Thunk action to get the total gnome count in the DB.
 */
export const thunkGetCount = (): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async dispatch => {
    dispatch(startLoading('thunk-get-count'));

    await axios.get(`${config.apiUrl}/gnomes/get-count`)
      .then(response => {
        dispatch(setCount(response.data.payload.count));
      })
      .catch((error: AxiosError) => {
        const response = error.response;

        if (response) {
          switch (response.status) {
            default:
              console.error(response.status);
          }
        } else {
          console.error(0);
        }
      })
      .finally(() => {
        dispatch(stopLoading());
      });
  };
};

/**
 * Thunk action to get gnomes from the DB.
 * @param page
 */
export const thunkGetGnomes = (page: number): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async dispatch => {
    dispatch(startLoading('thunk-get-gnomes'));

    await axios.get(`${config.apiUrl}/gnomes/get-gnomes/${page}`)
      .then(response => {
        dispatch(setGnomes(response.data.payload.gnomes));
      })
      .catch((error: AxiosError) => {
        const response = error.response;

        if (response) {
          switch (response.status) {
            default:
              console.error(response.status);
          }
        } else {
          console.error(0);
        }
      })
      .finally(() => {
        dispatch(stopLoading());
      });
  };
};
