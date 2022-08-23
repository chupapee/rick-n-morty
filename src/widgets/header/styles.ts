import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const Wrap = styled.div`
  width: 100%;
  max-width: 1400px;
  min-width: 300px;
  
  margin: 0 auto;
  margin-bottom: 2em;
`

export const NavbarWrap = styled.nav`
  width: 100%;
  height: 20%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

type linkType = {
  gap?: string
}

export const LinksWrap = styled.div<linkType>`
  display: flex;
  gap: ${props => props.gap || '2em'};
`

export const NavbarLink = styled(NavLink)`
  color: #444;
  text-decoration: none;
  transition: color .1s linear;
  font-weight: 700;
  letter-spacing: .2em;
  padding: .5em;

  &:hover {
    color: var(--hover-blue);
    font-weight: 900;
}
`