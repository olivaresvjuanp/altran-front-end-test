import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import { Gnomes } from '../../../features/gnomes/Gnomes';

const mockStore = configureMockStore();

describe('<Gnomes />', () => {
  it('renders without crashing', () => {
    // ...
  });
});
