import axios from "axios"
import { API_KEY, rootURL } from "./api_config"

interface artistsAPIType {
  limit?: number,
  page?: number,
  getTopArtists: () => void
}

export const artistsAPI: artistsAPIType = {
  limit: 30,
  getTopArtists(){
    axios.get(`${rootURL}method=chart.gettopartists&api_key=${API_KEY}&format=json&limit=${this.limit}`)
    .then(r => console.log(r.data.artists.artist))
  }
}