import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import App from './layouts/App';
import configureStore from './store/configureStore';

import registerServiceWorker from './registerServiceWorker';

let store = configureStore();
const NonBlockApp = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <NonBlockApp />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
