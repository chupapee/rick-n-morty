import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  & span {
    padding: 5px 10px;
    max-width: 100%;
    height: fit-content;
  }
`

export const List = styled.ul`
  font-weight: 600;
  color: var(--bg-blue);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
  
  & li {
    display: inline-block;
    cursor: pointer;
    
    &:hover {
      color: var(--hover-blue);
    }
  }
`