import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  gap: .8em;
  flex-direction: column;
  cursor: pointer;
`

export const ImgWrap = styled.div`
  height: 350px;
  background-color: var(--bg-blue);
  position: relative;

  & div {
    width: 100%;
    height: 100%;

    &:hover span{
      transform: translate(-1em, -1em);
    }
    &:hover img{     
      transform: translate(-1em, -1em);
    }
  }

  @media screen and (max-width: 510px) {
    height: 350px;

    & div:hover span,
    div:hover img{
      transform: none;
    }
  }
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all .1s linear;
`

type TitleType = {
  title?: string;
}

export const ImgTitle = styled.span<TitleType>`
  position: absolute;
  right: 0;
  top: 0;
  width: fit-content;
  height: auto;
  opacity: .9;

  padding: 5px 8px;
  margin: 7px 7px 0 0;
  font-weight: 600;
  border-radius: 5px;
  background-color: #129793;
  color: white;
  transition: all .1s linear;
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

type Detail = {
  gender?: string;
}

export const Title = styled.div<Detail>`
  font-size: 1.3rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;

  & p {
    font-size: 1rem;
    text-transform: uppercase;
    color: ${({gender}) => {
    switch (gender){
      case 'Male':
        return '#538BC4'
      case 'Female':
        return '#EC49A6'
      case 'unknown':
        return '#B2B2B2'
    }
  }};
  }
`

export const SubTitle = styled.span`
  text-decoration: underline;
  text-transform: uppercase;  
`