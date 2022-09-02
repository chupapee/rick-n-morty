import { useState } from "react";
import { BtnWrap, Button, Price, Title, TitleWrap, Wrap } from "./styles";

type PropType = {
  name: string;
  episode: string;
  air_date: string;
  detail?: string;
}

export const HeaderTitle: React.FC<PropType> = ({name, episode, air_date, detail}) => { 
  
  const [cheapChoosed, setCheapChoosed] = useState(false)
  const [choosed, setChoosed] = useState(false)

  const choose = (value?: string) => {
    if(value) setCheapChoosed(!cheapChoosed)
    else setChoosed(!choosed)
  }

  return <>
    <Wrap>
      <TitleWrap>
        <Title>{name}</Title>
        <Title>{air_date}</Title>
        <Title>{detail}</Title>
      </TitleWrap>
      <BtnWrap>
        <Price choosed={cheapChoosed} onClick={() => choose('cheap')}><span>{episode} | 720p</span><span>2.99$</span></Price>
        <Price choosed={choosed} onClick={() => choose()} ><span>{episode} | HD</span>5.99$</Price>
        <Button >Add to cart</Button>
      </BtnWrap>
    </Wrap>
  </>
}