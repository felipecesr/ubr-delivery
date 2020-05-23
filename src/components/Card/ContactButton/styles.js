import styled from "styled-components"

export const ContactButton = styled.a`
  display: flex;
  align-items: center;
`

export const ContactButtonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ icon }) => (icon === "phone" ? "#1a1a1a" : "#26d366")};
  border-radius: 5px;
  width: 40px;
  height: 40px;
  margin-right: 1em;

  svg {
    width: 1em;
    height: 1em;
    fill: #fff;
  }
`

export const ContactButtonText = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
`
