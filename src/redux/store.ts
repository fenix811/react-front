import { createStore, combineReducers, compose as simpleCompose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { systemReducer } from './reducers/systemReducers';
import { productReducer } from './reducers/productReducers';
import rootSaga from './sagas';
import { createLogger } from 'redux-logger';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof simpleCompose;
  }
}


const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(
  sagaMiddleware,
  createLogger({
    collapsed: true,
  }),
);

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || simpleCompose;

const getStore = (history:History, initialState = {}) => {
  const rootReducer = combineReducers({
    system: systemReducer,
    productPage: productReducer,
    router: connectRouter(history)
   })
  
  const store = createStore(rootReducer, initialState, compose(middleware));

  sagaMiddleware.run(rootSaga);

  return store;
};

export default getStore;
