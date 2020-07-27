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
  green
} from '@material-ui/core/colors';
import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';

import 'fontsource-roboto';

import { Header } from './Header';
import { SignInPage } from '../features/sign-in/SignInPage';

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        marginTop: defaultTheme.spacing(8),
        paddingBottom: defaultTheme.spacing(4)
      }
    }
  },
  palette: {
    primary: {
      main: red[500]
    },
    secondary: {
      main: green[500]
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
              <SignInPage />
            </Route>
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
};
