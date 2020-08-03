import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {
  CssBaseline,
  Container
} from '@material-ui/core';
import {
  red,
  cyan
} from '@material-ui/core/colors';
import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';

import 'fontsource-roboto';

import { GnomeList } from './features/gnomeList/GnomeList';
import { Header } from './features/header/Header';
import { SignIn } from './features/sign-in/SignIn';
import { SignUp } from './features/sign-up/SignUp';

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        marginTop: defaultTheme.spacing(8) + 4,
        paddingBottom: defaultTheme.spacing(4)
      }
    },
    MuiTablePagination: {
      toolbar: {
        paddingLeft: 0,
        paddingRight: 0
      }
    }
  },
  palette: {
    primary: {
      main: red[500]
    },
    secondary: {
      main: cyan[500]
    }
  }
});

export const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container>
        <Router>
          <Switch>
            <Route exact path='/'>
              <GnomeList />
            </Route>
            <Route path='/sign-in'>
              <SignIn />
            </Route>
            <Route path='/sign-up'>
              <SignUp />
            </Route>
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
};
