import { mainAPI } from '../../service/mainAPI';
import { call, put, takeEvery } from 'redux-saga/effects'
import { PayloadType, setChartsSuccess } from './chartsSlice';

function* workFetchCharts() {
  const data: PayloadType[] = yield call(() => mainAPI.getTopTracks())
  yield put(setChartsSuccess(data))
}

export function* chartsSaga() {
  yield takeEvery('charts/setChartsPending', workFetchCharts)
}