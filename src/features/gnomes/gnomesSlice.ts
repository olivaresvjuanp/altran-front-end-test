import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import _ from 'lodash';

export type Gnome = {
  id: number;
  name: string;
  thumbnail: string;
  age: number;
  weight: number;
  height: number;
  hair_color: string;
  professions: string[];
  friends: string[];
};

type GnomesState = {
  gnomes: Gnome[];
  paginatedGnomes: Gnome[];
};

const initialState: GnomesState = {
  gnomes: [],
  paginatedGnomes: []
};

export const gnomesSlice = createSlice({
  name: 'gnomes',
  initialState,
  reducers: {
    setGnomes: (state, action: PayloadAction<Gnome[]>) => {
      state.gnomes = action.payload;
    },
    paginateGnomes: (state, action: PayloadAction<number>) => {
      state.paginatedGnomes = _.slice(state.gnomes, (action.payload * 8) - 8, action.payload * 8);
    }
  }
});

export const {
  setGnomes,
  paginateGnomes
} = gnomesSlice.actions;
