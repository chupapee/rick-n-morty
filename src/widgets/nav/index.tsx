import { useAppSelector } from "../../store/types";
import { Icon, LinksWrap, NavbarLink, NavbarWrap, Wrap } from "./styles";

export const Header: React.FC = (): React.ReactElement => {
  const shopLength = useAppSelector(state => state.cart.shopList.length)
  return (
    <>
      <Wrap>
        <NavbarWrap>
          <LinksWrap>
            <NavbarLink to="/episodes">Episodes</NavbarLink>
          </LinksWrap>
          <LinksWrap>
            <NavbarLink to="/orders">Orders</NavbarLink>
          </LinksWrap>
          <LinksWrap gap={'.5em'} >
            <NavbarLink to="/cart">
              <Icon length={shopLength} />
            </NavbarLink>
          </LinksWrap>
        </NavbarWrap>
      </Wrap>
    </>
  );
};