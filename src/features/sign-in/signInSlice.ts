import { createSlice } from '@reduxjs/toolkit';

type SignInState = {
};

const initialState: SignInState = {
};

export const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
  }
});

export const {
} = signInSlice.actions;
