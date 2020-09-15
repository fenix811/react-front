import { put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import { ProductApi } from '../../../services/ApiService';
import { IProduct } from '../../../models/product';

function* getProducts() {
  const data = yield ProductApi.getProducts();
  yield put(actions.getProductsSucceed(data));
}
function* addNewProduct(action: any) {
  debugger;
  const data = yield ProductApi.addProduct(action.data);
  yield put(actions.getProducts());
}


function* rootSaga() {
    yield takeEvery(actions.GET_PRODUCTS, getProducts);
    yield takeEvery(actions.ADD_NEW_PRODUCT, addNewProduct);
  }
  
  export default rootSaga;
  