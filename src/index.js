import React from 'react';
import ReactDOM from 'react-dom/client';
import {  HashRouter } from 'react-router-dom';

import { App } from 'components/App';

import './index.css';

import { store, persistor} from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HashRouter basename="/phone-book/">
            <App />
          </HashRouter>
        </PersistGate>
       </Provider>
  </React.StrictMode>
);
