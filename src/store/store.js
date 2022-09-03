import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/rootSaga';
import userReducer from './reducers/userSlice';
import authReducer from './reducers/authSlice';

const sagaMiddleware = createSagaMiddleware();
// const initialState = {};
const store = configureStore({
  reducer: { user: userReducer, auth: authReducer },
  middleware: [sagaMiddleware],
  // preloadedState: initialState,
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);
export default store;
