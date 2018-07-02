import { fork } from 'redux-saga/effects';
import userWatcher from './watchers';

export default function* rootSaga() {
  yield fork(userWatcher);
}
