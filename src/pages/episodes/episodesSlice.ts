import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export type EpisodeType = {
  episode: string;
  name: string;
  characters: string[];
  airDate: string;
};

type EpisodeState = {
  episodeInfo: EpisodeType[];
  isLoading: boolean;
  error: string;
};

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
      const characters = payload.characters.map((char) => {
        return char.split("/")[5];
      });
      state.episodeInfo = [{ ...payload, characters: characters }];
    },
    setEpisodeError: (state) => {
      state.error = 'Oops... Something went wrong!'
    }
  },
});

export const { setEpisodePending, setEpisodeSuccess } = episodesSlice.actions;
