import React from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import {
  Box,
  IconButton,
  Grid,
  TablePagination
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  FirstPage as FirstPageIcon,
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
  LastPage as LastPageIcon
} from '@material-ui/icons';

import { Gnome } from './Gnome';
import {
  paginateGnomes,
  setRowsPerPage,
  setPage
} from './gnomesSlice';
import { RootState } from '../../store';
import { thunkFetchGnomes } from '../../thunks';

const useTablePaginationActionsStyles = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  }
}));

interface TablePaginationActionsProps {
  count: number;
  onChangePage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, page: number) => void;
  page: number;
  rowsPerPage: number;
}

const TablePaginationActions: React.FunctionComponent<TablePaginationActionsProps> = props => {
  const classes = useTablePaginationActionsStyles();

  const { count, onChangePage, page, rowsPerPage } = props;

  const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        aria-label='first page'
        disabled={page === 0}
        onClick={handleFirstPageButtonClick}
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        aria-label='previous page'
        disabled={page === 0}
        onClick={handleBackButtonClick}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>
      <IconButton
        aria-label='next page'
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        onClick={handleNextButtonClick}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
      <IconButton
        aria-label='last page'
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        onClick={handleLastPageButtonClick}
      >
        <LastPageIcon />
      </IconButton>
    </div>
  );
};

export const Gnomes: React.FunctionComponent = () => {
  const gnomesState = useSelector((state: RootState) => state.gnomes);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(thunkFetchGnomes());
  }, [dispatch]);

  return (
    <React.Fragment>
      <TablePagination
        ActionsComponent={TablePaginationActions}
        component='div'
        count={gnomesState.gnomes.length}
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
