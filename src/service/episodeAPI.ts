import axios from "axios"

export const episodeAPI = {
  url: 'https://rickandmortyapi.com/api/episode',
  async getEpisode(num: number) {
    const res = await axios.get(`${this.url}/${num}`)
    return res.data
  }
}