import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { SignUpForm } from '../../../features/sign-up/SignUpForm';

describe('<SignUpForm />', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );
  });
});
