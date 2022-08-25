import { createSlice } from "@reduxjs/toolkit";

export const chartsSlice = createSlice({
  name: 'charts',
  initialState: {
    chartsList: [],
    isLoading: false,
    error: false
  },
  reducers: {
    setChartsPending: (state) => {
      state.isLoading = true
    },
    setChartsSuccess: (state, { payload }) => {
      state.isLoading = false
      state.chartsList = payload
    },
    setChartsFailure: (state) => {
      state.isLoading = false
      state.error = true
    }
  }
})

export const { setChartsPending, setChartsSuccess, setChartsFailure } = chartsSlice.actions