import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";

import { Content } from "../../widgets/content";
import { HeaderTitle } from "../../widgets/header/HeaderTitle";
import { setChartsPending } from "./chartsSlice";

export const Charts = () => {
  const data = useAppSelector((state) => state.charts.chartsList);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(setChartsPending());
  }, [dispatch]);

  return (
    <>
      <HeaderTitle title="Charts" />
      <Content data={data} />
    </>
  );
};
