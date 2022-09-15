import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EpisodeType } from "../../episodes/types";

type StateType = {
  idList: number[];
  episodes: EpisodeType[];
  totalPrice: number;
  loading: boolean;
}

type PayloadType = {
  ordersId: number[];
  totalPrice: number
}

const initialState: StateType = {
  idList: [],
  episodes: [],
  totalPrice: 0,
  loading: false,
}


export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrders: (state, { payload }) => {
      state.idList.push(...payload)
    },
    episodesFething: (state, { payload }: PayloadAction<PayloadType>) => {      
      state.loading = true
      state.totalPrice += payload.totalPrice
    },
    episodesSucceeded: (state, { payload }) => {
      if(payload.length) state.episodes.push(...payload)
      else state.episodes.push(payload)
    }
  }
})

export const { addOrders, episodesFething, episodesSucceeded } = ordersSlice.actions