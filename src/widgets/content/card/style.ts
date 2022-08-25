import { transformShadow } from './../../../app/globalStyles';
import styled from "styled-components";

export const Wrap = styled.div`
  width: calc(100% / 4 - 3em);
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
  ${transformShadow}
`