import { Card } from "../card";
import { Wrap } from "./style";

export interface IData {
    image: string;
    title: string;
    subtitle: string;
}

export const Content = (data: IData[]) => {
  return (
    <Wrap>
      {data.map(({ image, title, subtitle }) => (
        <Card key={title} image={image} title={title} subtitle={subtitle}/>
      ))}
    </Wrap>
  );
};