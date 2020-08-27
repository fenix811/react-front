import { put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import { ProductApi } from '../../../services/ApiService';

function* getProducts() {
  debugger;
  const data = yield ProductApi.getProducts();
  yield put(actions.getProductsSucceed(data));
}


function* rootSaga() {
    debugger;
    yield takeEvery(actions.GET_PRODUCTS, getProducts);
  }
  
  export default rootSaga;
  