import axios from "axios"

export const characterAPI = {
  url: 'https://rickandmortyapi.com/api/character',
  async getCharactersList(){
    const res = await axios.get(`${this.url}`)
    return res.data.results
  },
  async getCharacter(id: number){
    const res = await axios.get(`${this.url}/${id}`)
    return res.data
  },
  async getCharByUrl(url: string) {
    const res = await axios.get(url)
    return res.data
  },
  async getMultipleCharacters(nums: string) {
    const res = await axios.get(`${this.url}/${nums}`)
    return res.data
  },
  filter: {
    url: 'https://rickandmortyapi.com/api/character',
    async bySpecies(speciesType: string){
      const res = await axios.get(`${this.url}/?species=${speciesType}`)
      return res.data.results
    },
    async byName(name: string){
      const res = await axios.get(`${this.url}/?name=${name}`)
      return res.data.results
    }
  }
}