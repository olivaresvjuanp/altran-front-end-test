import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { AuthFormActions } from '../../components/AuthFormActions';

const useStyles = makeStyles(theme => ({
}));

export const SignInForm: React.FunctionComponent = () => {
  const classes = useStyles();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <React.Fragment>
      <form
        id='sign-in-form'
        onSubmit={(event: React.FormEvent<HTMLFormElement>): void => {
          event.preventDefault();

          console.log('sign-in-form submit', email, password);
        }}
      >
        <TextField
          autoFocus
          disabled={false}
          error={false}
          fullWidth
          helperText=''
          label='Email'
          margin='dense'
          name='email'
          onChange={event => {
            setEmail(event.target.value);
          }}
          required
          size='small'
          type='email'
          value={email}
          variant='filled'
        />
        <TextField
          disabled={false}
          error={false}
          fullWidth
          helperText='Between 6 and 12 characters.'
          label='Password'
          margin='dense'
          name='password'
          onChange={event => {
            setPassword(event.target.value);
          }}
          required
          size='small'
          type='password'
          value={password}
          variant='filled'
        />
      </form>
      <AuthFormActions form='sign-in-form' />
    </React.Fragment>
  );
};
