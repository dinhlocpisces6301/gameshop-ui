import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/rootSaga';
import userReducer from './reducers/userSlice';
import cartReducer from './reducers/cartSlice';

const sagaMiddleware = createSagaMiddleware();
// const initialState = {};
const store = configureStore({
  reducer: { user: userReducer, cart: cartReducer },
  middleware: [sagaMiddleware],
  // preloadedState: initialState,
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);
export default store;
