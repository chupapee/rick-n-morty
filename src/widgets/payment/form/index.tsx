import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { clearShopList } from '../../../pages/cart/model/slice';
import { useAppDispatch } from '../../../store/types';
import { Form, PayBtn, Wrap } from "./style";

export const PaymentForm: React.FC<{price: number, closePayment: () => void}> = ({price, closePayment}) => {
  const [paid, setPaid] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setPaid(true)
  };
  
  useEffect(() => {
    if(paid){
      setTimeout(() => {
        closePayment()
        navigate('/order')
        dispatch(clearShopList())
      }, 1500)
    }
  }, [paid, closePayment, navigate, dispatch])

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
