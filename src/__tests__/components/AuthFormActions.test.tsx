import React from 'react';
import {
  MemoryRouter,
  Router
} from 'react-router-dom';
import {
  render,
  // @ts-ignore
  fireEvent
} from '@testing-library/react';
import { createMemoryHistory } from 'history';

import { AuthFormActions } from '../../components/AuthFormActions';

describe('<AuthFormActions />', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <AuthFormActions form='sign-in-form' />
      </MemoryRouter>
    );
  });

  it('navigates to sign up when you click the link if props.form equals sign-in-form', () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        <AuthFormActions form='sign-in-form' />
      </Router>
    );

    const link = getByText(/sign up instead/i);

    expect(link).toBeInTheDocument();
    fireEvent.click(link);
    expect(history.location.pathname).toBe('/sign-up');
  });

  it('navigates to sign in when you click the link if props.form equals sign-up-form', () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        <AuthFormActions form='sign-up-form' />
      </Router>
    );

    const link = getByText(/sign in instead/i);

    expect(link).toBeInTheDocument();
    fireEvent.click(link);
    expect(history.location.pathname).toBe('/sign-in');
  });
});
