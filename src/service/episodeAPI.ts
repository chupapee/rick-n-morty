import { characterAPI } from "./charactersAPI";
import axios from "axios";

interface ApiType {
  url: string;
  characters: Map<string, {}[]>
  episode: Map<string, {}[]>
  getEpisodeFromCache: (nums: number | number[]) => Promise<any>
  getEpisode: (nums: number | number[], readyUrl: string) => Promise<any>
}

export const episodeAPI: ApiType = {
  url: "https://rickandmortyapi.com/api/episode",
  characters: new Map(),
  episode: new Map(),
  async getEpisodeFromCache(nums: any) {
    const readyUrl = `${this.url}/${nums}`;
    if (typeof nums === "object" && this.episode.get(readyUrl)) {
      const promise = new Promise((res, rej) => {
        res(this.episode.get(readyUrl));
      });
      return promise;
    } else if (this.characters.get(readyUrl)) {
      let promise = new Promise((res, rej) => {
        res(this.characters.get(readyUrl));
      });
      return promise;
    } else {
      const result = this.getEpisode(nums, readyUrl);
      result.then((res) => {
        if (typeof nums === "object") this.episode.set(readyUrl, res);
        else this.characters.set(readyUrl, res);
      });
      return result;
    }
  },
  async getEpisode(nums: any, url: string) {    
    const res = await axios.get(url);
    if (typeof nums === "object") {
      return { episode: res.data };
    } else {
      const chars = res.data.characters.map((char: string) => char.split("/")[5]); // splitting sep '/' and getting 5th element
      const characters = await characterAPI.getMultipleCharacters(chars.join(","));
      return { episode: [res.data], characters: characters };
    }
  },
};