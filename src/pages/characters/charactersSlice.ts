import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PayloadType = {
  name: string;
  image: string;
  location: {
    name: string;
  };
  gender: string;
  species: string;
  status: string;
}

export type CharacterType = {
  image: string;
  name: string;
  status?: string;
  location: string;
  gender?: string;
  species?: string;
}

type CharactersState = {
  charactersList: CharacterType[];
  isLoading: boolean;
  error: boolean
}

const initialState: CharactersState = {
  charactersList: [
    {
      image: '',
      location: '',
      name: '',
      status: ''
    }
  ],
  isLoading: false,
  error: false
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharactersPending: (state, {payload}: PayloadAction<string>) => {
      state.isLoading = true
    },
    setCharactersSuccess: (state, {payload}: PayloadAction<PayloadType[]>) => {
      state.isLoading = false
      const data = payload.map(({image, location, status, name}) => ({name: name,image: image, status: status, location: location.name}))
      state.charactersList = data
    },
    setCharactersFailure: (state) => {
      state.isLoading = false
      state.error = true
    }
  }
})

export const { setCharactersPending, setCharactersSuccess, setCharactersFailure } = charactersSlice.actions