import { useAppSelector } from "../../../store/types";
import { Wrap } from "./style";

export const Orders = () => {
  const orders = useAppSelector(state => state.orders.episodes)  
  
  return (
    <>
    <Wrap>
      {orders.map(({ name, episode, characters, air_date }) => (
        <div>
          <p>{episode}</p>
          <p>{name}</p>
          <p>{air_date}</p>
        </div>
      ))}
      <span>We've received your payment.</span>
    </Wrap>
    </>
  )
}