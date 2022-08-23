import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const Wrap = styled.div`
  width: 100%;
  max-width: 1415px;
  min-width: 300px;
  height: 100px;
  
  margin: 0 auto;
  padding: 15px;
`

export const NavbarWrap = styled.nav`
  width: 100%;
  height: 20%;
  margin: 0 auto;
  margin-bottom: 10px;

  display: flex;
`

export const PagesWrap = styled.div`
  display: flex;
  gap: 2em;
`

export const NavbarLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  transition: color .1s linear;

  &:hover {
    color: blue;
  }
`

export const TitleBox = styled.div`
  width: 100%;
  height: 80%;
`