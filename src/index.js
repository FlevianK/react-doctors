import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/layout/App';
import { StoreProvider } from './store/Store';

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
