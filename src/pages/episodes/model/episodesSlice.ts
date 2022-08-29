import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { EpisodeState, EpisodeType } from "../types";

const initialState: EpisodeState = {
  episodeInfo: [
    {
      episode: "",
      name: "",
      characters: [],
      airDate: "",
    },
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
    setEpisodeSuccess: (state, { payload }: PayloadAction<EpisodeType>) => {
      // orig characters looks like: "https://rickandmortyapi.com/api/character/id" => for fetching it's needed id only
      const characters = payload.characters.map((char) => char.split("/")[5]); // splitting sep '/' and getting 5th element
      state.episodeInfo = [{ ...payload, characters: characters }];
    },
    setEpisodeError: (state) => {
      state.error = 'Oops... Something went wrong!'
    }
  },
});

export const { setEpisodePending, setEpisodeSuccess } = episodesSlice.actions;
