export type EpisodeType = {
  episode: string;
  name: string;
  characters: string[];
  airDate: string;
};

export type EpisodeState = {
  episodeInfo: EpisodeType[];
  isLoading: boolean;
  error: string;
};