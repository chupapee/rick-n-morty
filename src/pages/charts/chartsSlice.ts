import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PayloadType = {
  image: { size: string; '#text': string; }[];
  name: string;
  artist: { name: string }
}

export type TrackType = {
  image: { size: string; '#text': string },
  title: string;
  subtitle: string;
}

type ChartsState = {
  chartsList: TrackType[];
  isLoading: boolean;
  error: boolean
}

const initialState: ChartsState = {
  chartsList: [
    {
      image: {size: '0', '#text': ''},
      title: '',
      subtitle: ''
    }
  ],
  isLoading: false,
  error: false
}

export const chartsSlice = createSlice({
  name: 'charts',
  initialState,
  reducers: {
    setChartsPending: (state) => {
      state.isLoading = true
    },
    setChartsSuccess: (state, {payload}: PayloadAction<PayloadType[]>) => {
      state.isLoading = false
      const data = payload.map(({image, name, artist}) => ({image: image[3], title: name, subtitle: artist.name}))
      state.chartsList = data
    },
    setChartsFailure: (state) => {
      state.isLoading = false
      state.error = true
    }
  }
})

export const { setChartsPending, setChartsSuccess, setChartsFailure } = chartsSlice.actions