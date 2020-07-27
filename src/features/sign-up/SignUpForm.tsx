import React from 'react';
import {
  InputAdornment,
  IconButton
} from '@material-ui/core';
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon
} from '@material-ui/icons';

import { AuthFormActions } from '../../components/AuthFormActions';
import { AuthFormTextField } from '../../components/AuthFormTextField';

export const SignUpForm: React.FunctionComponent = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <React.Fragment>
      <form
        id='sign-up-form'
        onSubmit={event => {
          event.preventDefault();

          console.log('sign-up-form submit', email, password);
        }}
      >
        <AuthFormTextField
          autoFocus
          disabled={false}
          error={false}
          helperText='Between 1 and 16 characters.'
          label='First name'
          name='first-name'
          onChange={event => {
            setFirstName(event.target.value);
          }}
          value={firstName}
        />
        <AuthFormTextField
          disabled={false}
          error={false}
          helperText='Between 1 and 16 characters.'
          label='Last name'
          name='last-name'
          onChange={event => {
            setLastName(event.target.value);
          }}
          value={lastName}
        />
        <AuthFormTextField
          disabled={false}
          error={false}
          helperText=''
          label='Email'
          name='email'
          onChange={event => {
            setEmail(event.target.value);
          }}
          type='email'
          value={email}
        />
        <AuthFormTextField
          autoComplete='off'
          disabled={false}
          error={false}
          helperText='Between 6 and 12 characters.'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={() => { setShowPassword(!showPassword); }}>
                  {showPassword ?
                    <VisibilityIcon />
                    :
                    <VisibilityOffIcon />
                  }
                </IconButton>
              </InputAdornment>
            )
          }}
          label='Password'
          name='password'
          onChange={event => {
            setPassword(event.target.value);
          }}
          type={showPassword ? 'text' : 'password'}
          value={password}
        />
      </form>
      <AuthFormActions form='sign-up-form' />
    </React.Fragment>
  );
};
