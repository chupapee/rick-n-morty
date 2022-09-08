import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  & span {
    letter-spacing: 1px;
    font-size: 2em;
    color: green;
  }

  & img {
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: 750px) { 
    & span {
      font-size: 1.2em;
    }
    & img {
      width: 15px;
      height: 15px;
    }
  }
  @media screen and (max-width: 360px) {
    & span {
      font-size: 1em;
    }
  }
  @media screen and (max-width: 320px) {
    & span {
      letter-spacing: 0;
    }
  }
`