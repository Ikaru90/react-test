import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Title } from './title';
import { UserData } from './userData';

export const App = () => (
  <Provider store={store}>
    <Title />
    <UserData />
  </Provider>
);
