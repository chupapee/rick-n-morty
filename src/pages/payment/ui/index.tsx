import { useAppSelector } from "../../../store/types";
import { Error } from "../../../widgets/payment/error";
import { PaymentForm } from "../../../widgets/payment/form";
import { Wrap } from "./style";

export const Payment: React.FC<{closePayment: () => void}> = ({closePayment}) => {
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  return (
    <Wrap>
      {totalPrice ? (
        <>
          <PaymentForm closePayment={closePayment} price={totalPrice} />
        </>
      ) : (
        <>
          <Error />
        </>
      )}
    </Wrap>
  );
};
