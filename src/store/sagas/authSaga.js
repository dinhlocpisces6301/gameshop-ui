import { call, delay, fork, put, take } from 'redux-saga/effects';
import { login, logout, loginSuccess, loginFailed } from '../reducers/authSlice';
import { uuid } from '~/utils';
function* handleLogin(payload) {
  try {
    localStorage.setItem('access_token', 'fake_token');
    yield put(
      loginSuccess({
        token: 'fake_token',
      }),
    );
  } catch (error) {
    yield put(loginFailed({ id: uuid(), content: error.message }));
  }
}

function* handleLogout() {
  yield delay(500);
  localStorage.removeItem('access_token');
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    // console.log(isLoggedIn);
    if (!isLoggedIn) {
      const action = yield take(login.type);
      yield fork(handleLogin, action.payload);
    }
    yield take(logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
