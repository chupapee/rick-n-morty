import { call, put, takeEvery } from "redux-saga/effects";
import { episodeAPI } from "../../../service/episodeAPI";
import { PayloadType } from "../../episodes/types";
import { episodesSucceeded } from "./slice";

function* getEpisodes(action: {type: string, payload: {ordersId: number[], totalPrice: number}}) {
  const data: PayloadType = yield call(() => episodeAPI.getEpisode(action.payload.ordersId))
  yield put(episodesSucceeded(data.episode))
}

export function* ordersSaga() {
  yield takeEvery('orders/episodesFething', getEpisodes)
}