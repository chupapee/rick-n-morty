import { EpisodeType } from "../../pages/episodes/types";
import { BtnWrap, Button, Price, Title, TitleWrap, Wrap } from "./styles";

type PropType = {
  name: string;
  episode: string;
  air_date: string;
  detail?: string;
}

export const HeaderTitle: React.FC<PropType> = ({name, episode, air_date, detail}) => { 
  return <>
    <Wrap>
      <TitleWrap>
        <Title>{name}</Title>
        {/* <Title>{episode}</Title> */}
        <Title>{air_date}</Title>
        <Title>{detail}</Title>
      </TitleWrap>
      <BtnWrap>
        <Price><span>{episode} 720p</span><span>2.99$</span></Price>
        <Price><span>{episode} HD</span>5.99$</Price>
        <Button>Add to cart</Button>
      </BtnWrap>
    </Wrap>
  </>
}