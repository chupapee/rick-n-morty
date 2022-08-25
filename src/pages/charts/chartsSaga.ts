import { mainAPI } from '../../service/mainAPI';
import { call, put, takeEvery } from 'redux-saga/effects'
import { setChartsSuccess } from './chartsSlice';

type data = {
  data: any
}

function* workFetchCharts() {
  const data: data = yield call(() => mainAPI.getTopTracks())
  yield put(setChartsSuccess(data))
}

export function* chartsSaga() {
  yield takeEvery('charts/setChartsPending', workFetchCharts)
}