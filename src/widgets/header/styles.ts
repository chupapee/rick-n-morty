import styled from "styled-components";

type CartContains = {
  isOnCart: boolean;
}

export const Wrap = styled.div<CartContains>`
  color: var(--bg-blue);
  width: calc(100% - 1em);
  padding: 2em 3em 3em 5em;
  margin-bottom: 1em;
  border: 3px var(--bg-blue) solid;
  box-shadow: 1em 1em var(--bg-blue);

  display: flex;
  justify-content: ${({ isOnCart }) => ( isOnCart ? 'center' : 'space-between' )};
  text-align: ${({ isOnCart }) => ( isOnCart ? 'center' : 'default' )};
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