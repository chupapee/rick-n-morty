import { Payment } from "./payment";
import { Title, TitleWrap, Wrap } from "./styles";

type PropType = {
  name: string;
  episode: string;
  air_date: string;
  detail?: string;
  isBought: boolean;
  id: number;
}

export const EpHeader: React.FC<PropType> = ({name, episode, air_date, detail, isBought, id}) => { 

  return <>
    <Wrap>
      <TitleWrap>
        <Title>Title: {name}</Title>
        <Title>Air date: {air_date}</Title>
        <Title>{detail}</Title>
      </TitleWrap>
      {!isBought &&
        <Payment episode={episode} id={id} />
      }
    </Wrap>
  </>
}