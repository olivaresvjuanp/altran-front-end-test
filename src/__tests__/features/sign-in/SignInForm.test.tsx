import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { SignInForm } from '../../../features/sign-in/SignInForm';

describe('<SignInForm />', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <SignInForm />
      </MemoryRouter>
    );
  });
});
