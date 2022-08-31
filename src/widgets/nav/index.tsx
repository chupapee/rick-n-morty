import { LinksWrap, NavbarLink, NavbarWrap, Wrap } from "./styles";

export const Header: React.FC = (): React.ReactElement => {
  return (
    <>
      <Wrap>
        <NavbarWrap>
          <LinksWrap>
            {/* <NavbarLink to="/characters">Characters</NavbarLink> */}
            <NavbarLink to="/episodes">Episodes</NavbarLink>
          </LinksWrap>
          <LinksWrap gap={'.5em'} >
            <NavbarLink to="/cart"></NavbarLink>
            <NavbarLink to="/cart">searchIcon</NavbarLink>
          </LinksWrap>
        </NavbarWrap>
      </Wrap>
    </>
  );
};