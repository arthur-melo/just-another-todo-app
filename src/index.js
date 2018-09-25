import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

// Third-party declarations.
import 'bootswatch/dist/flatly/bootstrap.min.css';

// Application-wide CSS definitions.
import './stylesheets/index.css';
import './stylesheets/animations.css';

import App from './containers/App';

const store = createStore(
  AppReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

registerServiceWorker();
