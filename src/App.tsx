import React from 'react';
import { Provider } from 'react-redux';

import { Demo } from '@components/Demo';

import { store } from '@store/index';

const App = () => {
  return (
    <Provider store={store}>
      <Demo />
    </Provider>
  );
};

export default App;
