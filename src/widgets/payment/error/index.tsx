import { BackBtn, Wrap } from "./style";

export const Error = () => {
  return (
    <Wrap>
      <p>Your cart is empty.</p>
      <span>Add anything to the cart to continue.</span>
      <BackBtn to={"/episodes"}>Go back to store</BackBtn>
    </Wrap>
  );
};
