import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CharactersState, PayloadType } from "../types";

const initialState: CharactersState = {
  charactersList: [
    {
      image: '',
      location: {name: ''},
      name: '',
      status: ''
    }
  ],
  page: 1,
  isLoading: false,
  error: false
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharactersPending: (state, {payload}: PayloadAction<{}>) => {
      state.isLoading = true
    },
    setCharactersSuccess: (state, {payload}: PayloadAction<PayloadType>) => {
      state.isLoading = false
      const data = payload.res.map(({image, location, status, name}) => ({name: name,image: image, status: status, location: location}))
      state.charactersList = data
      state.page = payload.page
    },
    setCharactersFailure: (state) => {
      state.isLoading = false
      state.error = true
    }
  }
})

export const { setCharactersPending, setCharactersSuccess, setCharactersFailure } = charactersSlice.actions