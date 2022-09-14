import { useState } from "react";
import { useAppDispatch } from "../../../store/types";
import {
  setEpisodeId,
  setEpisodePending,
} from "../../../pages/episodes/model/slice";
import { MakeEpisodesName } from "./makeEpisodesName";
import { Options, Select } from "./style";
import { LeftArrow } from "./LeftArrow";
import { RightArrow } from "./RightArrow";

export const Choose = () => {
  const dispatch = useAppDispatch();

  const chooseEpisode = (id: number) => {
    dispatch(setEpisodePending(id));
    dispatch(setEpisodeId(id));
  };

  const episodes = MakeEpisodesName();

  const [translate, setTranslate] = useState(0)
  
  const onLeftClick = () => {
    if(translate < 0 ) setTranslate(translate + 200)
  }
  const onRightClick = () => {
    if(translate > -4400) setTranslate(translate - 200)
  }

  return (
    <>
      <Select>
        <button onClick={onLeftClick}>
          <LeftArrow />
        </button>
        <Options translateTo={translate}>
          {episodes.map(({ title, id }) => {
            return (
              <span onClick={() => chooseEpisode(id)} key={id}>
                {title}
              </span>
            );
          })}
        </Options>
        <button onClick={onRightClick}>
          <RightArrow />
        </button>
      </Select>
    </>
  );
};
