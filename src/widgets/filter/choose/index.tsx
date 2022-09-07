import { useState } from 'react'
import { useAppDispatch } from "../../../store/types";
import { setEpisodePending } from "../../../pages/episodes/model/slice";
import { MakeEpisodesName } from "./makeEpisodesName";
import { Options, Select } from "./style";

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
  
  const episodes = MakeEpisodesName()

  return (
    <>
      <Select>
        <p onClick={handleSelect}>choose the episode</p>
        {opened ? (
          <>
            <img src="https://i.postimg.cc/5tjmCHPF/pngegg.png" alt="select" />
            <Options>
              {episodes.map(({title, id}) => {
                return <span onClick={() => chooseEpisode(id)} key={id}>{title}</span>
              })}
            </Options>
          </>
        ) : (
          <img src="https://i.ibb.co/v3zf2dM/pngegg.png" alt="select" />
        )
        }
      </Select>
    </>
  );
};
