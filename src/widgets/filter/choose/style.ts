import styled from "styled-components"

export const Select = styled.div`
  display: flex;
  gap: .5%;
  width: 100%;
  cursor: pointer;
  position: relative;
  text-align: center;

  & button {
    width: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #fff;

    & svg {
      max-width: 100%;
      height: 100%;
      fill: var(--bg-blue);
    }

    & svg:hover {
      fill: var(--hover-blue);
    }
  }
`

type TranslateType = {
  translateTo: number;
}

export const Options = styled.div<TranslateType>`
  background-color: #fff;
  display: flex;
  overflow: hidden;
  padding: 0 1em;
  width: 90%;
  border: 2px solid var(--bg-blue);
  border-right: 0;
  border-left: 0;

  & span {
    font-weight: 600;
    color: var(--bg-blue);
    width: 100%;
    text-align: center;
    padding: 30px;
    border: 2px solid #fff;
    border-bottom: 0;
    border-top: 0;
    transition: transform .4s linear;
    transform: translate( ${({ translateTo }) => translateTo + '%, 0'});
    
    &:hover {
      border-color: var(--hover-blue);
      color: var(--hover-blue);
    }
  }

  @media screen and (max-width: 700px) {
    & span {
      padding: 15px;
    }
  }
  
  @media screen and (max-width: 500px) {
    & span {
      font-size: .8rem;
      padding: 10px;
    }
  }
`