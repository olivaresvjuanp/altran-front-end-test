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
  page: number;
  paginatedGnomes: Gnome[];
  rowsPerPage: number;
};

const initialState: GnomesState = {
  gnomes: [],
  page: 1,
  paginatedGnomes: [],
  rowsPerPage: 8
};

export const gnomesSlice = createSlice({
  name: 'gnomes',
  initialState,
  reducers: {
    setGnomes: (state, action: PayloadAction<Gnome[]>) => {
      state.gnomes = action.payload;
    },
    paginateGnomes: state => {
      const { gnomes, page, rowsPerPage } = state;

      state.paginatedGnomes = _.slice(gnomes, (page * rowsPerPage) - rowsPerPage, page * rowsPerPage);
    },
    setRowsPerPage: (state, action: PayloadAction<number>) => {
      state.rowsPerPage = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  }
});

export const {
  setGnomes,
  paginateGnomes,
  setRowsPerPage,
  setPage
} = gnomesSlice.actions;
