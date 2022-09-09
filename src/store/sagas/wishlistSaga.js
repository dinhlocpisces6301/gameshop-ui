import { take, fork, call, put } from 'redux-saga/effects';

import { getWishlist, getWishlistSuccess } from '../reducers/wishlistSlice';
import * as wishlistServices from '~/services/wishlistServices';

function* handleGetWishlistData() {
  const result = yield call(wishlistServices.getWishlist);
  yield put(getWishlistSuccess(result));
}

export default function* wishlistSaga() {
  while (true) {
    yield take(getWishlist().type);
    yield fork(handleGetWishlistData);
  }
}
