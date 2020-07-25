import styled from "styled-components"
import { spacing } from "../../styles/tokens"

export const AlgoliaWrapper = styled.footer`
  display: flex;
  flex-direction: row-reverse;
  margin-top: ${spacing.lg};
`

export const AlgoliaTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  color: #464d6c;
`

export const AlgoliaLogo = styled.svg`
  width: 1.4em;
  height: 1.4em;
  margin-left: 0.5em;
`
