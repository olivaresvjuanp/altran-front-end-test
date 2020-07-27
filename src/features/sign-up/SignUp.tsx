import React from 'react';
import {
  Paper,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { SignUpForm } from './SignUpForm';

const useStyles = makeStyles(theme => ({
  paper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 480,
    padding: theme.spacing(2)
  }
}));

export const SignUp: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} square>
      <Typography align='center' variant='h6'>Sign up</Typography>
      <SignUpForm />
    </Paper>
  );
};
