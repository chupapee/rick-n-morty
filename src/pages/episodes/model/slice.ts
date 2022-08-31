import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { EpisodeState, PayloadType } from "../types";

const initialState: EpisodeState = {
  episodeInfo: [
    {
      episode: "",
      name: "",
      characters: [],
      air_date: "",
    }
  ],
  charactersList: [
    {
      name: '',
      image: '',
      location: {name: ''},
    }
  ],
  isLoading: false,
  error: ''
};

export const episodesSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {
    setEpisodePending: (state, { payload }: PayloadAction<number>) => {
      state.isLoading = true;
    },
    setEpisodeSuccess: (state, { payload }: PayloadAction<PayloadType>) => {
      state.episodeInfo = payload.episode
      state.charactersList = payload.characters
    },
    setEpisodeError: (state) => {
      state.error = 'Oops... Something went wrong!'
    },
    setEpCharactersPending: (state, { payload }) => {
      state.isLoading = true
    },
    setEpCharactersSuccess: (state, { payload }) => {
      state.isLoading = false
      if(payload[0]){
        state.charactersList = payload
      }
    }
  },
});

export const { setEpisodePending, setEpisodeSuccess, setEpCharactersPending, setEpCharactersSuccess } = episodesSlice.actions;
