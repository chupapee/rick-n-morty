import { episodeAPI } from '../../../service/episodeAPI';
import { takeEvery, call, put } from 'redux-saga/effects';
import { setEpisodeSuccess } from './slice';
import { PayloadType } from '../types';

function* workFetchEpisode(action: {type: string, payload: number}) {
  const data: PayloadType = yield call(() => episodeAPI.getEpisodeFromCache(action.payload))
  yield put(setEpisodeSuccess(data))
}

export function* episodesSaga() {
  yield takeEvery('episodes/setEpisodePending', workFetchEpisode)
}