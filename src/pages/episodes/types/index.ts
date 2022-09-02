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

export type CharacterType = {
  image: string;
  name: string;
  status?: string;
  location: {name: string};
  gender?: string;
  species?: string;
}