import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const NavWrapper = styled.header`
  height: 3.5rem;
  text-align: center;
  position: relative;
  padding: 1em 0;
  background-color: #ffb800;
  margin-bottom: 24px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
`

export const NavTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
`

export const NavButtonBack = styled(AniLink)`
  position: absolute;
  top: calc(50% - 16px);
  left: 1em;
  width: 32px;
  height: 32px;
`
