export function MakeEpisodesName() {
  let episodes = []
  let season = 1
  let id = 0    
  while(season <= 5){
    for(let i = 1; i <= 10; i++){
      id++
      if(i === 10) {
        episodes.push({title: `S0${season}E${i}`, id: id})
        if(season === 1) {
          id++
          episodes.push({title: `S0${season}E${i+1}`, id: id})
        }
      }
      else {
        episodes.push({title: `S0${season}E0${i}`, id: id})
      }
      if(i === 10) season++
    }
  }
  return episodes
}
