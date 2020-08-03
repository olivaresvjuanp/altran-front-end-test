import React from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  useRouteMatch,
  Route
} from 'react-router-dom';
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

import { GnomeListItem } from './GnomeListItem';
import { } from './gnomeListSlice';
import { GnomeDetails } from '../gnomeDetails/GnomeDetails';
import { RootState } from '../../store';
import {
  thunkGetCount,
  thunkGetGnomes
} from '../../thunks';

const useTablePaginationActionsStyles = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(4)
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

export const GnomeList: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const gnomeListState = useSelector((state: RootState) => state.gnomes);
  const { path } = useRouteMatch();

  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    dispatch(thunkGetCount());
    dispatch(thunkGetGnomes(page));
  }, [dispatch]);

  return (
    <React.Fragment>
      <TablePagination
        ActionsComponent={TablePaginationActions}
        component='div'
        count={gnomeListState.count}
        labelRowsPerPage='Per page'
        onChangePage={(event, page) => {
          page++;
          setPage(page);
          dispatch(thunkGetGnomes(page));
        }}
        onChangeRowsPerPage={event => {
          //dispatch(setRowsPerPage(parseInt(event.target.value)));
          //dispatch(setPage(1));
        }}
        page={page - 1}
        rowsPerPage={gnomeListState.rowsPerPage}
        rowsPerPageOptions={[4, 8, 12, 16, 20]}
      />
      <Box mt={2} />
      <Grid
        container
        justify='center'
        spacing={2}
      >
        {
          gnomeListState.gnomes.map(gnome => {
            return <GnomeListItem key={gnome.id} {...gnome} />;
          })
        }
      </Grid>
      <Route path={`${path}/:id`}>
        <GnomeDetails />
      </Route>
    </React.Fragment>
  );
};
