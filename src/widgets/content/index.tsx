import { CharacterType } from "../../pages/characters/types";
import { Card } from "./card";
import { Wrap } from "./style";

interface IData {
  data: CharacterType[]
}

export const Content: React.FC<IData> = (props) => {
  const data = props.data
  return (
    <Wrap>
      {data.map(({ image, name, location }) => (
        <Card key={name} image={image} name={name} location={location}/>
      ))}
    </Wrap>
  );
};