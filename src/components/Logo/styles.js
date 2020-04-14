import styled from "styled-components"
import background from "../../images/logo.png"

export const Logo = styled.h1`
  > a {
    display: block;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center;
    height: 120px;
    margin: 24px 0;
    text-indent: -9999px;
  }
`
