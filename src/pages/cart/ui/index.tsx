import { useAppDispatch, useAppSelector } from "../../../store/types";
import { Total } from "../../../widgets/card/totalPrice";
import { Header } from "../../../widgets/header/Header";
import { removePurchase } from "../model/slice";
import { Purchase } from "../types";
import { ShopItem, ShopWrap, Wrap } from "./styles";

export const Cart = () => {
  const dispatch = useAppDispatch()
  const shopList = useAppSelector(state => state.cart.shopList);

  const remove = (purchase: Purchase) => {
    dispatch(removePurchase(purchase))
  }

  return (
    <>
      <Header title="Your cart" />
      <Wrap>
        <ShopWrap>
          {shopList.map(({ episode, quality, price }) => (
            <ShopItem key={price}>
              <div>
                <div>
                  <p>{episode}</p>
                  <p>Quality: {quality}</p>
                  <span onClick={() => remove({episode, quality, price})}>Remove</span>
                </div>
              </div>
              <span>{price}$</span>
            </ShopItem>
          ))}
        </ShopWrap>
        <Total />
      </Wrap>
    </>
  );
};
