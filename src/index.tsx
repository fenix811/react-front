import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import getStore from './redux/store'

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

export const history = createBrowserHistory();
const store = getStore(history);


ReactDOM.render(
  <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
