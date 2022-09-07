import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.5rem 0;
  font-size: 1.2rem;
  gap: 3rem;

  @media screen and (max-width: 735px) {
    padding: .8rem 0;
    font-size: 1rem;
  }
`