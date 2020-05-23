import styled from "styled-components"
import { Link } from "gatsby"

export const NavWrapper = styled.header`
  height: 3.5rem;
  text-align: center;
  position: relative;
  padding: 1em 0;
  background-color: #fff;
  margin-bottom: 24px;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
`

export const NavTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
`

export const NavButtonBack = styled(Link)`
  position: absolute;
  top: calc(50% - 16px);
  left: 1em;
  width: 32px;
  height: 32px;
`
