import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { clearShopList } from '../../../pages/cart/model/slice';
import { addOrders, episodesFething } from '../../../pages/orders/model/slice';
import { useAppDispatch, useAppSelector } from '../../../store/types';
import { Form, PayBtn, Wrap } from "./style";

export const PaymentForm: React.FC<{price: number, closePayment: () => void}> = ({price, closePayment}) => {
  const [paid, setPaid] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const totalPrice = useAppSelector(state => state.cart.totalPrice)

  const orders = useAppSelector(state => state.cart.shopList)
  const ordersId = orders.map(({id}) => id)
  
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    dispatch(addOrders(ordersId))
    dispatch(episodesFething({ordersId, totalPrice}))
    setPaid(true)
    setTimeout(() => {
      closePayment()
      dispatch(clearShopList())
      navigate('/orders')
    }, 1500)
  };

  return (
    <>
      <Wrap onClick={() => closePayment()}>
        <Form onClick={e => e.stopPropagation()}>
            <p>Payment card</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="number">
              <input
                maxLength={16}
                required
                name="number"
                type={"text"}
                placeholder='Card Number'
                pattern="^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$"
              />
            </label>
            <label htmlFor="date">
              <input
                required
                maxLength={4}
                type={"text"}
                name='date'
                placeholder="MM/YY"
                pattern="[0-9]{4}"
              />
            </label>
            <label htmlFor="cvv">
              <input
                required
                type={"text"}
                name='cvv'
                maxLength={3}
                placeholder="Security Code (CVV)"
                pattern='[0-9]{3,4}'
              />
            </label>
            <PayBtn disabled={paid}>{paid ? 'Paying...' : `Pay ${price}$`}</PayBtn>
          </form>
        </Form>
      </Wrap>
    </>
  );
};
