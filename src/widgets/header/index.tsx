import { NavLink } from "react-router-dom"
import { Navbar, Wrap } from "./styles"

export const Header: React.FC = (): React.ReactElement => {
  return <>
    <Wrap>
      <Navbar>
        <NavLink to='/records'>records</NavLink>
        <NavLink to='/artists'>artists</NavLink>
      </Navbar>
    </Wrap>
  </>
}