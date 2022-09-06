import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const Wrap = styled.div`
  width: 100%;
  max-width: 1400px;
  
  margin: 0 auto;
`

export const NavbarWrap = styled.nav`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
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
  padding: 1em;

  &:hover {
    color: var(--hover-blue);
    font-weight: 900;
}
`

type IType = {
  length: number;
}

export const Icon = styled.div<IType>`
  width: 40px;
  height: 40px;
  background: url('https://img.icons8.com/ios/50/000000/shopping-bag--v1.png') center/cover no-repeat;
  z-index: 2;
  text-align: center;
  position: relative;
  transition: all .1s linear;
  &:hover {
    background: url('https://i.postimg.cc/bwD3LP02/icons8-shopping-bag-50.png') center/cover no-repeat;
  }
  &::after {
    content: '${({length}) => length}';
    position: absolute;
    right: -1px;
    bottom: -3px;
    width: 20px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 700;
    color: #fff;
    padding-left: 3px;
    padding-bottom: 3px;
    background-color: var(--hover-blue);
  }
`