import styled from 'styled-components';

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 4em;
  row-gap: 2em;
  padding-top: 1em;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;
  }

  @media screen and (max-width: 740px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 510px) {
    grid-template-columns: repeat(1, 1fr);
  }
`