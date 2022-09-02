import { useAppSelector } from "../../../store/types";
import { CartHeader } from "../../../widgets/header/CartHeader";
import { ShopItem, ShopWrap, Wrap } from "./styles";

export const Cart = () => {
  const shopList = useAppSelector((state) => state.cart.shopList);
  return (
    <>
      <CartHeader title="Your cart" />
      <Wrap>
        <ShopWrap>
          {shopList.map(({ episode, quality, price }) => (
            <ShopItem key={price}>
              <div>{episode}</div>
              <div>{quality}</div>
              <div>{price}</div>
              <button>remove</button>
            </ShopItem>
          ))}
        </ShopWrap>
      </Wrap>
    </>
  );
};
