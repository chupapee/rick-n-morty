import { TrackType } from "../../../pages/charts/chartsSlice";
import { Img, ImgWrap, Wrap } from "./style";

export const Card = ({ image, title, subtitle }: TrackType) => {
  return (
    <Wrap>
      <ImgWrap>
        <Img src={image['#text']} alt="albumIcon" />
      </ImgWrap>
      <div>
        <p style={{fontWeight: '600'}}>{title}</p>
        <span style={{textDecoration: 'underline', textTransform: 'uppercase'}}>{subtitle}</span>
      </div>
    </Wrap>
  );
};
