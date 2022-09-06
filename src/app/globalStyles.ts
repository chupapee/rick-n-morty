import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    border: none;
    box-sizing: border-box;
    outline: none;
  }
  body {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 16;
    padding: 0 15px 15px;

    max-width: 1600px;
    min-width: 300px;
    margin: 0 auto;
  }
  :root {
    --grey: #444;
    --light-grey: #E5E7EB;
    --blue: #4F46E5;
    --bg-blue: #394052;
    --dark-blue: #1D4ED8;
    --hover-blue: #9191FF;
  }
`
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const transformShadow = css`
  transition: .1s linear;
  &:hover {
    transform: translate(-1em, -1em)
  }
`