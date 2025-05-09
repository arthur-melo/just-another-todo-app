import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Third-party declarations.
import 'bootswatch/dist/flatly/bootstrap.min.css';

// Application-wide CSS definitions.
import './stylesheets/index.css';
import './stylesheets/animations.css';

// Store
import { setupStore } from './app/store';

import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <Provider store={setupStore()}>
      <App />
    </Provider>
  </StrictMode>,
);

serviceWorkerRegistration.register();
