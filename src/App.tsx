import React from 'react';
import { Provider } from 'react-redux';

import { store } from 'store/index';

import { Demo } from 'components/Demo';

const someAction = () => {};

const App = () => {
  return (
    <Provider store={store}>
      <Demo />
    </Provider>
  );
};

export default App;
