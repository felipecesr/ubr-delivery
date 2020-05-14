import styled from "styled-components"
import { spacing } from "../../styles/tokens"

export const SearchWrapper = styled.section`
  .ais-SearchBox-form {
    position: relative;
    color: var(--color-text);
    margin-bottom: ${spacing.xl};
  }

  .ais-SearchBox-input {
    background-color: var(--color-elements);
    border: none;
    border-radius: 5px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    color: currentColor;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.4;
    padding: 1.2em 2.286em 1.2em 6em;
    width: 100%;

    &::placeholder {
      color: var(--color-text);
    }
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

  .ais-SearchBox-reset {
    display: none;
  }
`
