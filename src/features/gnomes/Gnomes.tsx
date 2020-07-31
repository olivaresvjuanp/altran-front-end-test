import React from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import {
  Grid,
  Box,
  TablePagination
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Gnome } from './Gnome';
import {
  paginateGnomes,
  setRowsPerPage,
  setPage
} from './gnomesSlice';
import { RootState } from '../../store';
import { thunkFetchGnomes } from '../../thunks';

const useStyles = makeStyles(theme => ({
}));

export const Gnomes: React.FunctionComponent = () => {
  const gnomesState = useSelector((state: RootState) => state.gnomes);
  const dispatch = useDispatch();
  const classes = useStyles();

  React.useEffect(() => {
    dispatch(thunkFetchGnomes());
  }, [dispatch]);

  return (
    <React.Fragment>
      <TablePagination
        component='div'
        count={Math.ceil(gnomesState.gnomes.length / gnomesState.rowsPerPage)}
        labelRowsPerPage='Gnomes per page'
        onChangePage={(event, page) => {
          dispatch(setPage(page + 1));
          dispatch(paginateGnomes());
        }}
        onChangeRowsPerPage={event => {
          dispatch(setRowsPerPage(parseInt(event.target.value)));
          dispatch(paginateGnomes());
        }}
        page={gnomesState.page - 1}
        rowsPerPage={gnomesState.rowsPerPage}
        rowsPerPageOptions={[4, 8, 12, 16, 20]}
      />
      <Box mt={2} />
      <Grid
        container
        justify='center'
        spacing={2}
      >
        {
          gnomesState.paginatedGnomes.map((gnome, index) => {
            return <Gnome key={gnome.id} {...gnome} />;
          })
        }
      </Grid>
    </React.Fragment>
  );
};
