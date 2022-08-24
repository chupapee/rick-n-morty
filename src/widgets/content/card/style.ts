import styled from "styled-components";

export const Wrap = styled.div`
  width: calc(100% / 4 - 2em);
  display: flex;
  gap: .8em;
  flex-direction: column;
  cursor: pointer;
`

export const ImgWrap = styled.div`
  height: 100%;
  background-color: var(--bg-blue);
`

export const Img = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .1s linear;

  &:hover {
    transform: translate(-1em, -1em)
  }
`