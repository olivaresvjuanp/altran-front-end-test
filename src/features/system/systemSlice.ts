import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

type SystemState = {
  loader: {
    isLoading: boolean;
    type: string;
  };
};

const initialState: SystemState = {
  loader: {
    isLoading: false,
    type: ''
  }
};

export const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    startLoading: (state, action: PayloadAction<string>) => {
      state.loader = {
        isLoading: true,
        type: action.payload
      };
    },
    stopLoading: state => {
      state.loader = initialState.loader;
    }
  }
});

export const {
  startLoading,
  stopLoading
} = systemSlice.actions;
