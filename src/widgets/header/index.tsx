import { LinksWrap, NavbarLink, NavbarWrap, TitleBox, Wrap } from "./styles"

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
          <NavbarLink to="/cart">shopIcon</NavbarLink>
        </NavbarWrap>
        <TitleBox />
      </Wrap>
    </>
  );
}