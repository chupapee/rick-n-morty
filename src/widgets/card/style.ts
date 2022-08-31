import { transformShadow } from '../../app/globalStyles';
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
  position: relative;
`

export const Img = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  ${transformShadow}
`

type SProps = {
  status: string | undefined
}

export const Status = styled.p<SProps>`
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 600;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  background-color: ${({status}) => {
    switch (status){
      case 'Alive':
        return '#198754'
      case 'Dead':
        return '#DC3545'
      case 'unknown':
        return '#444'
    }
  }};
  margin-bottom: 5px;
  padding: 8px 0;
`

export const PlotWrap = styled.div`
  padding: 0 5px;
`