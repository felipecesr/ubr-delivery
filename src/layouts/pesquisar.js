import React from "react"
import styled from "styled-components"
import { spacing } from "@styles/tokens"
import GlobalStyles from "@styles/global"
import MenuBar from "@components/MenuBar"

export default ({ children }) => (
  <>
    <GlobalStyles />
    <Wrapper>{children}</Wrapper>
    <MenuBar />
  </>
)

const Wrapper = styled.main`
  padding: 80px 1.5em;

  .ais-SearchBox-form {
    position: relative;
    width: 100%;
    margin-bottom: ${spacing.xs};
    background-color: var(--color-elements);
    border-radius: 8px;
    border: 0;
  }

  .ais-SearchBox-input {
    font-size: 1em;
    background: none;
    padding: 1em 1.5em;
    padding-left: 3.5em;
    color: var(--color-text);
    width: 100%;
    border: 0;
  }

  .ais-SearchBox-submit {
    position: absolute;
    top: calc(50% - 8px);
    left: 1.5em;
    padding: 0;
    border: 0;
    height: 16px;
    background: none;
  }

  .ais-SearchBox-submitIcon {
    width: 16px;
    height: auto;
  }

  .ais-SearchBox-reset {
    display: none;
  }

  .ais-Stats {
    color: var(--color-text);
    margin-bottom: ${spacing.lg};
  }

  .ais-Hits-item + .ais-Hits-item {
    margin-top: ${spacing.md};
  }
`
