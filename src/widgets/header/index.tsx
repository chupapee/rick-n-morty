import { NavbarLink, NavbarWrap, PagesWrap, TitleBox, Wrap } from "./styles"

export const Header: React.FC = (): React.ReactElement => {
  return (
    <>
      <Wrap>
        <NavbarWrap>
          <PagesWrap>
            <NavbarLink to="/records">Records</NavbarLink>
            <NavbarLink to="/artists">Artists</NavbarLink>
          </PagesWrap>

        </NavbarWrap>
        <TitleBox />
      </Wrap>
    </>
  );
}