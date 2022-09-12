import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  color: var(--bg-blue);
  width: calc(100% - 1em);
  padding: 2em 3em 3em 5em;
  margin-bottom: 1em;
  border: 3px var(--bg-blue) solid;
  box-shadow: 1em 1em var(--bg-blue);

  & div {
    border-bottom: 3px solid black;
  }
`