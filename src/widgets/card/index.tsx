import { IData } from "../content";
import { Img, ImgWrap, Wrap } from "./style";

export const Card: React.FC<IData> = ({ image, title, subtitle }) => {
  return (
    <Wrap>
      <ImgWrap>
        <Img src={image} alt="albumIcon" />
      </ImgWrap>
      <div>
        <p style={{fontWeight: '600'}}>{title}</p>
        <span style={{textDecoration: 'underline', textTransform: 'uppercase'}}>{subtitle}</span>
      </div>
    </Wrap>
  );
};
