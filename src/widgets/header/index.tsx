import { useAppSelector } from "../../store/types";
import { Payment } from "./payment";
import { Title, TitleWrap, Wrap } from "./styles";

type PropType = {
  name: string;
  episode: string;
  air_date: string;
  detail?: string;
  id: number;
}

export const Header: React.FC<PropType> = ({name, episode, air_date, detail, id}) => { 
  const purchases = useAppSelector(state => state.cart.shopList)
  const isOnCart = purchases.some(item => item.id === id)
  
  return <>
    <Wrap isOnCart={isOnCart}>
      <TitleWrap>
        <Title>Title: {name}</Title>
        <Title>Air date: {air_date}</Title>
        <Title>{detail}</Title>
      </TitleWrap>
      {!isOnCart &&
        <Payment episode={episode} id={id} />
      }
    </Wrap>
  </>
}