import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.5rem .5rem 0;
  font-size: 1.2rem;
  gap: .5rem;

  @media screen and (max-width: 735px) {
    padding: .8rem 0 0;
    font-size: 1rem;
  }
`