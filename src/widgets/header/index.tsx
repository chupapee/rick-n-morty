import { LinksWrap, NavbarLink, NavbarWrap, Wrap } from "./styles";

export const Header: React.FC = (): React.ReactElement => {
  return (
    <>
      <Wrap>
        <NavbarWrap>
          <LinksWrap>
            <NavbarLink to="/charts">Charts</NavbarLink>
            <NavbarLink to="/albums">Albums</NavbarLink>
            <NavbarLink to="/artists">Artists</NavbarLink>
          </LinksWrap>
          <LinksWrap gap={'.5em'} >
            <NavbarLink to="/cart">shopIcon</NavbarLink>
            <NavbarLink to="/cart">searchIcon</NavbarLink>
          </LinksWrap>
        </NavbarWrap>
      </Wrap>
    </>
  );
};