import { Wrap } from "./style"

export const PaymentInfo = () => {
  return (
    <Wrap>
      <div>
        <h3>Payment</h3>
        <span>We've received your payment. ✔️</span>
      </div>

      <div>
        <h3>Payment method</h3>
        <p>Credit card</p>
      </div>

      <div>
        <h3>Contact details</h3>
        <p>admin@example.com</p>
      </div>
    </Wrap>
  )
}