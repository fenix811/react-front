import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { systemReducer } from './reducers/systemReducers';
import { productReducer } from './reducers/productReducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(
  sagaMiddleware,
);

export const rootReducer = combineReducers({
  system: systemReducer,
//  products: productReducer
})

const getStore = (initialState = {}) => {
  const store = createStore(rootReducer, initialState, compose(middleware));

  sagaMiddleware.run(rootSaga);

  return store;
};

export default getStore;
