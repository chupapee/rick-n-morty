import { useEffect } from "react";
import { IPreparedDataType } from "../../../app/globalTypes";
import { useAppDispatch, useAppSelector } from "../../../store/types";

import { Content } from "../../../widgets/content";
import { HeaderTitle } from "../../../widgets/header/HeaderTitle";
import { setCharactersPending } from "../model/slice";

export const Characters = () => {
  const data = useAppSelector((state) => state.characters.charactersList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCharactersPending({characters: '', page: 1}));
  }, [dispatch]);
  
  const preparedData: IPreparedDataType[] = data.map(item => ({
    image: item.image,
    title: item.name,
    subtitle: item.location.name,
    detail: item.status,
  }))

  return (
    <>
      <HeaderTitle title="Characters" />
      <Content data={preparedData} />
    </>
  );
};
