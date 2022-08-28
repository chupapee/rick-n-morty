import { TrackType } from "../../pages/charts/chartsSlice";
import { Card } from "./card";
import { Wrap } from "./style";

interface IData {
  data: TrackType[]
}

export const Content: React.FC<IData> = (props) => {
  const data = props.data
  console.log(data);
  return (
    <Wrap>
      {data.map(({ image, title, subtitle }) => (
        <Card image={image} title={title} subtitle={subtitle}/>
      ))}
    </Wrap>
  );
};

