import { configureStore } from '@reduxjs/toolkit';

import { signInSlice } from './features/sign-in/signInSlice';

export const store = configureStore({
  reducer: {
    signIn: signInSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
