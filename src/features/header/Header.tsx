import React from 'react';
import { useSelector } from 'react-redux';
import {
  AppBar,
  Box,
  LinearProgress,
  Toolbar,
  IconButton,
  Menu,
  MenuItem
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { GitHub as GitHubIcon } from '@material-ui/icons';

import { RootState } from '../../store';

export const Header: React.FunctionComponent = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  return (
    <AppBar position='fixed'>
      <Box bgcolor={theme.palette.primary.dark} height={4}>
        {useSelector((state: RootState) => state.system.loader.isLoading) && <LinearProgress color='secondary' />}
      </Box>
      <Toolbar variant='dense'>
        <IconButton
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            setAnchorEl(event.currentTarget);
          }}
        >
          <GitHubIcon />
        </IconButton>
        <Menu
          id='github-button-menu'
          anchorEl={anchorEl}
          anchorOrigin={{
            horizontal: 'center',
            vertical: 'center'
          }}
          getContentAnchorEl={null}
          keepMounted
          onClose={() => {
            setAnchorEl(null);
          }}
          open={Boolean(anchorEl)}
          transformOrigin={{
            horizontal: 'center',
            vertical: 'top'
          }}
        >
          <MenuItem
            onClick={() => {
              window.open('https://github.com/olivaresvjuanp/altran-back-end-test', '_blank');
            }}
          >
            View back-end repository
          </MenuItem>
          <MenuItem
            onClick={() => {
              window.open('https://github.com/olivaresvjuanp/altran-front-end-test', '_blank');
            }}
          >
            View front-end repository
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
