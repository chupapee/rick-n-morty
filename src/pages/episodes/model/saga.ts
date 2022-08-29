import { episodeAPI } from '../../../service/episodeAPI';
import { takeEvery, call, put } from 'redux-saga/effects';
import { setEpisodeSuccess } from './slice';
import { EpisodeType } from '../types';

function* workFetchEpisode(action: {type: string, payload: number}) {
  const data: EpisodeType = yield call(() => episodeAPI.getEpisode(action.payload))
  yield put(setEpisodeSuccess(data))
}

export function* episodesSaga() {
  yield takeEvery('episodes/setEpisodePending', workFetchEpisode)
}