import React from 'react';
import {
  Paper,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { SignInForm } from './SignInForm';

const useStyles = makeStyles(theme => ({
  paper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 480,
    padding: theme.spacing(2)
  }
}));

export const SignIn: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={2}>
      <Typography align='center' variant='h6'>Sign in</Typography>
      <SignInForm />
    </Paper>
  );
};
