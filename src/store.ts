import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { gnomesSlice } from './features/gnomes/gnomesSlice';
import { signInSlice } from './features/sign-in/signInSlice';
import { signUpSlice } from './features/sign-up/signUpSlice';
import { systemSlice } from './features/system/systemSlice';

export const store = configureStore({
  reducer: {
    gnomes: gnomesSlice.reducer,
    signIn: signInSlice.reducer,
    signUp: signUpSlice.reducer,
    system: systemSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .prepend() // ...
      .concat(thunk)
});

export type RootState = ReturnType<typeof store.getState>;
