import { css, createGlobalStyle } from "styled-components"

export const reset = css`
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  img,
  small,
  strong,
  ol,
  ul,
  li,
  article,
  aside,
  figure,
  figcaption,
  footer,
  header,
  nav,
  section {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
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

export const Reset = createGlobalStyle`${reset}`

export default reset
