import { characterAPI } from './charactersAPI';
import axios from "axios"

interface apiType {
  url: string;
  getEpisode(nums: number): any;
  getEpisode(nums: number[]): Promise<{ episode: any }>;
}

export const episodeAPI: apiType = {
  url: 'https://rickandmortyapi.com/api/episode',
  async getEpisode(nums) {
    const res = await axios.get(`${this.url}/${nums}`)
    // orig characters looks like: "https://rickandmortyapi.com/api/character/id" => for fetching it's needed id only
    if(typeof nums === 'object'){
      return { episode: res.data }
    } else {
      const chars = res.data.characters.map((char: string) => char.split("/")[5]); // splitting sep '/' and getting 5th element
      const characters = await characterAPI.getMultipleCharacters(chars.join(','))
      return { episode: [res.data], characters: characters }
    }
  },
}