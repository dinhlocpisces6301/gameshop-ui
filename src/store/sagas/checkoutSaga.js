import { take, fork, call, put } from 'redux-saga/effects';

import { getCheckout, getCheckoutSuccess } from '../reducers/checkoutSlice';
import * as checkoutServices from '~/services/checkoutServices';

function* handleGetCheckoutData() {
  const result = yield call(checkoutServices.getCheckout);
  yield put(getCheckoutSuccess(result));
}

export default function* checkoutSaga() {
  while (true) {
    yield take(getCheckout().type);
    yield fork(handleGetCheckoutData);
  }
}
