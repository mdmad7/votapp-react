import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './layouts/App';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
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
