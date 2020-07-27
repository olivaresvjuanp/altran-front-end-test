import React from 'react';
import { render } from '@testing-library/react';

import { SignInPage } from './SignInPage';

describe('<App />', () => {
  it('renders without crashing', () => {
    render(<SignInPage />);
  })
});
