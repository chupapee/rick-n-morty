import styled from "styled-components";

export const TotalWrap = styled.div`
  font-size: 2rem;
  font-weight: 700;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9fafb;
  border: 1px solid var(--light-grey);
  border-radius: 10px;
  padding: 5vh 0;
  height: fit-content;
`;

export const Wrap = styled.div`
  width: 80%;
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: space-between;
  margin: auto 0;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const PriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 600px) {
    gap: .5rem;
  }
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  gap: 8px;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const PayBtn = styled.button`
  width: 100%;
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 10px 50px;
  text-align: center;
  border-radius: 5px;

  background-color: var(--hover-blue);
  transition: 0.1s linear;

  &:hover {
    background-color: var(--dark-blue);
  }

  @media screen and (max-width: 600px) {
    padding: 8px 30px;
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
    width: 100%;
    font-size: 1rem;
    background-color: #fff;
    border: solid 2px var(--light-grey);
    border-radius: 5px;
    padding: 15px 8px;

    &:focus {
      border-color: var(--dark-blue);
    }
  }

  & button {
    padding: 10px;
    letter-spacing: 2px;
    border-radius: 5px;
    cursor: pointer;
    transition: all .1s linear;

    &:hover {
      background-color: var(--hover-blue);
      color: #fff;
    }
  }
`;

export const Promocodes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 1rem 0;
  color: var(--grey);
  letter-spacing: 2px;
  font-size: 1rem;
  text-overflow: ellipsis;
  `

export const Code = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: normal;
  font-size: 1rem;
  & span {
    text-decoration: line-through;
  }

  & p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    letter-spacing: 0;
  }
`