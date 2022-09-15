import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  
  & p {
    margin: 1rem;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    gap: 10px;
    & span {
      width: 100%;
      align-self: left;
      font-weight: 600;
      color: #8A919F;
      letter-spacing: 1px;
      margin-left: 10px;
    }
  }
  
  @media screen and (max-width: 600px) {
    font-size: 1rem;
    flex-wrap: wrap;

    & p {
      flex-wrap: wrap;
      & span {
        width: fit-content;
        margin: 0;
      }
    }
  }
  `

export const List = styled.div`
  margin: 1rem;
  padding: 10px 0 0;
  height: 145px;
  overflow: overlay;
  line-height: 2rem;
  gap: 0;

  border-top: 1px solid var(--light-grey);
  border-bottom: 1px solid var(--light-grey);
  
  & div {
    height: 100%;
    margin-bottom: 10px;
    font-weight: 700;
  }
  
  & p {
    margin: 0;
  }
  & span {
    color: #8A919F;
  }
`