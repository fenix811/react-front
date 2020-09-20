import { fork } from 'redux-saga/effects';
import Product from '../components/Containers/client/saga';
import System from '../components/Login/saga';

function* rootSaga() {
 yield fork(Product);
 yield fork(System);
}

export default rootSaga;
