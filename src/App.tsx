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
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';

import 'fontsource-roboto';

import { Header } from './features/header/Header';
import { Gnomes } from './features/gnomes/Gnomes';
import { SignIn } from './features/sign-in/SignIn';
import { SignUp } from './features/sign-up/SignUp';

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        marginTop: defaultTheme.spacing(8) + 4,
        padding: `0 0 ${defaultTheme.spacing(4)} 0`
      }
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
              <Gnomes />
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
