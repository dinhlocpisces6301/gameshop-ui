import { take, fork, call, put } from 'redux-saga/effects';

import { getCart, getCartSuccess } from '../reducers/cartSlice';
import * as cartServices from '~/services/cartServices';

function* handleGetCartData() {
  const result = yield call(cartServices.getCart);
  yield put(getCartSuccess(result));
}

export default function* cartSaga() {
  while (true) {
    yield take(getCart().type);
    yield fork(handleGetCartData);
  }
}
