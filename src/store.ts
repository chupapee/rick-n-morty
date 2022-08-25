import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import { chartsSlice } from "./pages/charts/chartsSlice";
import createSagaMiddleware from "@redux-saga/core";
import { chartsSaga } from "./pages/charts/chartsSaga";

const rootReducer = {
  charts: chartsSlice.reducer,
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(chartsSaga);

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch<AppDispatch>
export const useAppSelector = useSelector<RootState>