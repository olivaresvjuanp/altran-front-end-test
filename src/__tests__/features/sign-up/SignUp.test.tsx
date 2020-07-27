import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { SignUp } from '../../../features/sign-up/SignUp';

describe('<SignUp />', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );
  });
});
