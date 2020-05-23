import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { CategoryIcon } from "../../CategoryIcon"

export const PanelWrapper = styled.li`
  background-color: var(--color-elements);
  border-radius: 10px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
`

export const PanelLink = styled(AniLink)`
  display: block;
  width: 100%;
  height: 100%;
`

export const PanelContent = styled.div`
  padding: 1.5em 1.375em;
  width: 100%;
  height: 100%;
`

export const PanelIcon = styled(CategoryIcon)`
  margin-bottom: 8px;
`

export const PanelName = styled.p`
  color: #464d6c;
  font-size: 1.25em;
  font-weight: bold;
  margin-bottom: 8px;
`

export const PanelCounter = styled.p`
  color: rgba(49, 46, 46, 0.5);
  font-size: 1em;
`
