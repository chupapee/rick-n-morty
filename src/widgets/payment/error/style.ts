import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrap = styled.div`
  border-radius: 5px;
  border: 1px solid var(--light-grey);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 1rem;
  
  font-size: 1.5rem;
  padding: 2rem 3rem;
  width: fit-content;
  margin: 0 auto;
  margin-top: 20vh;

  & p {
    font-weight: 700;
  }

  @media screen and (max-width: 900px) {
    font-size: 1rem;
    padding: 1rem 1.8rem;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
  `

export const BackBtn = styled(NavLink)`
  text-decoration: none;
  color: var(--bg-blue);
  font-weight: 700;
  border: 3px solid var(--light-grey);
  border-radius: 5px;
  
  text-align: end;
  padding: .8rem 1.5rem;
  width: fit-content;
  align-self: flex-end;

  &:hover {
    border: solid 3px var(--bg-blue);
  }

  @media screen and (max-width: 940px) {
    width: 100%;
    text-align: center;
    font-size: 1rem;
    padding: .5rem 1rem;
  }
`