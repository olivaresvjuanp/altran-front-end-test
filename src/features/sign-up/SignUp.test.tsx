import React from 'react';
import { render } from '@testing-library/react';

import { SignUp } from './SignUp';

describe('<SignUp />', () => {
  it('renders without crashing', () => {
    render(<SignUp />);
  })
});
