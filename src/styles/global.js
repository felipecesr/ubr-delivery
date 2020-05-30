import { createGlobalStyle } from "styled-components"
import reset from "./reset"

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ${reset}

  :root {
    --icon-size: 24px;
    --body-bg: #fafafa;
    --primary-color: #2e3731;

    --dark-blue: hsl(209, 23%, 22%);
    --very-dark-blue: hsl(207, 26%, 17%);
    --dark-gray: hsl(0, 0%, 52%);
    --very-light-gray: hsl(0, 0%, 98%);
    --black: hsl(200, 15%, 8%);
    --white: hsl(0, 0%, 100%);
    --color-mode: 'light';
    --color-elements: var(--white);
    --color-background: var(--very-light-gray);
    --color-text: var(--black);
  }

  body {
    background-color: var(--body-bg);
    color: var(--primary-color);
    font-family: 'Source Sans Pro', sans-serif;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    width: 100%;
    display: block;
  }

  strong {
    font-weight: bold;
  }
`

export default GlobalStyles
