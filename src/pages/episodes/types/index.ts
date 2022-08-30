import { CharacterType } from "../../characters/types";

export type EpisodeType = {
  episode: string;
  name: string;
  characters: string[];
  airDate: string;
};

export type EpisodeState = {
  episodeInfo: EpisodeType[];
  charactersList: CharacterType[];
  isLoading: boolean;
  error: string;
};

export type PayloadType = {
  episode: EpisodeType[];
  characters: CharacterType[]
}