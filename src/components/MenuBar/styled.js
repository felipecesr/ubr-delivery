import styled from "styled-components"

export const MenuBarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`

export const MenuBarNav = styled.nav`
  display: flex;
  background-color: #fff;
  color: #464d6c;
`

export const MenuBarItem = styled.button`
  display: block;
  color: #464d6c;
  padding: 1em;
  text-align: center;
  flex-grow: 1;
  border: 0;
  background: none;

  svg {
    width: 1.5em;
    height: 1.5em;
  }
`
