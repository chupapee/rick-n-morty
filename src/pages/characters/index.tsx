import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";

import { Content } from "../../widgets/content";
import { HeaderTitle } from "../../widgets/header/HeaderTitle";
import { setCharactersPending } from "./charactersSlice";

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
