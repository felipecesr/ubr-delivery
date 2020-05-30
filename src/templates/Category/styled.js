import styled from "styled-components"
import Card from "@components/Card"
import { spacing } from "@styles/tokens"

export const CardWrapper = styled(Card)`
  margin-top: ${spacing.md};

  &:first-child {
    margin-top: 0;
  }
`
