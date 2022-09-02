import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  min-height: 50vh;
`

export const ShopWrap = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1.5em;
`

export const ShopItem = styled.div`
  font-size: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid var(--light-grey);
  padding: 2rem 0;

  & div {
    display: flex;
    flex-direction: column;
    gap: 10px;

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
`