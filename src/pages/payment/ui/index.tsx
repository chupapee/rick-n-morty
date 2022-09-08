import { useAppSelector } from "../../../store/types";
import { Error } from "../../../widgets/payment/error";
import { PaymentForm } from "../../../widgets/payment/form";
import { Wrap } from "./style";

export const Payment = () => {
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  return (
    <Wrap>
      {totalPrice ? (
        <>
          <PaymentForm price={totalPrice} />
        </>
      ) : (
        <>
          <Error />
        </>
      )}
    </Wrap>
  );
};
