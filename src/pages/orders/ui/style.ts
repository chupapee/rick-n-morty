import styled from "styled-components";

export const Wrap = styled.div`
  display: flex; 
  gap: 2rem;

  color: var(--bg-blue);
  width: calc(100% - 1em);
  padding: 2em 3em 3em 5em;
  margin-bottom: 1em;
  border: 3px var(--bg-blue) solid;
  box-shadow: 1em 1em var(--bg-blue);

  @media screen and (max-width: 1000px) {
    padding: 2em 2em 2em;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media screen and (max-width: 500px) {
    padding: 1em 1em 1em;
    flex-wrap: wrap;
    gap: .7rem;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  padding: 2rem 0;
  
  & p {
    letter-spacing: 1px;
    font-weight: 600;
    color: #8A919F;
    margin-top: 8px;
  }
  
  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 500px) {
    padding: 1rem 0;
  }
`