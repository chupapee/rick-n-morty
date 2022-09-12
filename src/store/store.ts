import { cartSlice } from './../pages/cart/model/slice';
import { episodesSlice } from '../pages/episodes/model/slice';
import { configureStore } from "@reduxjs/toolkit";
import { rootSaga, sagaMiddleware } from './sagas';
import { ordersSlice } from '../pages/order/model/slice';

const rootReducer = {
  episode: episodesSlice.reducer,
  cart: cartSlice.reducer,
  orders: ordersSlice.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);