import { EpisodeType } from "../../../pages/episodes/types";
import { List, Wrap } from "./style"

export const OrederList: React.FC<{orders: EpisodeType[]; totalPrice: number}> = ({ orders, totalPrice }) => {
  return (
    <>
      <Wrap>
        <h3>Orders summary</h3>
        <List>
          {orders.map(({ name, episode, characters, air_date }, index) => (
            <div key={name}>
              <span>#{index + 1}</span>
              <p>{episode}</p>
              <p>{name}</p>
              <p>{air_date}</p>
            </div>
          ))}
        </List>
        <p>Total <span> includes 0.00$ tax </span>{totalPrice}$</p>
      </Wrap>
    </>
  )
}
