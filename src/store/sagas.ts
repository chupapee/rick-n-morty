import createSagaMiddleware from '@redux-saga/core';
import { all } from 'redux-saga/effects';
import { charactersSaga } from '../pages/characters/model/charactersSaga';
import { episodesSaga } from '../pages/episodes/model/episodesSaga';

export function * rootSaga() {
  yield all([
    charactersSaga(),
    episodesSaga()
  ])
}

export const sagaMiddleware = createSagaMiddleware();
