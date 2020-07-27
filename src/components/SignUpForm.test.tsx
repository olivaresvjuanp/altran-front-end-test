import React from 'react';
import { render } from '@testing-library/react';

import { SignUpForm } from './SignUpForm';

describe('<SignUpForm />', () => {
  it('renders without crashing', () => {
    render(<SignUpForm />);
  })
});
