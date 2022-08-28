import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import { chartsSlice } from "./pages/characters/charactersSlice";
import createSagaMiddleware from "@redux-saga/core";
import { charactersSaga } from "./pages/characters/charactersSaga";

const rootReducer = {
  charts: chartsSlice.reducer,
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(charactersSaga);

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;