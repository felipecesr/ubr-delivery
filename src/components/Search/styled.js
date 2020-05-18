import styled, { keyframes } from "styled-components"
import media from "styled-media-query"
import { spacing } from "../../styles/tokens"

const rotate = keyframes`
  from {
    transition: transform 0.3s;
    transition-timing-function: ease-out;
  }

  to {
    transform: translate3d(100%,0,0);
    transition-delay: 0.4s;
  }
`

export const SearchWrapper = styled.section`
  background-color: #fff;
  padding: 3em;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    animation: ${rotate} 0.3s linear 0.2s forwards;
  }

  .ais-SearchBox-form {
    position: relative;
    color: var(--color-text);
    width: 100%;
    margin-bottom: ${spacing.xl};

    transition: all 0.5s;
    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  }

  .ais-SearchBox-input {
    font-family: inherit;
    line-height: 1;
    display: inline-block;
    box-sizing: border-box;
    padding: 0.05em 0;
    color: #000;
    border: 0;
    border-bottom: 2px solid;
    font-size: 2em;
    width: 90%;

    ${media.greaterThan("small")`
      font-size: 6vw;
      width: 50%;
    `}
  }

  .ais-SearchBox-submit {
    background: none;
    border: none;
    left: 2.5em;
    padding: 0;
    position: absolute;
    top: calc(50% - 8px);

    svg {
      height: 16px;
      width: 16px;
    }
  }

  .ais-SearchBox-reset,
  .ais-SearchBox-submitIcon {
    display: none;
  }
`
