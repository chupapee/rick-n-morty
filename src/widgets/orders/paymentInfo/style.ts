import styled from 'styled-components';

export const Wrap = styled.div`
  display: block;
  border: 1px solid var(--light-grey);
  border-radius: 10px;
  padding: 2rem 2rem 0;
  width: 100%;
  font-size: 1.2rem;

  & div {
    margin-bottom: 1rem;
    line-height: 2rem;

    & h3 {
      font-weight: 700;
      color: #8A919F;
    }

    & span {
      color: green;
    }
  }

  
  @media screen and (max-width: 600px) {
    font-size: 1rem;
    padding: 1.2rem 1.2rem 0;
  }
`