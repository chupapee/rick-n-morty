import { episodesSlice } from '../pages/episodes/model/slice';
import { configureStore } from "@reduxjs/toolkit";
import { charactersSlice } from "../pages/characters/model/slice";
import { rootSaga, sagaMiddleware } from './sagas';

const rootReducer = {
  characters: charactersSlice.reducer,
  episode: episodesSlice.reducer
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);