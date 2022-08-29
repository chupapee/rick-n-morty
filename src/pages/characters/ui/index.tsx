import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/types";

import { Content } from "../../../widgets/content";
import { HeaderTitle } from "../../../widgets/header/HeaderTitle";
import { setCharactersPending } from "../model/charactersSlice";

export const Characters = () => {
  const data = useAppSelector((state) => state.characters.charactersList);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(setCharactersPending(''));
  }, [dispatch]);

  return (
    <>
      <HeaderTitle title="Characters" />
      <Content data={data} />
    </>
  );
};
