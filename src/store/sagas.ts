import createSagaMiddleware from '@redux-saga/core';
import { all } from 'redux-saga/effects';
import { episodesSaga } from '../pages/episodes/model/saga';
import { ordersSaga } from '../pages/orders/model/saga';

export function * rootSaga() {
  yield all([
    episodesSaga(),
    ordersSaga()
  ])
}

export const sagaMiddleware = createSagaMiddleware();
