import { CharacterType } from "../../characters/types";

export type EpisodeType = {
  episode: string;
  name: string;
  characters: string[];
  air_date: string;
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