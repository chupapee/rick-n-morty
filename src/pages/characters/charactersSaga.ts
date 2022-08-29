import { PayloadType } from './charactersSlice';
import { characterAPI } from '../../service/mainAPI';
import { call, put, takeEvery } from 'redux-saga/effects'
import { setCharactersSuccess } from './charactersSlice';

function* workFetchCharacters(action: {type: string, payload: string}) {
  if(action.payload.length > 0){
    const data: PayloadType[] = yield call(() => characterAPI.getMultipleCharacters(action.payload))
    yield put(setCharactersSuccess(data))
  } else {
    const data: PayloadType[] = yield call(() => characterAPI.getCharactersList())
    yield put(setCharactersSuccess(data))
  }
}

export function* charactersSaga() {
  yield takeEvery('characters/setCharactersPending', workFetchCharacters)
}
