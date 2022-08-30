import { characterAPI } from './charactersAPI';
import axios from "axios"

export const episodeAPI = {
  url: 'https://rickandmortyapi.com/api/episode',
  async getEpisode(num: number) {
    const res = await axios.get(`${this.url}/${num}`)
    // orig characters looks like: "https://rickandmortyapi.com/api/character/id" => for fetching it's needed id only
    const chars = res.data.characters.map((char: string) => char.split("/")[5]); // splitting sep '/' and getting 5th element
    const characters = await characterAPI.getMultipleCharacters(chars.join(','))
    return {episode: [res.data], characters: characters}
  }
}