import styled from "styled-components";

export const Wrap = styled.div`
  width: calc(100% - 1em);
  padding: 2em 3em 3em 5em;
  margin-bottom: 1em;
  border: 3px var(--grey) solid;
  box-shadow: 1em 1em var(--bg-blue);

  display: flex;
  justify-content: space-between;
  gap: 1.5rem;

  @media screen and (max-width: 960px) {
    padding: 1em 2em 2em 4em;
  }

  @media screen and (max-width: 735px) {
    padding: 2em;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
  }

  @media screen and (max-width: 450px) {
    padding: 1em;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
`;

export const Title = styled.p`
  font-size: 2em;
  font-weight: 700;
  letter-spacing: 0.2em;

  @media screen and (max-width: 960px) {
    font-size: 1.5em;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.1em;
  }
`;

export const BtnWrap = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    width: 50%;
  }

  @media screen and (max-width: 735px) {
    width: 100%;
    gap: 1em;
  }
`;

export const Price = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;

  padding: 1em 1.3em;
  border: 2px solid var(--grey);
  transition: .1s linear;
  &:hover {
    border-color: var(--hover-blue);
    font-weight: 700;
  }
  
  &:focus {
    border-color: var(--dark-blue);
    font-weight: 700;
  }

  @media screen and (max-width: 735px) {
    padding: .5em .8em;
  }
`;

export const Button = styled.button`
  font-size: 1.2em;
  text-align: center;
  cursor: pointer;
  padding: 1rem;
  background-color: var(--hover-blue);
  border: 2px solid var(--hover-blue);
  transition: 0.1s linear;

  &:hover {
    background-color: #fff;
  }

  @media screen and (max-width: 735px) {
    padding: .6rem;
  }
`;