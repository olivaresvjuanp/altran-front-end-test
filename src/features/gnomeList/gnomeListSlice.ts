import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import _ from 'lodash';

export type Gnome = {
  age: number;
  friends: string[];
  hair_color: string;
  height: number;
  id: number;
  name: string;
  professions: string[];
  thumbnail: string;
  weight: number;
};

type GnomesState = {
  count: number;
  gnomes: Gnome[];
  rowsPerPage: number;
};

const initialState: GnomesState = {
  count: 0,
  gnomes: [],
  rowsPerPage: 8
};

export const gnomeListSlice = createSlice({
  name: 'gnomeList',
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    setGnomes: (state, action: PayloadAction<Gnome[]>) => {
      state.gnomes = action.payload;
    },
    setRowsPerPage: (state, action: PayloadAction<number>) => {
      state.rowsPerPage = action.payload;
    }
  }
});

export const {
  setCount,
  setGnomes
} = gnomeListSlice.actions;
