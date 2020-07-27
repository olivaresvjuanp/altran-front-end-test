import React from 'react';
import {
  AppBar,
  Toolbar
} from '@material-ui/core';

export const Header: React.FunctionComponent = () => {
  return (
    <AppBar position='fixed'>
      <Toolbar variant='dense'>
      </Toolbar>
    </AppBar>
  );
};
