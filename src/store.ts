import { episodesSlice } from './pages/episodes/episodesSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import { charactersSlice } from "./pages/characters/charactersSlice";
import createSagaMiddleware from "@redux-saga/core";
import { charactersSaga } from "./pages/characters/charactersSaga";
import { episodesSaga } from './pages/episodes/episodesSaga';
import { all } from 'redux-saga/effects';

const rootReducer = {
  characters: charactersSlice.reducer,
  episode: episodesSlice.reducer
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

function * rootSaga() {
  yield all([
    charactersSaga(),
    episodesSaga()
  ])
}

sagaMiddleware.run(rootSaga);

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;