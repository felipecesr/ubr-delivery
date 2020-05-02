import styled from "styled-components"
import { Link } from "gatsby"
import { CategoryIcon } from "../../CategoryIcon"

export const PanelWrapper = styled.li`
  background-color: var(--color-elements);
  border-radius: 10px;
  box-shadow: 0 0.08rem 0.8rem 0.08rem rgba(62, 57, 107, 0.04),
    0 0.42rem 1.12rem rgba(0, 0, 0, 0.04);
`

export const PanelLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
`

export const PanelContent = styled.div`
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const PanelIcon = styled(CategoryIcon)`
  margin-bottom: 16px;
`

export const PanelName = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
`
