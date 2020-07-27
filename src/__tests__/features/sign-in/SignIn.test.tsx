import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { SignIn } from '../../../features/sign-in/SignIn';

describe('<SignIn />', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
  });
});
