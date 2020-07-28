import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { signInSlice } from './features/sign-in/signInSlice';
import { signUpSlice } from './features/sign-up/signUpSlice';

export const store = configureStore({
  reducer: {
    signIn: signInSlice.reducer,
    signUp: signUpSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .prepend() // ...
      .concat(thunk)
});

export type RootState = ReturnType<typeof store.getState>;
