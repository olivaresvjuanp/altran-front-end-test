import React from 'react';
import { render } from '@testing-library/react';

import { SignInForm } from './SignInForm';

describe('<SignInForm />', () => {
  it('renders without crashing', () => {
    render(<SignInForm />);
  })
});
