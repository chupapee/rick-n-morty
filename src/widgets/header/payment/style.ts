import styled from "styled-components";

export const Wrap = styled.div`
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

type choosed = {
  choosed: boolean;
}

export const Price = styled.div<choosed>`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;

  padding: 1em 1.3em;
  border: 2px solid var(--bg-blue);
  transition: .1s linear;

  background-color: ${({ choosed }) => ( choosed && 'var(--bg-blue)' )};
  color: ${({ choosed }) => ( choosed && '#fff' )};
  &:hover {
    background-color: var(--bg-blue);
    color: #fff;
  }
  &:focus {
    background-color: var(--bg-blue);
    color: #fff;
  }

  @media screen and (max-width: 735px) {
    padding: .5em .8em;
  }
`;

export const Button = styled.button`
  font-size: 1.2em;
  color: #fff;
  text-align: center;
  cursor: pointer;
  padding: 1rem;
  transition: 0.1s linear;

  background: linear-gradient(to right, var(--dark-blue) 50%, var(--hover-blue) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 1s ease-out;

  &:disabled {
    background-position: left bottom;
  }

  @media screen and (max-width: 735px) {
    padding: .6rem;
  }
`;