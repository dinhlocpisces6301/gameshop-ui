import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/rootSaga';
import userReducer from './reducers/userSlice';
import cartReducer from './reducers/cartSlice';
import wishlistReducer from './reducers/wishlistSlice';

const sagaMiddleware = createSagaMiddleware();
// const initialState = {};
const store = configureStore({
  reducer: { user: userReducer, cart: cartReducer, wishlist: wishlistReducer },
  middleware: [sagaMiddleware],
  // preloadedState: initialState,
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);
export default store;
