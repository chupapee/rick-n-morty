import { BackBtn, Wrap } from "./style";

export const Error = () => {
  return (
    <Wrap>
      <p>Your cart is empty</p>
      Add anything to the cart to continue.
      <BackBtn to={"/episodes"}>Go back to store</BackBtn>
    </Wrap>
  );
};
