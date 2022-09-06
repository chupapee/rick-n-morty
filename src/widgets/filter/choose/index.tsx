import { setEpisodePending } from "../../../pages/episodes/model/slice";
import { useAppDispatch } from "../../../store/types";
import { SelectWrap } from "../SelectWrap";
import { MakeEpisodesName } from "./makeEpisodesName";

export const Choose = () => {
  const dispatch = useAppDispatch()

  const chooseEpisode = (id: number) => {
    dispatch(setEpisodePending(id))
  }
  
  const episodes = MakeEpisodesName()

  return (
    <>
      <SelectWrap title='choose the episode' data={episodes} callback={chooseEpisode} />
    </>
  );
};
