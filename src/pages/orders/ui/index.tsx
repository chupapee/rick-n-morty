import { useAppSelector } from "../../../store/types";
import { OrederList } from "../../../widgets/orders/orderList";
import { PaymentInfo } from "../../../widgets/orders/paymentInfo";
import { Header, Wrap } from "./style";

export const Orders = () => {
  const totalPrice = useAppSelector(state => state.orders.totalPrice)
  const orders = useAppSelector((state) => state.orders.episodes)

  return (
    <>
      {!orders.length ?
        (
          <Header>
            <h2>No orders yet.</h2>
          </Header>
        ) : (
          <>
            <Header>
              <h2>Orders confirmed</h2>
              <p>Thank you for placing your order. We have received it. A confirmation email has been sent to admin@example.com.</p>
            </Header>
            <Wrap>
              <PaymentInfo />
              <OrederList orders={orders} totalPrice={totalPrice} />
            </Wrap>
          </>
        )
      }
    </>
  )
}