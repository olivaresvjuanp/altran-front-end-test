import React from 'react';
import { render } from '@testing-library/react';

import { SignIn } from './SignIn';

describe('<SignIn />', () => {
  it('renders without crashing', () => {
    render(<SignIn />);
  })
});
