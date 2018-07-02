import { takeLatest } from 'redux-saga';
import loadUserSaga from './UserSagas';
// import * as types from '../constants/actionTypes';

export default function* userWatcher() {
  yield* takeLatest('LOAD_USER_INITIAL', loadUserSaga);
}
