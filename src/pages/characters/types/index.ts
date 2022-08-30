export type PayloadType = {
  res: {
    name: string;
    image: string;
    location: {
      name: string;
    };
    gender: string;
    species: string;
    status: string;
  }[];
  page: number
}

export type CharacterType = {
  image: string;
  name: string;
  status?: string;
  location: {name: string};
  gender?: string;
  species?: string;
}

export type CharactersState = {
  charactersList: CharacterType[];
  page: number;
  isLoading: boolean;
  error: boolean
}
