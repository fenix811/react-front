import { fork } from 'redux-saga/effects';
import Product from '../components/Containers/client/saga';

function* rootSaga() {
 yield fork(Product);
}

export default rootSaga;
