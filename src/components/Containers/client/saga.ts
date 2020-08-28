import { put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import { ProductApi } from '../../../services/ApiService';

function* getProducts() {
  const data = yield ProductApi.getProducts();
  yield put(actions.getProductsSucceed(data));
}


function* rootSaga() {
    yield takeEvery(actions.GET_PRODUCTS, getProducts);
  }
  
  export default rootSaga;
  