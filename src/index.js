import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from 'components/App';

import './index.css';

import { store, persistor} from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router basename="/phone-book">
            <App />
          </Router>
        </PersistGate>
       </Provider>
  </React.StrictMode>
);
