import styled from "styled-components";

export const Wrap = styled.div`
  width: calc(100% - 1em);
  padding: 2em 3em 3em 5em;
  margin-bottom: 1em;
  border: 3px var(--grey) solid;
  box-shadow: 1em 1em var(--bg-blue);

  display: flex;
  justify-content: space-between;
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
`;

export const BtnWrap = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: space-between;
`;

type PType = {
  choosed?: boolean;
}

export const Price = styled.div<PType>`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1em 1.3em;
  border: 2px solid var(--grey);
  border-color: ${({choosed}) => (choosed && 'var(--dark-blue);')};
  font-weight: ${({choosed}) => (choosed && '700;')};
  transition: .1s linear;
  &:hover {
    border-color: var(--hover-blue);
    font-weight: 700;
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
`;