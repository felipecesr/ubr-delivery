import styled from "styled-components"

export const ContactButton = styled.li`
  flex: 1;
`

export const ContactButtonLink = styled.a`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContactButtonIcon = styled.div`
  svg {
    fill: var(--primary-color);
    width: var(--icon-size);
    height: var(--icon-size);
    margin-bottom: 8px;
  }
`

export const ContactButtonText = styled.span`
  display: block;
`
