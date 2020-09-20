import { put, takeEvery } from 'redux-saga/effects';
import { IUser } from '../../models/user';
import { AuthService } from '../../services/AuthService';
import * as actions from './actions';

function* loging(action:any) {
  debugger;
  const data = yield AuthService.login(action.data);
}


function* rootSaga() {
  debugger;
    yield takeEvery(actions.LOGING, loging);
  }
  
  export default rootSaga;
  