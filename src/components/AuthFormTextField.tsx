import React from 'react';
import {
  TextFieldProps,
  TextField
} from '@material-ui/core';

interface AuthFormTextFieldProps extends Omit<TextFieldProps, 'fullWidth' | 'margin' | 'required' | 'size' | 'variant'> {
}

export const AuthFormTextField: React.FunctionComponent<AuthFormTextFieldProps> = props => {
  return (
    <TextField
      fullWidth
      margin='dense'
      required
      size='small'
      variant='filled'
      {...props}
    />
  );
};
