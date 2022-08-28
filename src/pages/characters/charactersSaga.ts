import { PayloadType } from './charactersSlice';
import { mainAPI } from '../../service/mainAPI';
import { call, put, takeEvery } from 'redux-saga/effects'
import { setCharactersSuccess } from './charactersSlice';

function* workFetchCharacters() {
  const data: PayloadType[] = yield call(() => mainAPI.getCharactersList())
  yield put(setCharactersSuccess(data))
}

export function* charactersSaga() {
  yield takeEvery('characters/setCharactersPending', workFetchCharacters)
}