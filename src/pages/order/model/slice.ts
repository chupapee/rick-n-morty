import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateType = {
  idList: number[]
}

const initialState: StateType = {
  idList: []
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrders: (state, { payload }: PayloadAction<number[]>) => {
      state.idList.push(...payload)
    }
  }
})

export const { addOrders } = ordersSlice.actions