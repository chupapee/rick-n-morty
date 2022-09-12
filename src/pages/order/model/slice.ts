import { createSlice } from "@reduxjs/toolkit";
import { EpisodeType } from "../../episodes/types";

type StateType = {
  idList: number[],
  episodes: EpisodeType[],
  loading: boolean,
}

const initialState: StateType = {
  idList: [],
  episodes: [],
  loading: false,
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrders: (state, { payload }) => {
      state.idList.push(...payload)
    },
    episodesFething: (state, action) => {
      state.loading = true
    },
    episodesSucceeded: (state, { payload }) => {
      state.episodes.push(...payload)
    }
  }
})

export const { addOrders, episodesFething, episodesSucceeded } = ordersSlice.actions