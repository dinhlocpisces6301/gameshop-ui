import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import cartSaga from './cartSaga';
import wishlistSaga from './wishlistSaga';

export default function* rootSaga() {
  yield all([userSaga(), cartSaga(), wishlistSaga()]);
}
