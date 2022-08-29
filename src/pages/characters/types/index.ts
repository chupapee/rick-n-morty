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

export type CharactersState = {
  charactersList: CharacterType[];
  isLoading: boolean;
  error: boolean
}
