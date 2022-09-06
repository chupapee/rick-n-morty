import { useState } from "react"
import { setEpisodePending } from "../../../pages/episodes/model/slice";
import { useAppDispatch } from "../../../store/types";
import { Select, Options } from "./style"

export const Choose = () => {
  const dispatch = useAppDispatch()

  const [opened, setOpened] = useState(false)
  const handleSelect = () => {    
    setOpened(!opened)
  }

  const chooseEpisode = (id: number) => {
    dispatch(setEpisodePending(id))
    setOpened(false)
  }
  
  let episodes = []
  let season = 1
  let id = 0
  while(season <= 5){
    for(let i = 1; i <= 10; i++){
      id++
      if(i === 10) {
        episodes.push({episode: `S0${season}E${i}`, id: id})
        if(season === 1) {
          id++
          episodes.push({episode: `S0${season}E${i+1}`, id: id})
        }
      }
      else {
        episodes.push({episode: `S0${season}E0${i}`, id: id})
      }
      if(i === 10) season++
    }
  }

  return (
    <>
      <Select>
        <p onClick={handleSelect}>Choose episode</p>
        {opened ? (
          <>
            <img src="https://i.postimg.cc/5tjmCHPF/pngegg.png" alt="select" />
            <Options>
              {episodes.map(({ episode, id }) => (
                <span onClick={() => chooseEpisode(id)} key={id}>
                  {episode}
                </span>
              ))}
            </Options>
          </>
        ) : (
          <img src="https://i.ibb.co/v3zf2dM/pngegg.png" alt="select" />
        )}
      </Select>
    </>
  );
};
