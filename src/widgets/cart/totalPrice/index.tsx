import React, { useState } from "react";
import { setTotalPrice } from "../../../pages/cart/model/slice";
import { useAppDispatch, useAppSelector } from "../../../store/types";
import { Code, Discount, DiscountWrap, PayBtn, Price, PriceWrap, Promocodes, TotalWrap, Wrap } from "./style";

export const Total = () => {
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const dispatch = useAppDispatch()
  const [discountCode, setDiscountCode] = useState("");
  const handleDiscount: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setDiscountCode(e.target.value);
  };

  const [promocodes, setPromocode] = React.useState<string[]>([]);

  const handlePromo = () => {
    if(promocodes.includes(discountCode)) return
    // if (discountCode === "WABBA LABA DUB DUB") {
      let newPromos = [...promocodes, discountCode];
      setPromocode(newPromos);
      let newPrice = parseFloat((totalPrice / 2).toFixed(2))
      dispatch(setTotalPrice(newPrice))
    // }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if(e.code === 'Enter'){
      handlePromo()
    }
  }

  return (
    <>
      <TotalWrap>
        <Wrap>
          <DiscountWrap>
            <span>Discount code:</span>
            <Discount>
              <input
                onKeyDown={e => handleKeyDown(e)}
                title="promo code"
                maxLength={25}
                type="text"
                value={discountCode}
                onChange={(e) => handleDiscount(e)}
              />
              <button onClick={handlePromo}>Activate</button>
            </Discount>
            {promocodes.length > 0 &&
            <Promocodes>
              {promocodes.map((item) => (
                <Code key={item}>
                  <span>{item}</span>
                  <p>-50%</p>
                </Code>
              ))}
            </Promocodes>
            }
          </DiscountWrap>
          <PriceWrap>
            <Code><p>Tax:</p>0.00$</Code>
            <Price>
              <span>Total:</span>
              <span>{totalPrice}$</span>
            </Price>
            <PayBtn title="pay for the purchases">Pay</PayBtn>
          </PriceWrap>
        </Wrap>
      </TotalWrap>
    </>
  );
};
