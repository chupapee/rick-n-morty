import { IPreparedDataType } from "../../app/globalTypes";
import { Img, ImgWrap, Status, Wrap, ImgTitle, Title, SubTitle, Content } from "./style";

export const Card: React.FC<IPreparedDataType> = ({ image, imageTitle, title, subtitle, detail, moreDetail }) => {
  return (
    <Wrap>
      <ImgWrap>
        <div>
          <Img src={image} alt="albumIcon" title={imageTitle} />
          <ImgTitle>{imageTitle}</ImgTitle>
        </div>
      </ImgWrap>
      <Content>
        <Status status={detail}>{detail}</Status>
        <Title gender={moreDetail}><span>{title}</span><p>{moreDetail}</p></Title>
        <p>Last location:</p>
        <SubTitle>{subtitle}</SubTitle>
      </Content>
    </Wrap>
  );
};
