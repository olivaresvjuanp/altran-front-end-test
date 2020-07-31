import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios, { AxiosError } from 'axios';

import { setGnomes, paginateGnomes } from './features/gnomes/gnomesSlice';
import { } from './features/sign-in/signInSlice';
import { } from './features/sign-in/signInSlice';
import {
  startLoading,
  stopLoading
} from './features/system/systemSlice';
import { RootState } from './store';

export const thunkSignIn = (): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async () => {
  };
};

export const thunkSignUp = (): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async () => {
  };
};

export const thunkFetchGnomes = (): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async dispatch => {
    dispatch(startLoading('thunk-fetch-gnomes'));

    await axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
      .then(response => {
        dispatch(setGnomes(response.data.Brastlewark));
        dispatch(paginateGnomes());
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
