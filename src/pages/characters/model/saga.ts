import { characterAPI } from '../../../service/charactersAPI';
import { call, put, takeEvery } from 'redux-saga/effects'
import { PayloadType } from '../types';
import { setCharactersSuccess } from './slice';

function* workFetchCharacters(action: {type: string, payload: {characters: string; page: number;}}) {
    const data: PayloadType = yield call(() => characterAPI.getCharactersList(action.payload.page))
    yield put(setCharactersSuccess(data))
}

export function* charactersSaga() {
  yield takeEvery('characters/setCharactersPending', workFetchCharacters)
}
