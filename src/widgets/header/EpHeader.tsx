import { useState } from "react";
import { addPurchase } from "../../pages/cart/model/slice";
import { Purchase } from "../../pages/cart/types";
import { useAppDispatch } from "../../store/types";
import { BtnWrap, Button, Price, Title, TitleWrap, Wrap } from "./styles";

type PropType = {
  name: string;
  episode: string;
  air_date: string;
  detail?: string;
}

export const EpHeader: React.FC<PropType> = ({name, episode, air_date, detail}) => { 
  const dispatch = useAppDispatch()
  const [cheapChoosed, setCheapChoosed] = useState(false)
  const [choosed, setChoosed] = useState(false)

  const cheapEp: Purchase = {
    episode: episode,
    quality: '720p',
    price: 2.99,
  }

  const expensiveEp: Purchase = {
    episode: episode,
    quality: 'HD',
    price: 5.99,
  }

  const choose = (value?: string) => {
    if(value) {
      setCheapChoosed(!cheapChoosed)
      setChoosed(false)
    }
    else {
      setChoosed(!choosed);
      setCheapChoosed(false)
    }
  }

  const addToCart = () => {
    if(choosed) {
      dispatch(addPurchase(expensiveEp))
    } else {
      if(cheapChoosed) {
        dispatch(addPurchase(cheapEp))
      } else return
    }
  }

  return <>
    <Wrap>
      <TitleWrap>
        <Title>Title: {name}</Title>
        <Title>Air date: {air_date}</Title>
        <Title>{detail}</Title>
      </TitleWrap>
      <BtnWrap>
        <Price choosed={cheapChoosed} onClick={() => choose('cheap')}>
          <span>{episode} | {cheapEp.quality}</span><span>{cheapEp.price}$</span>
        </Price>
        <Price choosed={choosed} onClick={() => choose()}>
          <span>{episode} | {expensiveEp.quality}</span>{expensiveEp.price}$
        </Price>
        <Button onClick={addToCart} >Add to cart</Button>
      </BtnWrap>
    </Wrap>
  </>
}