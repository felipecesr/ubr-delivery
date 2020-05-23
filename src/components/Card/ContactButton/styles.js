import styled from "styled-components"

export const ContactButton = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5em 0;
`

export const ContactButtonIcon = styled.div`
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
  margin-right: 1em;

  svg {
    width: 1em;
    height: 1em;
    fill: #464d6c;
  }
`

export const ContactButtonText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #464d6c;
`
