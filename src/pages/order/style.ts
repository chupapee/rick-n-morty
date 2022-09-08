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
`