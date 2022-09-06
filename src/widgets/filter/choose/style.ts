import styled from "styled-components"

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  cursor: pointer;
  position: relative;

  & p:hover {
    color: var(--hover-blue);
  }

  & img {
    z-index: 5;
    width: 15px;
    height: 15px;
    position: absolute;
    right: -25px;
    top: 7px;
  }
`

export const Options = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  position: absolute;
  left: 0;
  top: calc(100% + 10px);
  box-shadow: 0px 0px 1px 0px;
  z-index: 2;

  & span {
    width: 100%;
    text-align: center;
    padding: 10px 20px;
    background-color: #fff;
    border: 3px solid white;
    border-radius: 2px;

    &:hover {
      border: solid 3px var(--dark-blue);
      color: var(--hover-blue);
    }
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);

    & span {
      padding: 5px 15px;
    }
  }
  
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
`