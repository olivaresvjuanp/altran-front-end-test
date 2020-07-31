import React from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  Grid,
  Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';

import { Gnome } from './Gnome';
import { paginateGnomes } from './gnomesSlice';
import { RootState } from '../../store';
import { thunkFetchGnomes } from '../../thunks';

const useStyles = makeStyles(theme => ({
  pagination: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
}));

export const Gnomes: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    dispatch(thunkFetchGnomes());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Pagination
        className={classes.pagination}
        color='secondary'
        count={Math.ceil(useSelector((state: RootState) => state.gnomes.gnomes.length) / 8)}
        disabled={false}
        onChange={(event, page: number) => {
          setPage(page);
          dispatch(paginateGnomes(page));
        }}
        page={page}
        showFirstButton
        showLastButton
      />
      <Box mt={2} />
      <Grid
        container
        justify='center'
        spacing={2}
      >
        {
          useSelector((state: RootState) => state.gnomes.paginatedGnomes).map((gnome, index) => {
            return <Gnome key={gnome.id} {...gnome} />;
          })
        }
      </Grid>
    </React.Fragment>
  );
};
