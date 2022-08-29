import { CharacterType } from "../../../pages/characters/types";
import { Img, ImgWrap, Wrap } from "./style";

export const Card = ({ image, name, location }: CharacterType) => {
  return (
    <Wrap>
      <ImgWrap>
        <Img src={image} alt="albumIcon" />
      </ImgWrap>
      <div>
        <p style={{fontWeight: '600'}}>{name}</p>
        <span style={{textDecoration: 'underline', textTransform: 'uppercase'}}>{location}</span>
      </div>
    </Wrap>
  );
};
