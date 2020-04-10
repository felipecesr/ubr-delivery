import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --icon-size: 24px;
    --body-bg: #ffb800;
    --primary-color: #2e3731;
  }

  body {
    background-color: var(--body-bg);
    color: var(--primary-color);
    font-family: sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyles
