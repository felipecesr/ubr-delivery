import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    background-color: #ddd;
  }

  ul {
    list-style: none;
  }
`

export default GlobalStyles
