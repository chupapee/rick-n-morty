import createSagaMiddleware from '@redux-saga/core';
import { all } from 'redux-saga/effects';
import { episodesSaga } from '../pages/episodes/model/saga';

export function * rootSaga() {
  yield all([
    episodesSaga(),
  ])
}

export const sagaMiddleware = createSagaMiddleware();
