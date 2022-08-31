import { IPreparedDataType } from "../../app/globalTypes";
import { Img, ImgWrap, PlotWrap, Status, Wrap } from "./style";

export const Card: React.FC<IPreparedDataType> = ({ image, title, subtitle, detail }) => {
  return (
    <Wrap>
      <ImgWrap>
        <Img src={image} alt="albumIcon" />
      </ImgWrap>
      <PlotWrap>
        <Status status={detail}>{detail}</Status>
        <p style={{fontWeight: '600'}}>{title}</p>
        <span style={{textDecoration: 'underline', textTransform: 'uppercase'}}>{subtitle}</span>
      </PlotWrap>
    </Wrap>
  );
};
