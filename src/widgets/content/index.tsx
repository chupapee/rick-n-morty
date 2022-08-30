import { IPreparedDataType } from "../../app/globalTypes";
import { Card } from "../card";
import { Wrap } from "./style";

export const Content = (data: IPreparedDataType[]) => {
  console.log(data);
  return (
    <Wrap>
      {data.map(({ image, title, subtitle }) => (
        <Card key={title} image={image} title={title} subtitle={subtitle}/>
      ))}
    </Wrap>
  );
};