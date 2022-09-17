import axios from "axios"

type ApiType = {
  url: string,
  characters: Map<string, any>
  getMultipleCharacters: (nums: string) => Promise<{}[]>
}

export const characterAPI: ApiType = {
  url: 'https://rickandmortyapi.com/api/character/',
  characters: new Map(),
  async getMultipleCharacters(nums: string) {
    const readyUrl = `${this.url}/${nums}`    
    if(this.characters.get(readyUrl)) {
      const promise = new Promise((res, rej) => {
        res(this.characters.get(readyUrl))
      })
      return promise
    } else {
      const res = await axios.get(readyUrl)
      this.characters.set(readyUrl, res.data)
      return res.data
    }
  },
}