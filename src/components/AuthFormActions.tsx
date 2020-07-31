import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Grid,
  Link,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: theme.spacing(1.5)
  },
  button: {
    width: 150
  }
}));

interface AuthFormActionsProps {
  form: 'sign-in-form' | 'sign-up-form';
}

export const AuthFormActions: React.FunctionComponent<AuthFormActionsProps> = props => {
  const classes = useStyles();

  return (
    <Grid className={classes.grid} container justify='space-between'>
      <Grid item>
        <Link
          color='secondary'
          component={RouterLink}
          to={props.form === 'sign-in-form' ? '/sign-up' : '/sign-in'}
        >
          {`Sign ${props.form === 'sign-in-form' ? 'up' : 'in'} instead`}
        </Link>
      </Grid>
      <Grid item>
        <Button
          className={classes.button}
          color='secondary'
          disabled={false}
          form={props.form}
          type='submit'
          variant='contained'
        >
          {props.form === 'sign-in-form' ? 'Sign in' : 'Sign up'}
        </Button>
      </Grid>
    </Grid>
  );
};
