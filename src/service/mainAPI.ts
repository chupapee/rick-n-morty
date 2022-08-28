import axios from "axios"

export const mainAPI = {
  url: 'https://rickandmortyapi.com/api/',
  async getCharactersList(){
    const res = await axios.get(`${this.url}character`)
    return res.data.results
  },
  async getCharacter(id: number){
    const res = await axios.get(`${this.url}character/${id}`)
    return res.data
  },
  async getCharByUrl(url: string) {
    const res = await axios.get(url)
    return res.data
  },
  filter: {
    url: 'https://rickandmortyapi.com/api/character/',
    async bySpecies(speciesType: string){
      const res = await axios.get(`${this.url}?species=${speciesType}`)
      return res.data.results
    },
    async byName(name: string){
      const res = await axios.get(`${this.url}?name=${name}`)
      return res.data.results
    }
  }
}