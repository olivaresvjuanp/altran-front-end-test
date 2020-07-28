import React from 'react';
import {
  TextFieldProps,
  TextField
} from '@material-ui/core';

export const AuthFormTextField: React.FunctionComponent<
  Omit<TextFieldProps, 'fullWidth' | 'margin' | 'required' | 'size' | 'variant'>
> = props => {
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
