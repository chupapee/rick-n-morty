import { Purchase } from './../types/index';
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type ShopListType = {
  shopList: Purchase[],
}

const initialState: ShopListType = {
  shopList: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPurchase: (state, {payload}: PayloadAction<Purchase>) => {
      let found = false
      state.shopList.forEach(({episode, quality}) => {
        if(episode === payload.episode && quality === payload.quality) found = true
      })
      if(!found) state.shopList.push(payload)
    },
    removePurchase: (state, {payload}) => {
      
    }
  }
})

export const { addPurchase, removePurchase } = cartSlice.actions;