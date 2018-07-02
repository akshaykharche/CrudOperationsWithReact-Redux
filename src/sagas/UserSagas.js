import { put, call } from 'redux-saga/effects';
import loadUserApi from '../api/Api';

export default function* laodPizzaSaga({ payload }) {
  try {
    const userObject = yield call(loadUserApi, payload);
    yield [ put({ type: 'LOAD_USER', users: userObject })];
  } catch (error) {
  console.log(error)
  }
}
