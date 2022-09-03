import { Purchase } from './../types/index';
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type ShopListType = {
  shopList: Purchase[];
  totalPrice: number;
}

const initialState: ShopListType = {
  shopList: [],
  totalPrice: 0,
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
      const total = state.shopList.map(({price}) => {
        return price
      }).reduce((sum, current) => sum + current)
      state.totalPrice = total
    },
    removePurchase: (state, {payload}: PayloadAction<Purchase>) => {
      let newList = state.shopList.filter(({episode, quality}) => {
        let found = false
        if(episode === payload.episode){
          found = quality === payload.quality
        }
        return !found
      });
      state.shopList = newList
      const total = state.shopList.map(({price}) => {
        return price
      }).reduce((sum, current) => sum + current, 0)
      state.totalPrice = total
    },
    setTotalPrice: (state, {payload}: PayloadAction<number>) => {
      state.totalPrice = payload
    }
  }
})

export const { addPurchase, removePurchase, setTotalPrice } = cartSlice.actions;