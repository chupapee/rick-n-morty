import axios from "axios"
import { rootURL } from "./api_config"

interface artistsAPIType {
  limit: number,
  searchTrack: (track: string) => Promise<object>,
  searchAlbum: (album: string) => Promise<object>,
  searchArtist: (artist: string) => Promise<object>,
  getTopArtists: () => Promise<object>,
  getTopTracks: (country?: string) => Promise<object>,
}

export const mainAPI: artistsAPIType = {
  limit: 20,
  searchTrack(track: string) {
    return axios.get(`${rootURL}method=track.search&track=${track}&format=json&limit=${this.limit}`)
    .then(res => res.data.results.trackmatches.track)
  },
  searchAlbum(album: string) {
    return axios.get(`${rootURL}method=album.search&album=${album}&format=json&limit=${this.limit}`)
    .then(res => res.data.results.albummatches.album)
  },
  searchArtist(artist: string) {
    return axios.get(`${rootURL}method=artist.search&artist=${artist}&format=json&limit=${this.limit}`)
    .then(res => res.data.results.artistmatches.artist)
  },
  getTopArtists() {
    return axios.get(`${rootURL}method=chart.gettopartists&format=json&limit=${this.limit}`)
    .then(res => res.data.artists.artist)
  },
  getTopTracks(country) {
    return axios.get(`${rootURL}method=geo.gettoptracks&country=${country || 'united states'}&format=json&limit=${this.limit}`)
    .then(res => {return res.data.tracks.track})
  },
}