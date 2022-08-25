import styled from "styled-components"

type IProps = {
  title: string
}

export const HeaderTitle = ({title}: IProps) => {
  return <>
    <TitleWrap>
      <Title>{title}</Title>
    </TitleWrap>
  </>
}

const TitleWrap = styled.div`
  width: calc(100% - 1em);
  padding: 2.5em 4em 4em 6em;
  margin-bottom: 1em;
  border: 3px var(--grey) solid;
  box-shadow: 1em 1em var(--bg-blue);
`

const Title = styled.p`
  font-size: 2em;
  font-weight: 700;
  letter-spacing: .2em;
`