import { Img, ImgWrap, Wrap } from "./style";

type PropsT = {
  photo: string;
  title: string;
  detailInfo?: number | string;
};

export const Card = ({ photo, title, detailInfo }: PropsT) => {
  return (
    <Wrap>
      <ImgWrap>
        <Img src={photo} alt="albumIcon" />
      </ImgWrap>
      <div>
        <p style={{fontWeight: '600'}}>{title}</p>
        <span style={{textDecoration: 'underline', textTransform: 'uppercase'}}>{detailInfo}</span>
      </div>
    </Wrap>
  );
};
