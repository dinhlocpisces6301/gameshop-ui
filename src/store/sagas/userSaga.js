import { getInfo, getInfoSuccess } from '../reducers/userSlice';
import { take, fork, call, put } from 'redux-saga/effects';

function* callApi() {
  const res = yield { data: 'dinhlocpisces' };
  return res.data;
}

function* handleGetUserInfo(payload) {
  while (true) {
    yield take(getInfo().type);
    try {
      const result = yield call(callApi);
      yield put(getInfoSuccess(result));
    } catch (error) {}
  }
}

export default function* userSaga() {
  yield fork(handleGetUserInfo);
}
