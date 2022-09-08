import { useAppDispatch, useAppSelector } from "../../../store/types";
import { Total } from "../../../widgets/cart";
import { removePurchase } from "../model/slice";
import { Purchase } from "../types";
import { ShopItem, ShopWrap, Title, Wrap } from "./styles";

export const Cart = () => {
  const dispatch = useAppDispatch()
  const shopList = useAppSelector(state => state.cart.shopList);

  const remove = (purchase: Purchase) => {
    dispatch(removePurchase(purchase))
  }

  return (
    <>
      <Title>Your cart</Title>
      <Wrap>
        <ShopWrap>
          {shopList.length > 0 ?
          shopList.map(({ episode, quality, price }) => (
            <ShopItem key={price}>
              <div>
                <div>
                  <p>{episode}</p>
                  <h6>{quality}</h6>
                  <span onClick={() => remove({episode, quality, price})}>Remove</span>
                </div>
              </div>
              <span>{price}$</span>
            </ShopItem>
          ))
          : <ShopItem>your cart is empty</ShopItem>
        }
        </ShopWrap>
        <Total />
      </Wrap>
    </>
  );
};
