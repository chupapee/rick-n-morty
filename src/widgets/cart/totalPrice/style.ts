import styled from "styled-components";

export const TotalWrap = styled.div`
  font-size: 2rem;
  font-weight: 700;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9fafb;
  border: 1px solid var(--light-grey);
  border-radius: 10px;
`;

export const Wrap = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  margin: auto 0;
`;

export const PriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const PayBtn = styled.button`
  color: #fff;
  font-size: 1.5rem;
  width: 100%;
  cursor: pointer;
  padding: 15px 10px;
  border-radius: 5px;

  background-color: var(--hover-blue);
  transition: 0.1s linear;

  &:hover {
    background-color: var(--dark-blue);
  }
`;

export const DiscountWrap = styled.div`
  display: block;
  font-size: 1rem;
  font-weight: normal;
  letter-spacing: 1px;
`

export const Discount = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 8px;
  
  & input{
    font-size: 1rem;
    background-color: #fff;
    border: solid 2px var(--light-grey);
    border-radius: 5px;
    padding: 15px 8px;
    width: 70%;

    &:focus {
      border-color: var(--dark-blue);
    }
  }

  & button {
    width: 30%;
    padding: 10px;
    letter-spacing: 2px;
    border-radius: 5px;
    cursor: pointer;
    transition: all .1s linear;

    &:hover {
      background-color: var(--hover-blue);
    }
  }
`;

export const Promocodes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 1rem 0;
  text-align: justify;
  color: var(--grey);
  text-decoration: line-through;
  letter-spacing: 2px;
  font-size: 1.2rem;

  & span {
    text-overflow: ellipsis;
  }
`