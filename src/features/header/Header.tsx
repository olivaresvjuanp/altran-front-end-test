import React from 'react';
import { useSelector } from 'react-redux';
import {
  AppBar,
  Box,
  LinearProgress,
  Toolbar
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import { RootState } from '../../store';

export const Header: React.FunctionComponent = () => {
  const theme = useTheme();

  return (
    <AppBar position='fixed'>
      <Box bgcolor={theme.palette.primary.dark} height={4}>
        {useSelector((state: RootState) => state.system.loader.isLoading) && <LinearProgress color='secondary' />}
      </Box>
      <Toolbar variant='dense'>
      </Toolbar>
    </AppBar>
  );
};
