import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import Store from './store/store';
import App from './containers/app';

const store = Store();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
