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

export const SignInForm: React.FunctionComponent = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <React.Fragment>
      <form
        id='sign-in-form'
        onSubmit={event => {
          event.preventDefault();

          console.log('sign-in-form submit', email, password);
        }}
      >
        <AuthFormTextField
          autoFocus
          disabled={false}
          error={false}
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
      <AuthFormActions form='sign-in-form' />
    </React.Fragment>
  );
};
