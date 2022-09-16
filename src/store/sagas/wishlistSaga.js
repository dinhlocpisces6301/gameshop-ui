import { take, fork, call, put } from 'redux-saga/effects';

import { getWishlist, getWishlistSuccess } from '../reducers/wishlistSlice';
import * as wishlistServices from '~/services/wishlistServices';
import * as authServices from '~/services/authServices';

function* handleGetWishlistData() {
  const islogged = authServices.isLoggedIn();
  if (!islogged) {
    return;
  }

  const result = yield call(wishlistServices.getWishlist);
  yield put(getWishlistSuccess(result));
}

export default function* wishlistSaga() {
  while (true) {
    yield take(getWishlist().type);
    yield fork(handleGetWishlistData);
  }
}
