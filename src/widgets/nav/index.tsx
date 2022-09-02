import styled from "styled-components";
import { useAppSelector } from "../../store/types";
import { LinksWrap, NavbarLink, NavbarWrap, Wrap } from "./styles";

type IType = {
  length: number;
}

const Icon = styled.div<IType>`
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
    right: 0;
    bottom: -5px;
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 4px;
    font-size: 10px;
    font-weight: 700;
    color: #fff;
    background-color: var(--hover-blue);
  }
`

export const Header: React.FC = (): React.ReactElement => {
  const shopLength = useAppSelector(state => state.cart.shopList.length)
  return (
    <>
      <Wrap>
        <NavbarWrap>
          <LinksWrap>
            <NavbarLink to="/episodes">Episodes</NavbarLink>
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