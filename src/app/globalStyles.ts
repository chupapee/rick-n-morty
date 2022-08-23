import { createGlobalStyle } from "styled-components";

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
    padding: 15px;

    max-width: 1400px;
    min-width: 300px;
    margin: 0 auto;
  }
  :root {
    --grey: #444;
    --bg-blue: #394052;
    --hover-blue: #9191FF;
  }
`