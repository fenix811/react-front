import { put, takeEvery } from 'redux-saga/effects';
import { IUser } from '../../models/user';
import { AuthService } from '../../services/AuthService';
import * as actions from './actions';
import {history} from '../../index';

function* loging(action:any) {
  const isLogin = yield AuthService.login(action.data);
  if(isLogin){
    history.push("/admin");
  }
}


function* rootSaga() {
    yield takeEvery(actions.LOGING, loging);
  }
  
  export default rootSaga;
  