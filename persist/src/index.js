import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// persistGate helps wrap the root reducer
import { PersistGate } from 'redux-persist/lib/integration/react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import the new persistor and passed store from the store
import { persistor, store } from '../src/redux/store';

ReactDOM.render(
  <Provider store={store}>
      <PersistGate loading={<reportWebVitals />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
);

reportWebVitals();

export default App;