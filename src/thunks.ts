import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios, { AxiosError } from 'axios';

import { Gnome, setGnomes, paginateGnomes } from './features/gnomes/gnomesSlice';
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
        const gnomes: Gnome[] = response.data.Brastlewark.map((gnome: Gnome) => {
          gnome.thumbnail = `https://altran.s3.eu-west-3.amazonaws.com/${Math.floor(Math.random() * 8) + 1}.jpg`;
          return gnome;
        });

        dispatch(setGnomes(gnomes));
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
