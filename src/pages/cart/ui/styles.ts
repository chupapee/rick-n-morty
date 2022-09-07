import styled from "styled-components";

export const Title = styled.p`
  display: block;
  color: var(--bg-blue);
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 2rem;
`

export const Wrap = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
  `

export const ShopWrap = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

export const ShopItem = styled.div`
  color: var(--bg-blue);
  font-size: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid var(--light-grey);
  padding: 2rem 0;

  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    border-bottom: none;
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    & h6 {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-style: italic;
      font-weight: 600;
    }

    & span {
      width: fit-content;
      font-size: 1rem;
      cursor: pointer;
      color: var(--blue);

      &:hover {
        color: var(--hover-blue);
      }
    }
  }

  @media screen and (max-width: 550px) {
    font-size: 1.5em;
    padding: 1rem 0;
  }
`