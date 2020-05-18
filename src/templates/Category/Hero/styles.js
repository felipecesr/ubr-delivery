import styled from "styled-components"
import { spacing } from "../../../styles/tokens"
import { CategoryIcon } from "../../../components/CategoryIcon"

export const HeroWrapper = styled.header`
  background-color: #ffb800;
  color: #1a1a1a;
  padding: 2em 1em;
  margin-bottom: ${spacing.lg};
`

export const HeroContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  text-align: center;
`

export const HeroTitle = styled.h2`
  font-size: 2rem;
`

export const HeroIcon = styled(CategoryIcon)`
  margin-bottom: ${spacing.sm};
  padding: 0.6875em;
  background-color: #eee;
  border-radius: 50%;
`
