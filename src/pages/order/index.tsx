import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/types";
import { Wrap } from "./style";

export const Orders = () => {
  const orders = useAppSelector(state => state.orders)
  console.log(orders.idList);
  
  const navigate = useNavigate()

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate('/episodes')
  //   }, 3000)
  // }, [navigate])
  
  return (
    <>
    <Wrap>
      <span>We've received your payment.</span>
      <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/340/check-mark-button_2705.png" alt="" />
    </Wrap>
    </>
  )
}